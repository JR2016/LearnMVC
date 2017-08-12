/**
 * Created by songjiarui on 17/6/26.
 */
'use strict'
$(document).ready(function () {
    var link = $('#test-link');
    link.on('click',function () {
        var name = '小明';
        var age = '12';
        //noinspection JSAnnotator
        var info = `${name}今年${age}`;
        alert(info)
    })
});