package com.De2290.persistentSocialMedia.API.DB;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface PostRepository extends MongoRepository<Post, String> {

}