package com.consortio.brands;

import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BrandService {
    @Autowired
    private BrandRepository brandRepository;

    public List<Brand> getAllBrands(){
       return brandRepository.findAll();
    }

    public Optional<Brand> getById(ObjectId id){
       return brandRepository.findById(id);
    }

    public void createBrand(Brand newBrand) {
        brandRepository.insert(newBrand);
    }

    public void deleteBrand(ObjectId id) {
        brandRepository.deleteById(id);
    }
}
