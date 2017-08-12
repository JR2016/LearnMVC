/**
 * Created by songjiarui on 17/6/27.
 */

//将数组中的每个元素做平方运算，得到一个新的数组
'use district'
$(document).ready(function () {
    var array1 = [1, 2, 3, 4];
    var link = $('#test-link')
    link.on('click', function () {
        console.log(array1.map(learnMap))
    })
})

var learnMap = function (x) {
    return x * x;
}