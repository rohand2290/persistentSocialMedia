package com.De2290.persistentSocialMedia.API.DB;

public class Reply {
    private String content;
    private String author;

    public Reply(String content, String author) {
        this.content = content;
        this.author = author;
    }

    public Reply() {
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

}