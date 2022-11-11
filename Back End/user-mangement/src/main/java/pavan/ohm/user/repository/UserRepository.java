package pavan.ohm.user.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import pavan.ohm.user.entity.User;

@Repository
public interface UserRepository extends MongoRepository<User, String>{
	 User findByUsername(String username);
}
