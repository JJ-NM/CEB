function myFunction() {
  // Sacar el menu y esconderlo
  var toggleMenu = document.getElementById("menu");
  var menuHeightSetting = toggleMenu.style.right;

  if (menuHeightSetting == "0vw") {
    toggleMenu.style.right = "-100vw";
  } else {
    toggleMenu.style.right = "0vw";
  }
}

function myFunctionNov1() {
  //Novedades-Contenido 2 expandir y desexpandir
  var con1text = document.getElementById("nov1-text");

  var heightSetting = con1text.style.height;

  if (heightSetting == "200px") {
    con1text.style.height = "0px";
  } else {
    con1text.style.height = "200px";
  }

  //Novedades-Contenido 2 Colapsar texto
  var nov1Textcollapse = document.getElementById("nov1Textcollapse");
  var textCollapse = nov1Textcollapse.style.display;

  if (textCollapse == "inline") {
    nov1Textcollapse.style.display = "none";
  } else {
    nov1Textcollapse.style.display = "inline";
  }
}

function myFunctionNov2() {
  //Novedades-Contenido 2 expandir y desexpandir
  var con2text = document.getElementById("nov2-text");
  var height2Setting = con2text.style.height;

  if (height2Setting == "200px") {
    con2text.style.height = "0px";
  } else {
    con2text.style.height = "200px";
  }

  //Novedades-Contenido 2 Colapsar texto

  var nov2Textcollapse = document.getElementById("nov2Textcollapse");
  var text2Collapse = nov2Textcollapse.style.display;

  if (text2Collapse == "inline") {
    nov2Textcollapse.style.display = "none";
  } else {
    nov2Textcollapse.style.display = "inline";
  }
}

function myFunctionNov3() {
  //Novedades-Contenido 3 expandir y desexpandir
  var con3text = document.getElementById("nov3-text");
  var height3Setting = con3text.style.height;

  if (height3Setting == "200px") {
    con3text.style.height = "0px";
  } else {
    con3text.style.height = "200px";
  }

  //Novedades-Contenido 3 Colapsar texto
  var nov3Textcollapse = document.getElementById("nov3Textcollapse");
  var text3Collapse = nov3Textcollapse.style.display;

  if (text3Collapse == "inline") {
    nov3Textcollapse.style.display = "none";
  } else {
    nov3Textcollapse.style.display = "inline";
  }
}
