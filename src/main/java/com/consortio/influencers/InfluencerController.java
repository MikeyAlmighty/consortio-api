package com.consortio.influencers;

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
@RequestMapping("/api/v1/influencers")
public class InfluencerController {
    @Autowired
    private InfluencerService influencerService;

    @GetMapping
    public ResponseEntity<List<Influencer>> getAllInfluencers() {
        return new ResponseEntity<List<Influencer>>(influencerService.getAllInfluencers(), HttpStatus.OK);
    }

    @GetMapping ("/{id}")
    public ResponseEntity<Optional<Influencer>> getById(@PathVariable ObjectId id) {
        return new ResponseEntity<Optional<Influencer>>(influencerService.getById(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Influencer> createInfluencer(@RequestBody Influencer newInfluencer) {
        return new ResponseEntity<Influencer>(influencerService.createInfluencer(newInfluencer), HttpStatus.OK);
    }

    @DeleteMapping ("/{id}")
    public ResponseEntity<?> deleteInfluencer(@PathVariable ObjectId id){
        influencerService.deleteInfluencer(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
