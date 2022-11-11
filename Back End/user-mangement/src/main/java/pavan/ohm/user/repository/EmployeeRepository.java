package pavan.ohm.user.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import pavan.ohm.user.entity.Employee;

public interface EmployeeRepository extends MongoRepository<Employee, String>{

}
