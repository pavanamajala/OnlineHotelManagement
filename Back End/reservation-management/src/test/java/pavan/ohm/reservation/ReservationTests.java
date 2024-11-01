package pavan.ohm.reservation;

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

import pavan.ohm.reservation.entity.Reservation;
import pavan.ohm.reservation.repository.ReservationRepository;
import pavan.ohm.reservation.service.ReservationService;

@SpringBootTest
class ReservationTests {

	@Autowired
	private ReservationService reservationService;

	@MockBean
	private ReservationRepository reservationRepository;

	// Guest Tests
//	@Test
//	@DisplayName("Add Reservation Test")
//	public void addReservationTest() {
//		Reservation reservation = new Reservation("11", "101", "201", "01/09", "02/09", 4, 3000);
//		reservationService.addReservation(reservation);
//		verify(reservationRepository, times(1)).save(reservation);
//	}

	@Test
	@DisplayName("Delete Reservation Test")
	public void deleteReservation() {
		reservationService.deleteReservation("11");
		assertEquals(0, reservationService.viewAllReservation().size());
	}

	@Test
	@DisplayName("View all Reservation Test")
	public void ViewAllReservationTest() {
		when(reservationRepository.findAll())
				.thenReturn(Stream
						.of(new Reservation(),
								new Reservation())
						.collect(Collectors.toList()));
		assertEquals(2, reservationService.viewAllReservation().size());
	}

	@Test
	@DisplayName("Update Reservation Test")
	public void updateReservation() {
		Reservation reservation = new Reservation();
		when(reservationRepository.save(reservation)).thenReturn(reservation);
		String id = reservation.getReservationId();
//		reservation.setCheckOutDate();
		reservationService.updateReservation(id, reservation);
		Assertions.assertThat(reservation.getCheckInDate().equals("31/08"));
	}

}
