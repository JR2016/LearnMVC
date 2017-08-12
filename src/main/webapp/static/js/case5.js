/**
 * Created by songjiarui on 17/6/26.
 */
$(document).ready(function () {
    var age = 10;
    var link = $('#test-link');
    link.on('click', function () {
        if (age > 10) {
            alert('adult');
        } else if (age > 20) {
            alert('old man');
        } else {
            alert('babe');
        }
    })
})