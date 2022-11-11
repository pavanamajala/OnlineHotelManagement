package pavan.ohm.guest;

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

import pavan.ohm.guest.entity.Guest;
import pavan.ohm.guest.repository.GuestRepository;
import pavan.ohm.guest.service.GuestService;

@SpringBootTest
class GuestTests {

	@Autowired
	private GuestService guestService;

	@MockBean
	private GuestRepository guestRepository;

	// Guest Tests
	@Test
	@DisplayName("Add Guest Test")
	public void addGuestTest() {
		Guest guest = new Guest("11", "pavan", "9010309411", "Pa1@gmail", "male", "kkd");
		guestService.addGuest(guest);
		verify(guestRepository, times(1)).save(guest);
	}

	@Test
	@DisplayName("Delete Guest Test")
	public void deleteGuest() {
		guestService.deleteGuest("11");
		assertEquals(0, guestService.viewAllGuest().size());
	}

	@Test
	@DisplayName("View all Guest Test")
	public void ViewAllGuestTest() {
		when(guestRepository.findAll()).thenReturn(Stream
				.of(new Guest("11", "pavan", "901009411", "Pa1@gmail", "male", "kkd"),
						new Guest("12", "jyothi", "63047938", "jyo@gmail", "female", "rjy"))
				.collect(Collectors.toList()));
		assertEquals(2, guestService.viewAllGuest().size());
	}

	@Test
	@DisplayName("Update Guest Test")
	public void updateGuest() {
		Guest guest = new Guest("11", "pavan", "901009411", "Pa1@gmail", "male", "kkd");
		when(guestRepository.save(guest)).thenReturn(guest);
		String id = guest.getGuestId();
		guest.setGuestName("jyothi");
		guestService.updateGuest(id, guest);
		Assertions.assertThat(guest.getGuestName().equals("jyothi"));
	}

}
