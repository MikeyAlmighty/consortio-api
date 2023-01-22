package com.consortio.influencers;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SocialDetails {
    private String handle;
    private String email;
    private String instagram;
    private String tiktok;
    private String youtube;
}
