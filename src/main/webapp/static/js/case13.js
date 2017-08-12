/**
 * Created by songjiarui on 17/6/28.
 */

//斐波那契数列迭代器{0，1，1，2，3，5，8}
$(document).ready(function () {
    var link = $('#test-link');
    link.on('click', function () {
        var gen = fib(2);
        alert(gen.next().value); 0
        alert(gen.next().value); 1
        alert(gen.next().value); 1
    })
})

function* fib(max) {
    var
        a = 0,
        b = 1,
        t,
        n = 0;
    while (n < max) {
        yield a;
        t = a + b;
        a = b;
        b = t;
        n ++;
    }
    return a;
}