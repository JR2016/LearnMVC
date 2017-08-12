
'use district'
//去掉数组中的null
$(document).ready(function () {
    var array1 = [1, ' ', null, 4];
    var link = $('#test-link')
    link.on('click', function () {
        console.log(array1.filter(function (x) {
            return x;
        }))
    })
})
