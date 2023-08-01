package pavan.ohm.room.control;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import pavan.ohm.room.entity.Room;
import pavan.ohm.room.service.RoomService;

import java.util.List;

@RestController
@RequestMapping("/room")
public class RoomControl {

	@Autowired
	RoomService roomService;

	@PostMapping("/add")
	public String addRoom(@RequestBody Room room) {
		return roomService.addRoom(room);
	}

	@PutMapping("/update/{id}")
	public String updateRoom(@PathVariable String id, @RequestBody Room room) {
		return roomService.updateRoom(id, room);
	}

	@DeleteMapping("/delete/{id}")
	public String deleteRoom(@PathVariable String id) {
		return roomService.deleteRoom(id);
	}

	@GetMapping("/view/{id}")
	public Room viewRoom(@PathVariable String id) {
		return roomService.viewRoom(id);
	}

	@GetMapping("/viewall")
	public List<Room> viewAllRoom() {
		return roomService.viewAllRoom();
	}
	
	@GetMapping("/view-all-room-id")
	public List<String> viewAllRoomId(){
		return roomService.viewAllRoomId();
	}

}
