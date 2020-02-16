function snap() {
  if (!document.getElementById("demo2")) {
    child = document.createElement("h2");
    child.id = "demo2";
    node = document.createTextNode("You made it!");
    child.appendChild(node);
    document.body.appendChild(child);
  } else {
    child = document.getElementById("demo2");
    child.id = "demo3";
    node = document.createTextNode(Date());
    child.appendChild(node);
    document.body.appendChild(child);
  }
}

function append(txtInsert, father, child) {
  node = document.createTextNode(txtInsert);
  child.appendChild(node);
  father.appendChild(child);
}

function replace(txtInsert, father, child) {
  child.innerHTML = txtInsert;
}

function snap2() {
  idLabel = "demo2";
  father = document.body;
  if (!document.getElementById(idLabel)) {
    child = document.createElement("h2");
    child.id = idLabel;
    text = "You made it!";
    append(text, father, child);
  } else {
    child = document.getElementById(idLabel);
    text = Date();
    replace(text, father, child);
  }
}
