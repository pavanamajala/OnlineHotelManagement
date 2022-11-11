package pavan.ohm.reservation.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import pavan.ohm.reservation.entity.Reservation;

public interface ReservationRepository extends MongoRepository<Reservation, String> {

}
