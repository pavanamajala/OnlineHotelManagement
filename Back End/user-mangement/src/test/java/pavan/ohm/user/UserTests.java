package pavan.ohm.user;

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

import pavan.ohm.user.entity.Employee;
import pavan.ohm.user.repository.EmployeeRepository;
import pavan.ohm.user.service.UserService;

@SpringBootTest
class UserTests {

	@MockBean
	EmployeeRepository employeeRepository;

	@Autowired
	UserService employeeService;

	// Employee Tests
	@Test
	@DisplayName("Add Employee Test")
	public void addEmployee() {
		Employee employee = new Employee("11", "pavan", 22000, "pa1@gmail", "manager");
		employeeService.addEmployee(employee);
		verify(employeeRepository, times(1)).save(employee);
	}

	@Test
	@DisplayName("Delete Employee Tests")
	public void deleteEmployee() {
		employeeService.deleteEmployee("11");
		assertEquals(0, employeeService.viewAllEmployee().size());
	}

	@Test
	@DisplayName("Update Employee Tests")
	public void updateEmployee() {
		Employee employee = new Employee("11", "pavan", 22000, "pa1@gmail", "manager");
		when(employeeRepository.save(employee)).thenReturn(employee);
		String id = employee.getEmployeeId();
		employee.setEmployeeType("owner");
		employeeService.updateEmployee(id, employee);
		Assertions.assertThat(employee.getEmployeeType().equals("receptionist"));
	}

	@Test
	@DisplayName("View all Employee Test")
	public void ViewAllInventoryTest() {
		when(employeeRepository.findAll())
				.thenReturn(Stream
						.of(new Employee("11", "pavan", 22000, "pa1@gmail", "manager"),
								new Employee("12", "jyothi", 30000, "jyo@gmail", "owner"))
						.collect(Collectors.toList()));
		assertEquals(2, employeeService.viewAllEmployee().size());
	}

}
