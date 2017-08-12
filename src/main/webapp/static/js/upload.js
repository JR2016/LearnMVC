/**
 * Created by songjiarui on 17/6/29.
 */
$(document).ready(function () {
    var fileInput = $('#test-upload');
    var info = $('#test-file-info');//document.getElementById("test-file-info");
    var preview = $('#test-image-preview');
    fileInput.on("change", function () {
        if (!fileInput.val()) {
            info.text("没有选择文件")

            return;
        }
        console.log(fileInput.val());



        var file = fileInput[0].files[0]; //获取文件引用
        console.log(file.type);
        info.text('文件：' + file.name + '<br>' +
                  '大小：' + file.size + '<br>' +
                  '修改：' + file.lastModifiedDate
        );



        if (!file.type.endsWith("jpg") && !file.type.endsWith("raw") && !file.type.endsWith("png")) {
            alert("文件不合法");
            return ;
        }

        var reader = new FileReader();

        reader.onload = function (e) {
            var data = e.target.result;
            preview.style.background = 'url(' + data + ')';
        }

        reader.readAsDataURL(file);
    })

})