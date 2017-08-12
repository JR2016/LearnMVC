<%@ page language="java" contentType="text/html; charset=utf-8"
         pageEncoding="utf-8"%>

<%
    String path = request.getContextPath();
    String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<html>
<head>
    <title>Learn Ajax</title>
    <script src="http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>
    <script src="js/loadFile.js"></script>
</head>
<body>
<div>
    <h1 id="origin">测试Ajax</h1>
    <button id="click" type="button">点我测试</button>
</div>
</body>
</html>
