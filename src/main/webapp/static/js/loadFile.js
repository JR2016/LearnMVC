/**
 * Created by songjiarui on 17/6/29.
 */
$(document).ready(function () {
    var click = $('#click');
    var h1 = $('#origin');
    click.on('click', function () {
        h1.load('/file/loadData');
    })
})