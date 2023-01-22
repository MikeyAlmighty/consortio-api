package com.consortio.brands;

import java.util.Date;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "brands")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Brand {
    @Id
    private ObjectId id;

    private String name;
    private String origin;
    private boolean active;
    private Date incorporationDate;
    private IPR ipr;
}