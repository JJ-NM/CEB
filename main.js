function myFunction() {
  // Sacar el menu y esconderlo
  var toggleMenu = document.getElementById("menu");
  var menuHeightSetting = toggleMenu.style.right;
  var menuDiplaySetting = toggleMenu.style.display;

  if (menuHeightSetting == "0vw") {
    toggleMenu.style.right = "-100vw";
  } else {
    toggleMenu.style.right = "0vw";
  }
}

function myFunctionNov1() {
  //Novedades-Contenido 2 expandir y desexpandir
  var con1text = document.getElementById("nov1-text");

  var heightSetting = con1text.style.maxHeight;

  if (heightSetting == "1000vh") {
    con1text.style.maxHeight = "0";
  } else {
    con1text.style.maxHeight = "1000vh";
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
  var con1text = document.getElementById("nov2-text");

  var heightSetting = con1text.style.maxHeight;

  if (heightSetting == "1000vh") {
    con1text.style.maxHeight = "0";
  } else {
    con1text.style.maxHeight = "1000vh";
  }

  //Novedades-Contenido 2 Colapsar texto
  var novTextcollapse = document.getElementById("nov2Textcollapse");
  var textCollapse = novTextcollapse.style.display;

  if (textCollapse == "inline") {
    novTextcollapse.style.display = "none";
  } else {
    novTextcollapse.style.display = "inline";
  }
}

function myFunctionNov3() {
  //Novedades-Contenido 2 expandir y desexpandir
  var context = document.getElementById("nov3-text");

  var heightSetting = context.style.maxHeight;

  if (heightSetting == "1000vh") {
    context.style.maxHeight = "0";
  } else {
    context.style.maxHeight = "1000vh";
  }

  //Novedades-Contenido 2 Colapsar texto
  var novTextcollapse = document.getElementById("nov3Textcollapse");
  var textCollapse = novTextcollapse.style.display;

  if (textCollapse == "inline") {
    novTextcollapse.style.display = "none";
  } else {
    novTextcollapse.style.display = "inline";
  }
}

function myFunctionNov4() {
  //Novedades-Contenido 2 expandir y desexpandir
  var context = document.getElementById("nov4-text");

  var heightSetting = context.style.maxHeight;

  if (heightSetting == "1000vh") {
    context.style.maxHeight = "0";
  } else {
    context.style.maxHeight = "1000vh";
  }

  //Novedades-Contenido 2 Colapsar texto
  var novTextcollapse = document.getElementById("nov4Textcollapse");
  var textCollapse = novTextcollapse.style.display;

  if (textCollapse == "inline") {
    novTextcollapse.style.display = "none";
  } else {
    novTextcollapse.style.display = "inline";
  }
}

function openTab(tabName) {
  var i, x;
  x = document.getElementsByClassName("containerTab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}