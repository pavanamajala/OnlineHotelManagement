package pavan.ohm.guest.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import pavan.ohm.guest.entity.Guest;

@Repository
public interface GuestRepository extends MongoRepository<Guest, String>{

}
