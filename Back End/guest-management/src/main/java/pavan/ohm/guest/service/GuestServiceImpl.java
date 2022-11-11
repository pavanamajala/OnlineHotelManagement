package pavan.ohm.guest.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pavan.ohm.guest.entity.Guest;
import pavan.ohm.guest.repository.GuestRepository;

@Service
public class GuestServiceImpl implements GuestService {

	@Autowired
	GuestRepository guestRepository;
	
	//Guest CRUD Operations
  	@Override
  	public Guest addGuest(Guest guest) {
  		return guestRepository.save(guest);
  	}

  	@Override
  	public void updateGuest(String id, Guest guest) {
  		Optional<Guest> custContainer = guestRepository.findById(id);
  		if (custContainer.isPresent()) {
  			Guest old = custContainer.get();
  			old.setGuestAddress(guest.getGuestAddress());
  			old.setGuestContact(guest.getGuestContact());
  			old.setGuestEmail(guest.getGuestEmail());
  			old.setGuestGender(guest.getGuestGender());
  			old.setGuestName(guest.getGuestName());
  			guestRepository.save(old);
  		} else {
  		}
  	}

  	@Override
  	public void deleteGuest(String id) {
  		Optional<Guest> custContainer = guestRepository.findById(id);
  		if (custContainer.isPresent()) {
  			guestRepository.deleteById(id);
  		} else {
  		}
  	}

  	@Override
  	public Guest viewGuest(String id) {
  		return guestRepository.findById(id).get();
  	}

  	@Override
  	public List<Guest> viewAllGuest() {
  		return guestRepository.findAll();
  	}

	
}
