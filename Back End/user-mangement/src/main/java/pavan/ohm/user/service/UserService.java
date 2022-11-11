package pavan.ohm.user.service;

import java.util.List;

import pavan.ohm.user.entity.Employee;
import pavan.ohm.user.entity.User;

public interface UserService {

	//Employee CRUD Operations
	public String addEmployee(Employee employee);

	public String updateEmployee(String id, Employee employee);

	public String deleteEmployee(String id);

	public Employee viewEmployee(String id);

	public List<Employee> viewAllEmployee();
	
	public String addUser(User user);

	public String updateUser(String id, User user);

	public String deleteUser(String id);

	public Employee viewUser(String id);

	public List<User> viewAllUser();
	
	public String validateUser(String username, String password);

}
