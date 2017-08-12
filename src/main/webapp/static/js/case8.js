/**
 * Created by songjiarui on 17/6/27.
 */
$(document).ready(function () {
    var link = $('#test-link');
    link.on('click', function () {
        func(1,23,4,53,45,234);
    })
})

var func = function (a, b, c, ...rest) {
    if(arguments.length < 4) {
        for (var i = 0; i < arguments.length; i++) {
            console.log(arguments[i]);
        }
    }
    console.log('a = ' + a);
    alert('he');
    console.log('b = ' + b);
    //noinspection JSUnresolvedVariable
    console.log(rest);
    return;
}