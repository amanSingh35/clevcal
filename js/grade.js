var count=0;
function evalua() {
    var max = 0;
    var earned = 0;
    var credits = 0;
    var acq = 0;
    var grade_points = 0;
    var n = document.getElementById("inputs").value;
    for (var i = 1; i <= n; i++) {
        credits = document.getElementById("ce" + i).value;
        acq = document.getElementById("ca" + i).value;
        grade_points = document.getElementById("gp" + i).value;
        earned += (credits * grade_points);
        max += (acq * 10);
    }
    var ans = (earned/max) * 10;

    if(count>0) {
        document.getElementById("SGPA").innerHTML = 'SGPA = ' + ans.toFixed(2);
    }
    else {
        const elem = document.createElement('p');
        const elemText = document.createTextNode('SGPA = ' + ans.toFixed(2));
        elem.id = "SGPA";
        elem.appendChild(elemText);
        document.body.appendChild(elem);
        count++;
    }
}

var count1=0
function create() {
    var n = document.getElementById("inputs").value;
    if(count1>0) {
        for (var j = n-1; j < n;j++) {
            var row = table.insertRow(j + 1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            var cell6 = row.insertCell(5);
            var cell7 = row.insertCell(6);
            cell1.innerHTML = "<input class='slno_' id='slno' type='number' " + "value = " + (j + 1) + " >";
            cell2.innerHTML = "<input class='coursecode' id='coursecode" + (j + 1) + "'type='text'>";
            cell3.innerHTML = "<input class='coursetitle' id='coursetitle" + (j + 1) + "' type='text'>";
            cell4.innerHTML = "<input class='ca' id='ca" + (j + 1) + "' type='text'>";
            cell5.innerHTML = "<input class='ce' id='ce" + (j + 1) + "' type='text'>";
            cell6.innerHTML = "<input class='ga' id='ga" + (j + 1) + "' type='text'>";
            cell7.innerHTML = "<input class='gp' id='gp" + (j + 1) + "' type='number'>";
        }
    }
    else {
        var table = document.getElementById("gradetable");
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        cell1.id = "id1";
        cell2.id = "id1";
        cell3.id = "id1";
        cell4.id = "id1";
        cell5.id = "id1";
        cell6.id = "id1";
        cell7.id = "id1";
        cell1.innerHTML = "Sl. No.";
        cell2.innerHTML = "Course Code";
        cell3.innerHTML = "Course Title";
        cell4.innerHTML = "Credits<br>Assigned";
        cell5.innerHTML = "Credits<br>Earned";
        cell6.innerHTML = "Grade<br>Awarded";
        cell7.innerHTML = "Grade<br>Point";

        for (var i = 0; i < n; i++) {
            var row = table.insertRow(i + 1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            var cell6 = row.insertCell(5);
            var cell7 = row.insertCell(6);
            cell1.innerHTML = "<input class='slno_' id='slno' type='number' " + "value = " + (i + 1) + " >";
            cell2.innerHTML = "<input class='coursecode' id='coursecode" + (i + 1) + "'type='text'>";
            cell3.innerHTML = "<input class='coursetitle' id='coursetitle" + (i + 1) + "' type='text'>";
            cell4.innerHTML = "<input class='ca' id='ca" + (i + 1) + "' type='text'>";
            cell5.innerHTML = "<input class='ce' id='ce" + (i + 1) + "' type='text'>";
            cell6.innerHTML = "<input class='ga' id='ga" + (i + 1) + "' type='text'>";
            cell7.innerHTML = "<input class='gp' id='gp" + (i + 1) + "' type='number'>";
        }
        count1++;
    }
}

