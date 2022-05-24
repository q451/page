function loadDoc() {
  console.log('error');
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://localhost:5000/users/xxxxx/me", true);
  xhttp.setRequestHeader('content-type', 'application/json');
  var sendData = {"abc":123};
  //将用户输入值序列化成字符串
  xhttp.send(JSON.stringify(sendData));
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4) {
        var jsonObj = JSON.parse(xhttp.responseText);
        document.getElementById("demo").innerHTML = jsonObj.data.adjustPeriod
        console.log(jsonObj.data.adjustPeriod);
    }
  }
}


function login_function(){

  let account = ["admin"];
  let passwd = ["root"];
  let account3 = sessionStorage.getItem("account_user");
  let pass3 = sessionStorage.getItem("password_use");
  account.push(account3);
  passwd.push(pass3);

  console.log(account);
  
  let user = document.getElementById("user_email").value;
  let password = document.getElementById("password").value;
  let index = -1;
  for (let i = 0; i < account.length; i++) {
      if(account[i] == user){
          index = i;
          break;
      }
  }
  if (user == ""||password == "") {
    alert("请输入账号密码");
  }else{
    if(index == -1){
      alert("你还未注册，请先注册一下吧");
    }
    else{   
      if(passwd[index] == password){
        alert("登录成功");
        window.location.href='shouye.html';
      }else{
        alert("密码错误，请输入正确密码");
      }
    }
  }
}

function register_function(){
  
  let useraccount = document.getElementById("user").value;
  let pass = document.getElementById("pass").value;
  let pass1 = document.getElementById("pass1").value;

  if (useraccount ==""||pass ==""||pass1=="") {
    alert("请输入密码和账号");
  }else{
    if (pass1 != pass) {
      alert("两次密码输入不一致");
    }else{
      alert("注册成功");
      sessionStorage.setItem("account_user", useraccount);
      sessionStorage.setItem("password_use", pass1);
      
      // account.push(useraccount);
      // console.log(account);
      // passwd.push(pass);
      window.location.href='login.html';
    }
  }
}