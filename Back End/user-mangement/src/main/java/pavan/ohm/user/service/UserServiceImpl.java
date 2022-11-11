package pavan.ohm.user.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pavan.ohm.user.entity.Employee;
import pavan.ohm.user.entity.User;
import pavan.ohm.user.repository.EmployeeRepository;
import pavan.ohm.user.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	EmployeeRepository employeeRepository;

	@Autowired
	UserRepository userRepository;
	
	//Employee CRUD Operations
	@Override
	public String addEmployee(Employee employee) {
		employeeRepository.save(employee);
		return "registeration successfull";
	}

	@Override
	public String updateEmployee(String id, Employee employee) {
		Optional<Employee> custContainer = employeeRepository.findById(id);
		if (custContainer.isPresent()) {
			Employee old = custContainer.get();
			old.setEmployeeEmail(employee.getEmployeeEmail());
			old.setEmployeeName(employee.getEmployeeName());
			old.setEmployeeSalary(employee.getEmployeeSalary());
			old.setEmployeeType(employee.getEmployeeType());
			employeeRepository.save(old);
			return "updation successfull";
		} else {
			return "ID not found";
		}
	}

	@Override
	public String deleteEmployee(String id) {
		Optional<Employee> custContainer = employeeRepository.findById(id);
		if (custContainer.isPresent()) {
			employeeRepository.deleteById(id);
			return "Deleted Successfully";
		} else {
			return "ID not found";
		}
	}

	@Override
	public Employee viewEmployee(String id) {
		return employeeRepository.findById(id).get();
	}

	@Override
	public List<Employee> viewAllEmployee() {
		return employeeRepository.findAll();
	}

	@Override
	public String addUser(User user) {
		userRepository.save(user);
		return "registration success";
	}

	@Override
	public String updateUser(String id, User user) {
		return null;
	}

	@Override
	public String deleteUser(String id) {
		userRepository.deleteById(id);
		return "deletion success";
	}

	@Override
	public Employee viewUser(String id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<User> viewAllUser() {
		return userRepository.findAll();
	}

	@Override
	public String validateUser(String username, String password) {
		List<User> listUsers=viewAllUser();
		for(User user : listUsers) {
			if(user.getUsername().equals(username) && user.getPassword().equals(password)) {
				return user.getRole();
			}
		}
		return "unmatched";
	}
	
}
