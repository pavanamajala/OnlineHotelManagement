package pavan.ohm.inventory.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import pavan.ohm.inventory.entity.Inventory;

@Repository
public interface InventoryRepository extends MongoRepository<Inventory, String> {

}
