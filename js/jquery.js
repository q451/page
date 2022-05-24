$(document).ready(function(){
    
    $("#b01").click(function(){
    htmlobj=$.ajax({url:"/jquery/test1.txt",async:false});
    $("#myDiv").html(htmlobj.responseText);
    alert("this is  a test!")
    });

    $("#login").click(function(){
        email=$("#floatingInput").val;
        password=$("#floatingPassword").val;
        // var password=window.document.getElementById("password").value;
        var get_email = sessionStorage.getItem("email");
        var get_password = sessionStorage.getItem("password");
        if (email == ""||password ==""){
            window.alert("用户名或密码不能为空!");
        }
        if(email!=get_email||password!=get_password){
            window.alert("用户名或密码错误!");
        }
        else{
            window.location.href="page1.html";
        }
    });
});