package pavan.ohm.inventory.service;

import java.util.List;

import pavan.ohm.inventory.entity.Inventory;

public interface InventoryService {

	// Inventory CRUD Operations
	public Inventory addInventory(Inventory inventory);

	public void updateInventory(String id, Inventory inventory);

	public void deleteInventory(String id);

	public Inventory viewInventory(String id);

	public List<Inventory> viewAllInventory();

}
