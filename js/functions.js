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
