"use strict";

window.onload = function() {

  console.log('加载完毕');

  var list = document.querySelectorAll(".item");


  alert(list[0].style);

  function dwn(content) {
    document.write(content + "<br />");

  }

  for (var c in list) {
    document.write("属性名:" + c + "------------属性值:" + list[c] + "<br />");
  }


}
