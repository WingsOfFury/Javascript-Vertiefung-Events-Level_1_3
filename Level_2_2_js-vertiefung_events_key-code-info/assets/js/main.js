/*
Schreibe eine kleine App, die Dir die Taste ("key"), den Unicode Tastencode ("keyCode") und  den "Code" anzeigt, sobald Du eine Taste auf deinem Keyboard drückst.
*/



function keyCode1(event) {
let key = event.key;
let keyCode = event.keyCode;
let code = event.code;
document.getElementById("key").innerHTML= key;
document.getElementById("keyCode").innerHTML= keyCode;
document.getElementById("code").innerHTML= code;
}

