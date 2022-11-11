package pavan.ohm.room;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import pavan.ohm.room.entity.Room;
import pavan.ohm.room.repository.RoomRepository;
import pavan.ohm.room.service.RoomService;

@SpringBootTest
class RoomTests {

	@Autowired
	RoomService roomService;

	@MockBean
	RoomRepository roomRepository;

	@Test
	@DisplayName("Add Room Test")
	public void addRoomTest() {
		Room room = new Room("1", "A.C", 1600, "false");
		roomService.addRoom(room);
		verify(roomRepository, times(1)).save(room);
	}

	@Test
	@DisplayName("Delete Room Test")
	public void DeleteRoomTest() {
		roomService.deleteRoom("1");
		assertEquals(0, roomService.viewAllRoom().size());
	}

	@Test
	@DisplayName("Update Room Test")
	public void updateRoomTest() {
		Room room = new Room("1", "A.C", 1600, "false");
		when(roomRepository.save(room)).thenReturn(room);
		String id = room.getRoomId();
		room.setRoomType("Non_A.C");
		roomService.updateRoom(id, room);
		Assertions.assertThat(room.getRoomType().equals("Non_A.C"));
	}

	@Test
	@DisplayName("View all Room Test")
	public void ViewAllRoomTest() {
		when(roomRepository.findAll())
				.thenReturn(Stream.of(new Room("1", "A.C", 1600, "false"), new Room("2", "Non A.C", 2600, "false"))
						.collect(Collectors.toList()));
		assertEquals(2, roomService.viewAllRoom().size());
	}

}
