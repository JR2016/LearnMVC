/**
 * Created by songjiarui on 17/6/26.
 */
$(document).ready(function () {
    var link = $('#test-link');
    var person = {
        name: "xiaoqiang",
        age: 10,
        addr: '贝克街'
    };

    link.on('click',function () {
        for (var key in person) {
            alert(key);
        }
    })
})