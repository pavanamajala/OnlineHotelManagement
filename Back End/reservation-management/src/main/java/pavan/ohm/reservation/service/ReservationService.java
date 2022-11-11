package pavan.ohm.reservation.service;

import java.util.List;

import org.springframework.data.mongodb.repository.Query;

import pavan.ohm.reservation.entity.Reservation;
import pavan.ohm.reservation.entity.Room;

public interface ReservationService {

	// Reservation CRUD Operations
	public String addReservation(Reservation reservation);

	public String updateReservation(String id, Reservation reservation);

	public String deleteReservation(String id);

	public Reservation viewReservation(String id);

	public List<Reservation> viewAllReservation();

	@Query("{roomAvailable:true}")
	public List<Room> viewAllAvailableRooms();

}
