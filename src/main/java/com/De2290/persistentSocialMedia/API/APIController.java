package com.De2290.persistentSocialMedia.API;

import java.util.List;
import java.util.stream.Stream;

import com.De2290.persistentSocialMedia.API.DB.Login;
import com.De2290.persistentSocialMedia.API.DB.LoginRepository;
import com.De2290.persistentSocialMedia.API.DB.Post;
import com.De2290.persistentSocialMedia.API.DB.PostForm;
import com.De2290.persistentSocialMedia.API.DB.PostRepository;
import com.De2290.persistentSocialMedia.API.DB.Reply;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class APIController {

    @Autowired
    private LoginRepository loginrepository;

    @Autowired
    private PostRepository postrepository;

    @PostMapping("/api/makeNewLogin")
    public Login makeNewLogin(@RequestBody Login login) {
        return loginrepository.save(login);
    }

    @PostMapping("/api/getLogin")
    public Login getLoginByCred(@RequestBody Login login) {
        return loginrepository.findAll().stream()
                .filter(e -> e.getUsername().equals(login.getUsername()) && e.getPassword().equals(login.getPassword()))
                .findFirst().orElse(null);
    }

    @GetMapping("/api/getLoginbyId/{id}")
    public Login getLoginbyID(@PathVariable String id) {
        return loginrepository.findById(id).orElse(null);
    }

    @GetMapping("/api/getAllLogins")
    public List<Login> getAllLogins() {
        return loginrepository.findAll();
    }

    @GetMapping("/api/getAllPosts")
    public List<Post> getAllPosts() {
        return postrepository.findAll();
    }

    @PostMapping("/api/makeNewPost")
    public Post makeNewPost(@RequestBody Post post) {
        return postrepository.save(post);
    }

    @PostMapping("/api/replyByPostId/{id}")
    public Post reply(@PathVariable String id, @RequestBody Reply reply) {
        Post post = postrepository.findById(id).orElse(null);
        List<Reply> postReplies = post.getReplies();
        post.getReplies().add(reply);
        post.setReplies(postReplies);
        return postrepository.save(post);
    }

    @GetMapping("/api/getPostbyId/{id}")
    public Post getPostId(@PathVariable String id) {
        return postrepository.findById(id).orElse(null);
    }

}
