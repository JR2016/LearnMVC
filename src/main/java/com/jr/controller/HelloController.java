package com.jr.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * @author -- songjiarui
 * @time -- 17/6/8
 * @description --
 */

//使用注解开发 spring mvc
//使用该注解 spring容器将会根据注解创建一个bean对象  该对象的id为类名(首字母小写)
//<bean id="helloController" class="cn.sxt.controller.HelloController"/>

@Controller
public class HelloController {
    @RequestMapping("/upload")
    public String hi() {
        System.out.println("hi");
        return "/WEB-INF/jsp/upload.jsp";
    }

    @RequestMapping("/register")
    public String register() {
        return "/WEB-INF/jsp/register.jsp";
    }


    @RequestMapping("/hello")
    public String hello(@RequestParam String name, Model model) {
        model.addAttribute("name", name);
        return "/WEB-INF/jsp/register.jsp";
    }

    @RequestMapping("/learnAjax")
    public String learnAjax() {
        return "/WEB-INF/jsp/ajaxLoadFile.jsp";
    }

}
