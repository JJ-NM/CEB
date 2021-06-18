function toggleMenu() {
  // Sacar el menu y esconderlo
  let menu = document.getElementById("menu");
  let menuHeightSetting = menu.style.right;

  if (menuHeightSetting == "0vw") {
    menu.style.right = "-100vw";
  } else {
    menu.style.right = "0vw";
  }
}

function expandNov(con1text, novTextCollapse) {
  // Expandir y desexpandir
  let expandCont = document.getElementById(con1text);
  let heightSetting = expandCont.style.maxHeight;

  if (heightSetting == "1000vh") {
    expandCont.style.maxHeight = "0";
  } else {
    expandCont.style.maxHeight = "1000vh";
  }

  //Colapsar texto
  let CollapseText = document.getElementById(novTextCollapse);
  let textCollapse = CollapseText.style.display;

  if (textCollapse == "inline") {
    CollapseText.style.display = "none";
  } else {
    CollapseText.style.display = "inline";
  }
}

function openTab(infoName, containerName) {
  var i, x;
  x = document.getElementsByClassName(containerName);
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(infoName).style.display = "block";
}
