package pavan.ohm.reservation.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import pavan.ohm.reservation.entity.Guest;
import pavan.ohm.reservation.entity.Reservation;
import pavan.ohm.reservation.entity.Room;
import pavan.ohm.reservation.repository.ReservationRepository;

@Service
public class ReservationServiceImpl implements ReservationService {

	@Autowired
	ReservationRepository reservationRepository;

	@Autowired
	RestTemplate restTemplate;

	// Reservation CRUD Operations
	@Override
	public String addReservation(Reservation reservation) {
		try {
			System.out.println(reservation.toString());
			Room room = restTemplate.getForObject("http://localhost:8082/room/view/" + reservation.getRoomId(),
					Room.class);
			Guest guest = restTemplate.getForObject("http://localhost:8084/guest/view/" + Long.valueOf(reservation.getGuestId()) ,
					Guest.class);
			if (room.getRoomAvailable().equals("true")) {
				reservationRepository.save(reservation);
				room.setRoomAvailable("false");
				restTemplate.put("http://localhost:8082/room/update/" + reservation.getRoomId(), room);
				return "Room number " + reservation.getRoomId() + " is booked for '" + guest.getGuestName() + "'";
			} else {
				return "noroom";
			}
		} catch (Exception e) {
			return "noguest" + e;
		}
	}

	@Override
	public String updateReservation(String id, Reservation reservation) {
		Optional<Reservation> custContainer = reservationRepository.findById(id);
		if (custContainer.isPresent()) {
			Reservation old = custContainer.get();
			old.setCheckInDate(reservation.getCheckInDate());
			old.setCheckOutDate(reservation.getCheckOutDate());
			old.setNoOfGuest(reservation.getNoOfGuest());
			old.setReservationId(reservation.getReservationId());
			old.setRoomId(reservation.getReservationId());
			old.setTotalPrice(reservation.getTotalPrice());
			reservationRepository.save(old);
			return "Updation success";
		}
		return "ID not found";
	}

	@Override
	public String deleteReservation(String id) {
		try {
			Optional<Reservation> custContainer = reservationRepository.findById(id);
			if (custContainer.isPresent()) {
				Reservation reservation = custContainer.get();
				Room room = restTemplate.getForObject("http://localhost:8082/room/view/" + reservation.getRoomId(),
						Room.class);
				room.setRoomAvailable("true");
				restTemplate.put("http://localhost:8082/room/update/" + reservation.getRoomId(), room);
				reservationRepository.delete(reservation);
				return "Deletion Success";
			} else {
				return "ID not found";
			}
		} catch (Exception e) {
			return "something went wrong" + "/n" + e;
		}
	}

	@Override
	public Reservation viewReservation(String id) {
		return reservationRepository.findById(id).get();
	}

	@Override
	public List<Reservation> viewAllReservation() {
		return reservationRepository.findAll();
	}

	//@SuppressWarnings("null")
	@Override
	public List<Room> viewAllAvailableRooms() {
//		@SuppressWarnings("unchecked")
//		List<Room> room1 = (List<Room>) restTemplate.getForObject("http://16.171.133.10:8082/room/viewall", List.class);
//		List<Room> room3=null;
//		for(Room room2: room1) {
//			if(room2.getRoomAvailable().equals("true")) {
//				room3.add(room2);
//			}
//		}
//		return room3;
		return null;
	}

}
