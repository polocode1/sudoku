var reload = window.location.reload.bind(window.location);

function tabelka() {
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");

    for (var i = 0; i < 9; i++) {
        var row = document.createElement("tr");

        for (var j = 0; j < 9; j++) {
            var cell = document.createElement("td");
            cell.setAttribute("id", i + " " + j);
            cell.setAttribute("class", "cell");
            row.appendChild(cell);
        }
        tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    document.getElementById("kontener").appendChild(tbl);
    tbl.setAttribute("border", "4");
}

var Sudokupuste = ([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
])


var Sudokupelne = ([
    [8, 2, 7, 1, 5, 4, 3, 9, 6],
    [9, 6, 5, 3, 2, 7, 1, 4, 8],
    [3, 4, 1, 6, 8, 9, 7, 5, 2],
    [5, 9, 3, 4, 6, 8, 2, 7, 1],
    [4, 7, 2, 5, 1, 3, 6, 8, 9],
    [6, 1, 8, 9, 7, 2, 4, 3, 5],
    [7, 8, 6, 2, 3, 5, 9, 1, 4],
    [1, 5, 4, 7, 9, 6, 8, 2, 3],
    [2, 3, 9, 8, 4, 1, 5, 6, 7]
])

var chosen = 1;
$("#b1").click(function() { chosen = 1; });
$("#b2").click(function() { chosen = 2; });
$("#b3").click(function() { chosen = 3; });
$("#b4").click(function() { chosen = 4; });
$("#b5").click(function() { chosen = 5; });
$("#b6").click(function() { chosen = 6; });
$("#b7").click(function() { chosen = 7; });
$("#b8").click(function() { chosen = 8; });
$("#b9").click(function() { chosen = 9; });

document.onload = tabelka(), genSudoku(), listek();

document.getElementById("bcheck").addEventListener("click", check);

document.getElementById("ngame").addEventListener("click", reload);


function check() {
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            var cell = document.getElementById(i + " " + j)
            var temp = cell.childNodes

            if (temp.length > 0) {
                Sudokupuste[i][j] = parseInt(cell.childNodes[0].nodeValue);
            }
        }
    }
    var i = 0,
        j = 0;
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {

            if (Sudokupuste[i][j] == Sudokupelne[i][j]) {

                var cell = document.getElementById(i + " " + j)
                cell.setAttribute("style", "background-color:#006600")

            } else {
                var cell = document.getElementById(i + " " + j)
                cell.setAttribute("style", "background-color:#990000")
            }
        }
    }

}

function listek() {
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            document.getElementById(i + " " + j).addEventListener("click", fill);
        }
    }
}

function fill() {

    if (event.target.hasChildNodes() == true) {
        if (event.target.hasAttribute("style") == false) {
            var cell = event.target;
            cell.removeChild(cell.firstChild);
            var cellText = document.createTextNode(chosen);
            cell.appendChild(cellText);


        }

    } else {
        var cell = event.target;
        var cellText = document.createTextNode(chosen);
        cell.appendChild(cellText);
    }

}

function genSudoku() {

    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            if ((Math.random() >= 0.6)) {
                var cell = document.getElementById(i + " " + j);
                var cellText = document.createTextNode(Sudokupelne[i][j]);

                cell.setAttribute("style", "color: black");
                cell.appendChild(cellText);
            } else {
                continue;
            }

        }

    }

}