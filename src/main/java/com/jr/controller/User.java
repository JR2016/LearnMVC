package com.jr.controller;

/**
 * @author -- songjiarui
 * @time -- 17/6/20
 * @description --
 */

public class User {
    private String name;
    private String age;

    public String getName() {
        return name;
    }

    public String getAge() {
        return age;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAge(String age) {
        this.age = age;
    }



    @Override
    public String toString() {
        return "User{" +
                "name='" + name + '\'' +
                ", age='" + age + '\'' +
                '}';
    }
}
