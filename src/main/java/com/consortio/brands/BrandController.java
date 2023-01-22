package com.consortio.brands;

import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/brands")
public class BrandController {
    @Autowired
    private BrandService brandService;

    @GetMapping
    public ResponseEntity<List<Brand>> getAllBrands() {
        return new ResponseEntity<List<Brand>>(brandService.getAllBrands(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Brand>> getById(@PathVariable ObjectId id) {
        return new ResponseEntity<Optional<Brand>>(brandService.getById(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Brand> createBrand(@RequestBody Brand newBrand) {
        brandService.createBrand(newBrand);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @DeleteMapping ("/{id}")
    public ResponseEntity<?> deleteInfluencer(@PathVariable ObjectId id){
        brandService.deleteBrand(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
