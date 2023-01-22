package com.consortio.products;

import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {
   @Autowired
   private ProductRepository productRepository;

   public List<Product> getAllProducts(){
    return productRepository.findAll();
   }

   public Optional<Product> getById(ObjectId id){
    return productRepository.findById(id);
   }

   public Product createProduct(String brandId, String name, String description ) {
      Product product = new Product(brandId, name, description);
      productRepository.insert(product);
      return product;
      // mongoTemplate.update(Product.class)
      //    .matching(Criteria.where("brandId").is(brandId));
         // .apply(new Update().push("").value(product))
   }

   public void deleteProduct(ObjectId id){
      productRepository.deleteById(id);
   }
}