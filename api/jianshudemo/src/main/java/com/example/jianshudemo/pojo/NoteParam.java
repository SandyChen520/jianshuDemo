package com.example.jianshudemo.pojo;

public class NoteParam {

    private Integer id;
    private String content;
    private String title;

    @Override
    public String toString() {
        return "NoteParam{" +
                "id=" + id +
                ", content='" + content + '\'' +
                ", title='" + title + '\'' +
                '}';
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
