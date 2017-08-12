/**
 * Created by songjiarui on 17/6/27.
 */
$(document).ready(function () {
   var arr = ['a','b','c'];
   var set = (['x','y','z']);
   var map = ([[1,'x'],[2,'y'],[3,'z']]);
   var link = $('#test-link');

   link.on('click', function () {
       // for (var a of arr) {
       //     alert(a);
       // }
       //
       // for (var b of set) {
       //     alert(b);
       // }

       for (var c of map) {
           alert(c[0] + "=" + c[1]);
       }
   })
});