'use strict'
$(document).ready(function(){
    var a = $('#test-link');
    a.on('click', function () {
        //noinspection JSAnnotator
        alert(`多行
        字符串
        测试`);
    });

})

