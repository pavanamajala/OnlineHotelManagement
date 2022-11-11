package pavan.ohm.room.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pavan.ohm.room.entity.Room;
import pavan.ohm.room.repository.RoomRepository;

import java.util.List;
import java.util.Optional;

@Service
public class RoomServiceImpl implements RoomService {

	@Autowired
	RoomRepository roomRepository;

	public String addRoom(Room room) {
		roomRepository.save(room);
		return "registered successfully";
	}

	public String updateRoom(String id, Room room) {
		Optional<Room> custContainer = roomRepository.findById(id);
		if (custContainer.isPresent()) {
			Room old = custContainer.get();
			old.setRoomRent(room.getRoomRent());
			old.setRoomType(room.getRoomType());
			old.setRoomAvailable(room.getRoomAvailable());
			roomRepository.save(old);
			return "Updated Successfully";
		} else {
			return "ID not found";
		}
	}

	public String deleteRoom(String id) {
		java.util.Optional<Room> custContainer = roomRepository.findById(id);
		if (custContainer.isPresent()) {
			Room cust = custContainer.get();
			roomRepository.delete(cust);
			return "Deleted Successfully";
		} else {
			return "ID not found";
		}
	}

	public Room viewRoom(String id) {
		return roomRepository.findById(id).get();
	}

	public List<Room> viewAllRoom() {
		return roomRepository.findAll();
	}

}
