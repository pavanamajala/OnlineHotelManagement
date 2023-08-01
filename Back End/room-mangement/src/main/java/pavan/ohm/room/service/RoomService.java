package pavan.ohm.room.service;

import java.util.List;

import pavan.ohm.room.entity.Room;

public interface RoomService {

	public String addRoom(Room room);

	public String updateRoom(String id, Room room);

	public String deleteRoom(String id);

	public Room viewRoom(String id);

	public List<Room> viewAllRoom();
	
	public List<String> viewAllRoomId();

}
