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

  if (heightSetting == "auto") {
    con1text.style.height = "0px";
  } else {
    con1text.style.height = "auto";
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

  var heightSetting = con1text.style.height;

  if (heightSetting == "auto") {
    con1text.style.height = "0px";
  } else {
    con1text.style.height = "auto";
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

  var heightSetting = context.style.height;

  if (heightSetting == "auto") {
    context.style.height = "0px";
  } else {
    context.style.height = "auto";
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
