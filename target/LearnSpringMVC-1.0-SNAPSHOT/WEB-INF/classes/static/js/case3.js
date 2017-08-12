/**
 * Created by songjiarui on 17/6/26.
 */
$(document).ready(function () {
    var link = $("#test-link");
    link.on("click", function () {
        var arr = ['hello','world','china'];
        alert(arr[1]);
    })
})