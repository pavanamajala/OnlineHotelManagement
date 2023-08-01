package pavan.ohm.guest.service;

import java.util.List;

import pavan.ohm.guest.entity.Guest;

public interface GuestService {

	// Guest CRUD Operations
	public Guest addGuest(Guest guest);

	public void updateGuest(String id, Guest guest);

	public void deleteGuest(String id);

	public Guest viewGuest(String id);

	public List<Guest> viewAllGuest();
	
	public List<String> viewAllGuestId();
}
