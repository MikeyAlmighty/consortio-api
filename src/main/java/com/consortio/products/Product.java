package com.consortio.products;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "products")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Product {

    public Product(String name, String description, String brandId) {
        this.brandId = brandId;
        this.name = name;
        this.description = description;
    }

    @Id
    private ObjectId id;

    private String brandId;

    private String name;

    private String description;

}
