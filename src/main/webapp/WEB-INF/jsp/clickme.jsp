
<%@ page language="java" contentType="text/html; charset=gb2312"
         pageEncoding="gb2312"%>
<!-- ��δ������˼�ǻ�ȡ��ǰ��Ŀ��·�����磺http://localhost:8080/��Ŀ���ơ� -->
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
<a id="test-link" href="#0">��������</a>
</body>
</html>