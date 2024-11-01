package pavan.ohm.guest.control;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import pavan.ohm.guest.entity.Guest;
import pavan.ohm.guest.service.GuestService;

@RestController
@RequestMapping("/guest")
@CrossOrigin(origins="*")
public class GuestControl {

	@Autowired
	GuestService guestService;

	// Guest CRUD Operations
	@PostMapping("/add")
	public Guest addGuest(@RequestBody Guest guest) {
		return guestService.addGuest(guest);
	}

	@PutMapping("/update/{id}")
	public void updateGuest(@PathVariable String id, @RequestBody Guest guest) {
		 guestService.updateGuest(id, guest);
	}

	@DeleteMapping("/delete/{id}")
	public void deleteGuest(@PathVariable String id) {
		 guestService.deleteGuest(id);
	}

	@GetMapping("/view/{id}")
	public Guest viewGuest(@PathVariable String id) {
		return guestService.viewGuest(id);
	}

	@GetMapping("/viewall")
	public List<Guest> viewAllGuest() {
		return guestService.viewAllGuest();
	}
	
	@GetMapping("/view-all-guest-id")
	public List<String> viewAllGuestId(){
		return guestService.viewAllGuestId();
	}

}
