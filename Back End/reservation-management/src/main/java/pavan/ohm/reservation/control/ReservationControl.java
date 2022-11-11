package pavan.ohm.reservation.control;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import pavan.ohm.reservation.entity.Reservation;
import pavan.ohm.reservation.entity.Room;
import pavan.ohm.reservation.service.ReservationService;

@RestController
@RequestMapping("/reservation")
public class ReservationControl {

	@Autowired
	ReservationService reservationService;
	
	// Reservation CRUD Operations
	@PostMapping("/add")
	public String addReservation(@RequestBody Reservation reservation) {
		return reservationService.addReservation(reservation);
	}

	@PutMapping("/update/{id}")
	public String updateReservation(@PathVariable String id, @RequestBody Reservation reservation) {
		return reservationService.updateReservation(id, reservation);
	}

	@DeleteMapping("/delete/{id}")
	public String deleteReservation(@PathVariable String id) {
		return reservationService.deleteReservation(id);
	}

	@GetMapping("/view/{id}")
	public Reservation viewReservation(@PathVariable String id) {
		return reservationService.viewReservation(id);
	}

	@GetMapping("/viewall")
	public List<Reservation> viewAllReservation() {
		return reservationService.viewAllReservation();
	}
	
	@GetMapping("/room/viewall")
	public List<Room> viewAllRoom() {
		return reservationService.viewAllAvailableRooms();
	}

}
