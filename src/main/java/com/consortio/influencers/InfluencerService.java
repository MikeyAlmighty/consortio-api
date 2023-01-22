package com.consortio.influencers;

import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InfluencerService {
    @Autowired
    private InfluencerRepository influencerRepository;

    public List<Influencer> getAllInfluencers(){
        return influencerRepository.findAll();
    }

    public Optional<Influencer> getById(ObjectId id){
        return influencerRepository.findById(id);
    }

    public Influencer createInfluencer(Influencer newInfluencer){
        return influencerRepository.insert(newInfluencer);
    }
    
    public void deleteInfluencer(ObjectId id) {
        influencerRepository.deleteById(id);
    }
}
