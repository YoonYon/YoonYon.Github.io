var img = new Image();
var div = document.getElementById('fun');

img.onload = function() {
  div.appendChild(img);
};

img.src = 'fun.jpg';

document.getElementById("nav01").innerHTML =
"<ul id='menu'>" +
"<li><a href='index.html'>Home</a></li>" +
"<li><a href='info.html'>Info</a></li>" +
"</ul>";
