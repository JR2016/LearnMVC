/**
 * Created by songjiarui on 17/6/27.
 */

//出入两个参数，将参数运算后的结果与下一个参数组成两个新的参数；此例，用于求和
'use district'
$(document).ready(function () {
    var array1 = [1, 2, 3, 4];
    var link = $('#test-link')
    link.on('click', function () {
        console.log(array1.filter(learnMap))
    })
})

var learnMap = function (x, y) {
    return x + y;
}