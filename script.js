var schema = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];
var isPlayerOne = true;
var isWin = false;
function tick(x, y) {
  if (isPlayerOne) {
    row = schema[x];
    row[y] = 1;
  } else {
    row = schema[x];
    row[y] = 2;
  }

  console.log(schema);
  var div = document.getElementById("div");
  var oldTable = document.getElementById("table");

  var table = document.createElement("table");

  table.setAttribute("border", "1");
  table.setAttribute("id", "table");
  for (let i = 0; i < 3; i++) {
    var tr = document.createElement("tr");
    for (let j = 0; j < 3; j++) {
      var td = document.createElement("td");
      td.setAttribute("onclick", "tick(" + i + "," + j + ")");
      if (schema[i][j] == 1) {
        td.innerHTML = "X";
      } else if (schema[i][j] == 2) {
        td.innerHTML = "Y";
      }
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }

  if (isPlayerOne) {
    isWin = checkWinning(1);
  } else {
    isWin = checkWinning(2);
  }
  if (isWin) {
    div.removeChild(oldTable);
    schema = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ];
    div.appendChild(table);
    if (isPlayerOne) {
      alert("Player X Won");
    } else {
      alert("Player Y Won");
    }
    window.location.reload(true);
  } else {
    isPlayerOne = !isPlayerOne;
    div.removeChild(oldTable);
    div.appendChild(table);
  }
}

function checkWinning(player) {
  if (
    schema[0][0] == player &&
    schema[0][1] == player &&
    schema[0][2] == player
  ) {
    return true;
  } else if (
    schema[1][0] == player &&
    schema[1][1] == player &&
    schema[1][2] == player
  ) {
    return true;
  } else if (
    schema[2][0] == player &&
    schema[2][1] == player &&
    schema[2][2] == player
  ) {
    return true;
  } else if (
    schema[0][0] == player &&
    schema[1][0] == player &&
    schema[2][0] == player
  ) {
    return true;
  } else if (
    schema[0][1] == player &&
    schema[1][1] == player &&
    schema[2][1] == player
  ) {
    return true;
  } else if (
    schema[0][2] == player &&
    schema[1][2] == player &&
    schema[2][2] == player
  ) {
    return true;
  } else if (
    schema[0][0] == player &&
    schema[1][1] == player &&
    schema[2][2] == player
  ) {
    return true;
  } else if (
    schema[0][2] == player &&
    schema[1][1] == player &&
    schema[2][0] == player
  ) {
    return true;
  }
  return false;
}
