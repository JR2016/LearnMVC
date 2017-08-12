
<%@ page language="java" contentType="text/html; charset=gb2312"
         pageEncoding="gb2312"%>
<!-- 这段代码的意思是获取当前项目的路径，如：http://localhost:8080/项目名称。 -->
<%
    String path = request.getContextPath();
    String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE html>
<%@ page contentType="text/html; charset=gb2312"%>
<html lang="en">
<head>
    <script src="http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>
    <script src="js/case13.js"></script>
</head>
<body>
<a id="test-link" href="#0">点我试试</a>
</body>
</html>