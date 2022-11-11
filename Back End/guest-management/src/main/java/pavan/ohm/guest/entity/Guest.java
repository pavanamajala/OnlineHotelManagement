package pavan.ohm.guest.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "guest")
public class Guest {

	@Id
	private String guestId;
	private String guestName;
	private String guestContact;
	private String guestEmail;
	private String guestGender;
	private String guestAddress;
	
	public Guest() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Guest(String guestId, String guestName, String guestContact, String guestEmail, String guestGender,
			String guestAddress) {
		super();
		this.guestId = guestId;
		this.guestName = guestName;
		this.guestContact = guestContact;
		this.guestEmail = guestEmail;
		this.guestGender = guestGender;
		this.guestAddress = guestAddress;
	}

	public String getGuestId() {
		return guestId;
	}

	public void setGuestId(String guestId) {
		this.guestId = guestId;
	}

	public String getGuestName() {
		return guestName;
	}

	public void setGuestName(String guestName) {
		this.guestName = guestName;
	}

	public String getGuestContact() {
		return guestContact;
	}

	public void setGuestContact(String guestContact) {
		this.guestContact = guestContact;
	}

	public String getGuestEmail() {
		return guestEmail;
	}

	public void setGuestEmail(String guestEmail) {
		this.guestEmail = guestEmail;
	}

	public String getGuestGender() {
		return guestGender;
	}

	public void setGuestGender(String guestGender) {
		this.guestGender = guestGender;
	}

	public String getGuestAddress() {
		return guestAddress;
	}

	public void setGuestAddress(String guestAddress) {
		this.guestAddress = guestAddress;
	}
	
}
