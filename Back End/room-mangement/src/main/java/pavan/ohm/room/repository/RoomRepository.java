package pavan.ohm.room.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import pavan.ohm.room.entity.Room;

public interface RoomRepository extends MongoRepository<Room, String> {
}

