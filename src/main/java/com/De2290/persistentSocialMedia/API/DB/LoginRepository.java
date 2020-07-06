package com.De2290.persistentSocialMedia.API.DB;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface LoginRepository extends MongoRepository<Login, String>{
    
    
}