package com.example.inventory.config;

import com.example.inventory.model.Product;
import com.example.inventory.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public void run(String... args) throws Exception {
        // Clear existing data
        productRepository.deleteAll();

        // Add sample products
        productRepository
                .save(new Product("Laptop", "High-performance laptop for business use", 999.99, 15, "Electronics"));
        productRepository.save(new Product("Mouse", "Wireless optical mouse", 25.99, 50, "Electronics"));
        productRepository.save(new Product("Keyboard", "Mechanical gaming keyboard", 89.99, 30, "Electronics"));
        productRepository.save(new Product("Monitor", "24-inch LED monitor", 199.99, 20, "Electronics"));
        productRepository.save(new Product("Desk", "Office desk with drawers", 299.99, 10, "Furniture"));
        productRepository.save(new Product("Chair", "Ergonomic office chair", 199.99, 25, "Furniture"));
        productRepository.save(new Product("Bookshelf", "Wooden bookshelf", 149.99, 8, "Furniture"));
        productRepository.save(new Product("Coffee Mug", "Ceramic coffee mug", 12.99, 100, "Kitchen"));
        productRepository.save(new Product("Water Bottle", "Stainless steel water bottle", 19.99, 75, "Kitchen"));
        productRepository.save(new Product("Notebook", "Spiral-bound notebook", 8.99, 200, "Office Supplies"));

        System.out.println("Sample data loaded successfully!");
    }
}


