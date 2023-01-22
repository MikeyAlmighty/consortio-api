package com.consortio.influencers;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InfluencerRepository extends MongoRepository<Influencer, ObjectId> {}
