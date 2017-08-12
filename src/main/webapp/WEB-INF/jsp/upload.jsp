<%@ page language="java" contentType="text/html; charset=utf-8"
         pageEncoding="utf-8"%>

<%
    String path = request.getContextPath();
    String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<%--<%@ page contentType="text/html; charset=utf-8"%>--%>
<html>
<head>
    <title>文件上传</title>
    <script Charset="utf-8" type="text/javascript" src="http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>
    <script Charset="utf-8" type="text/javascript" src="js/upload.js"></script>
</head>
<body>

<form id="unload" action="http://localhost/test" method="post" enctype="multipart/form-data">
    <p>
        图片预览
    </p>
    <p></p>
    <div id="test-image-preview" style="border: 1px solid #ccc; width: 100%; height: 200px; background-size: contain; background-repeat: no-repeat; background-position: center center;"></div>
    <p>
        <input type="file" id="test-upload" name="test">
    </p>
    <p id="test-file-info"></p>
</form>


</body>
</html>

