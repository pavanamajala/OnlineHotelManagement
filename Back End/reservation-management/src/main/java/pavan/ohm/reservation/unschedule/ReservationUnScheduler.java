package pavan.ohm.reservation.unschedule;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import pavan.ohm.reservation.entity.Reservation;
import pavan.ohm.reservation.entity.Room;
import pavan.ohm.reservation.service.ReservationService;

@Component
public class ReservationUnScheduler {
	
	@Autowired
	private ReservationService reservationService;
	

	@Autowired
	private RestTemplate restTemplate;
	
	@Scheduled(fixedRate = 5000) // This will run the method every 5 seconds
	public void unSchuduleTasks() {
		List<Reservation> allReservations = reservationService.viewAllReservation();
		Date now = new Date();
		System.out.println(now);
		List<Reservation> filteredReservations = allReservations.stream().filter(e -> e.getCheckOutDate().before(now)).collect(Collectors.toList());
		filteredReservations.forEach(e -> {
			Room room = restTemplate.getForObject("http://localhost:8082/room/view/" + e.getRoomId(), Room.class);
			room.setRoomAvailable("true");
			restTemplate.put("http://localhost:8082/room/update/" + e.getRoomId(), room);
			reservationService.deleteReservation(e.getReservationId());
			System.out.println("reservation deleted:- " + e.toString());
		});
	}	
}
