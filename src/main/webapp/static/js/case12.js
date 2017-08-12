/**
 * Created by songjiarui on 17/6/28.
 */
//闭包函数，函数返回一个函数，返回的函数调用时才会执行运算
$(document).ready(function () {
    var link = $('#test-link');
    link.on('click', function () {
        var f1 = count();
        var f2 = count(10);
        console.log(f1.counter());
        console.log(f1.counter());
        console.log(f1.counter());
        console.log(f2.counter());
        console.log(f2.counter());
        console.log(f2.counter());
    })
})

function count(init) {
    var x = init || 0;
    return {
        counter : function () {
            x = x + 1;
            return x;
        }
    }
}