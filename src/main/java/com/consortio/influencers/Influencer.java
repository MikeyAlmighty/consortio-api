package com.consortio.influencers;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "influencers")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Influencer {
    @Id
    private ObjectId id;
    private String firstName;
    private String lastName;
    private int numbers;
    private int posts;
    private int clicks;
    private SocialDetails socialDetails;
}