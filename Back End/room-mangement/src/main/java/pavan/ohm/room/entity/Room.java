package pavan.ohm.room.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="room")
public class Room {

	@Id
	private String roomId;
	private String roomType;
	private int roomRent;
	private String roomAvailable;
	
	public Room() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Room(String roomId, String roomType, int roomRent, String roomAvailable) {
		super();
		this.roomId = roomId;
		this.roomType = roomType;
		this.roomRent = roomRent;
		this.roomAvailable = roomAvailable;
	}

	public String getRoomId() {
		return roomId;
	}

	public void setRoomId(String roomId) {
		this.roomId = roomId;
	}

	public String getRoomType() {
		return roomType;
	}

	public void setRoomType(String roomType) {
		this.roomType = roomType;
	}

	public int getRoomRent() {
		return roomRent;
	}

	public void setRoomRent(int roomRent) {
		this.roomRent = roomRent;
	}

	public String getRoomAvailable() {
		return roomAvailable;
	}

	public void setRoomAvailable(String roomAvailable) {
		this.roomAvailable = roomAvailable;
	}
	
	
	
}
