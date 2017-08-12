<%@ page language="java" contentType="text/html; charset=utf-8"
         pageEncoding="utf-8"%>

<%
    String path = request.getContextPath();
    String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<%--<%@ page contentType="text/html; charset=utf-8"%>--%>
<html>
<head>
    <title>注册</title>
    <script Charset="utf-8" type="text/javascript" src="http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>
    <script Charset="utf-8" type="text/javascript" src="js/register.js"></script>
</head>
<body>
<form id="test-register" method="post" action="#" onsubmit="return register()">
    <p>
        用户名：<input type="text", id="username", name="username">
    </p>

    <p>
        口令：<input type="password", id="password1", name="password1">
    </p>
    <p>
        重复口令：<input type="password", id="password2", name="password2">
    </p>
    <p>
        <button id="submit">提交</button> <button id="reset">重置</button>

    </p>

</form>

</body>
</html>
