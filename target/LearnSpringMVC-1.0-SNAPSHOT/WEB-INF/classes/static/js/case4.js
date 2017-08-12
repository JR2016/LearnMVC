/**
 * Created by songjiarui on 17/6/26.
 */
$(document).ready(function () {
    var link = $('#test-link');
    link.on('click', function () {
        var xiaoming = {
          age: 12,
          name: "xiaoming",
          addr: "xishan"
        };

        alert(xiaoming.addr);
    })
})