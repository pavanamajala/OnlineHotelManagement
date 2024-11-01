package pavan.ohm.reservation.entity;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "reservation")
public class Reservation {

	@Id
	private String reservationId;
	private String roomId;
	private String guestId;
	private Date checkInDate;
	private Date checkOutDate;
	private int noOfGuest;
	private int totalPrice;

	public Reservation() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Reservation(String reservationId, String roomId, String guestId, Date checkInDate, Date checkOutDate,
			int noOfGuest, int totalPrice) {
		super();
		this.reservationId = reservationId;
		this.roomId = roomId;
		this.guestId = guestId;
		this.checkInDate = checkInDate;
		this.checkOutDate = checkOutDate;
		this.noOfGuest = noOfGuest;
		this.totalPrice = totalPrice;
	}

	public String getReservationId() {
		return reservationId;
	}

	public void setReservationId(String reservationId) {
		this.reservationId = reservationId;
	}

	public String getRoomId() {
		return roomId;
	}

	public void setRoomId(String roomId) {
		this.roomId = roomId;
	}

	public String getGuestId() {
		return guestId;
	}

	public void setGuestId(String guestId) {
		this.guestId = guestId;
	}

	public Date getCheckInDate() {
		return checkInDate;
	}

	public void setCheckInDate(Date checkInDate) {
		this.checkInDate = checkInDate;
	}

	public Date getCheckOutDate() {
		return checkOutDate;
	}

	public void setCheckOutDate(Date checkOutDate) {
		this.checkOutDate = checkOutDate;
	}

	public int getNoOfGuest() {
		return noOfGuest;
	}

	public void setNoOfGuest(int noOfGuest) {
		this.noOfGuest = noOfGuest;
	}

	public int getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(int totalPrice) {
		this.totalPrice = totalPrice;
	}

	@Override
	public String toString() {
		return "Reservation [reservationId=" + reservationId + ", roomId=" + roomId + ", guestId=" + guestId
				+ ", checkInDate=" + checkInDate + ", checkOutDate=" + checkOutDate + ", noOfGuest=" + noOfGuest
				+ ", totalPrice=" + totalPrice + "]";
	}

}
