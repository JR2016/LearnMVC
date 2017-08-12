/**
 * Created by songjiarui on 17/6/28.
 */
$(document).ready(function () {
        var username = document.getElementById("username");
        var pwd1 = document.getElementById("password1");
        var pwd2 = document.getElementById("password2");
        var nameRe = /[0-9a-zA-Z]{3,10}/
        var pwdRe = /.{6,20}/
        var sub = $('#submit')
        sub.on('click',function () {
            if (nameRe.test(username.value)) {
                if(pwdRe.test(pwd1.value)) {
                    if (!pwdRe.test(pwd2.value) || pwd1.value !== pwd2.value) {
                        alert("口令不一致")
                    }
                }
                else {
                    alert("密码输入不合法")
                    return false;
                }
            }
            else {
                alert("用户名输入不合法")
                return false;
            }
        })

})