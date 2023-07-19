package pavan.ohm.user.control;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import pavan.ohm.user.entity.AuthenticationRequest;
import pavan.ohm.user.entity.AuthenticationResponse;
import pavan.ohm.user.entity.Employee;
import pavan.ohm.user.entity.Guest;
import pavan.ohm.user.entity.Inventory;
import pavan.ohm.user.entity.User;
import pavan.ohm.user.repository.UserRepository;
import pavan.ohm.user.service.MyUserDetailsService;
import pavan.ohm.user.service.UserService;
import pavan.ohm.user.util.JwtUtil;

@RestController
@RequestMapping("/user")
public class UserControl {

	@Autowired
	private RestTemplate restTemplate;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtUtil jwtTokenUtil;
	
	@Autowired
	private UserRepository userRepository;

	@Autowired
	private MyUserDetailsService userDetailsService;
	

	/*****************Employee CRUD Operations**********************/
	@PostMapping("/employee/add")
	public String addEmployee(@RequestBody Employee employee) {
		return userService.addEmployee(employee);
	}

	@PutMapping("/employee/update/{id}")
	public String updateEmployee(@PathVariable String id, @RequestBody Employee employee) {
		return userService.updateEmployee(id, employee);
	}

	@DeleteMapping("/employee/delete/{id}")
	public String deleteEmployee(@PathVariable String id) {
		return userService.deleteEmployee(id);
	}

	@GetMapping("/employee/view/{id}")
	public Employee viewEmployee(@PathVariable String id) {
		return userService.viewEmployee(id);
	}

	@GetMapping("/employee/viewall")
	public List<Employee> viewAllEmployee() {
		return userService.viewAllEmployee();
	}
	
	
	/*****************Sign CRUD Operations**********************/
	@PostMapping("/sign/add")
	public String addUser(@RequestBody User user) {
		return userService.addUser(user);
	}
//
//	@PutMapping("/sign/update/{id}")
//	public String updateUser(@PathVariable String id, @RequestBody User user) {
//		return userService.updateUser(id, user);
//	}

	@DeleteMapping("/sign/delete/{id}")
	public String deleteUser(@PathVariable String id) {
		return userService.deleteUser(id);
	}

//	@GetMapping("/sign/view/{id}")
//	public Employee viewUser(@PathVariable String id) {
//		return userService.viewUser(id);
//	}

	@GetMapping("/sign/viewall")
	public List<User> viewAllUser() {
		return userService.viewAllUser();
	}
	
	
	@PostMapping("/sign/validate/{username}/{password}")
	public String signInValidate(@PathVariable String username, @PathVariable String password) {
		return userService.validateUser(username, password);
	}
	
	
	
	/*****************Guest CRUD Operations**********************/
	
	@PostMapping("/guest/add")
	public Guest addGuest(@RequestBody Guest guest) {
		return restTemplate.postForObject("http://localhost:8888/guest/add", guest, Guest.class);
	}

	@PutMapping("/guest/update/{id}")
	public void updateGuest(@PathVariable String id, @RequestBody Guest guest) {
		 restTemplate.put("http://localhost:8888/guest/update/"+id, guest, Guest.class);
	}

	@DeleteMapping("/guest/delete/{id}")
	public void deleteGuest(@PathVariable String id) {
	    restTemplate.delete("http://localhost:8888/guest/delete/"+id, Guest.class);
	}

	@GetMapping("/guest/view/{id}")
	public Guest viewGuest(@PathVariable String id) {
		return restTemplate.getForObject("http://localhost:8888/guest/view/"+id, Guest.class);
	}

	@GetMapping("/guest/viewall")
	public List<Guest> viewAllGuest() {
		@SuppressWarnings("unchecked")
		List<Guest> guest = restTemplate.getForObject("http://localhost:8888/guest/viewall", List.class);
		return guest;
	}
	
	
	/*****************Inventory CRUD Operations**********************/
	
	@PostMapping("/inventory/add")
	public Inventory addInventory(@RequestBody Inventory inventory) {
		return restTemplate.postForObject("http://localhost:8888/inventory/add", inventory, Inventory.class);
	}

	@PutMapping("/inventory/update/{id}")
	public void updateInventory(@PathVariable String id, @RequestBody Inventory inventory) {
		 restTemplate.put("http://localhost:8888/inventory/update/"+id, inventory, Inventory.class);
	}

	@DeleteMapping("/inventory/delete/{id}")
	public void deleteInventory(@PathVariable String id) {
	    restTemplate.delete("http://localhost:8888/inventory/delete/"+id, Inventory.class);
	}

	@GetMapping("/inventory/view/{id}")
	public void viewInventory(@PathVariable String id) {
		 restTemplate.getForObject("http://localhost:8888/inventory/view/"+id, Inventory.class);
	}

	@GetMapping("/inventory/viewall")
	public List<Inventory> viewAllInventory() {
		@SuppressWarnings("unchecked")
		List<Inventory> inventory = restTemplate.getForObject("http://localhost:8888/guest/viewall", List.class);
		return inventory;
	}

	
	
	/*****************Authentication**********************/
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public Authentication login(@RequestBody User userRequest) {
	    Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(userRequest.getUsername(), userRequest.getPassword()));
	    boolean isAuthenticated = isAuthenticated(authentication);
	    if (isAuthenticated) {
	        SecurityContextHolder.getContext().setAuthentication(authentication);
	    }
	    return authentication;
	}

	private boolean isAuthenticated(Authentication authentication) {
	    return authentication != null && !(authentication instanceof AnonymousAuthenticationToken) && authentication.isAuthenticated();
	}
	
	
	@RequestMapping(value = "/authenticate", method = RequestMethod.POST)
	public String createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) {
		List<User> userDetails = userService.viewAllUser();
		for(User user: userDetails) {
			if(user.getPassword().equals(authenticationRequest.getPassword()) && user.getUsername().equals(authenticationRequest.getUsername())) return user.getRole();
		}
		return "";
//		try {
//			authenticationManager.authenticate(
//					new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword())
//			);
//		}
//		catch (BadCredentialsException e) {
//			throw new Exception("Incorrect username or password", e);
//		}
//		final UserDetails userDetails = userDetailsService
//				.loadUserByUsername(authenticationRequest.getUsername());
//
//		final String jwt = jwtTokenUtil.generateToken(userDetails);
//		
//		User us = userRepository.findByUsername(authenticationRequest.getUsername());
//
//		return ResponseEntity.ok(new AuthenticationResponse(jwt, us));		
		
	}
	
	
}
