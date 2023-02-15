console.log("linked");

function addBorder(id) {
    if (document.getElementById(id).style.stroke == "green"){
        document.getElementById(id).style.stroke = "none";
    }
    else {
        document.getElementById(id).style.stroke = "green";
        document.getElementById(id).style.strokeWidth = "3px"
    }
    var text = "(" + String((parseInt(document.getElementById(id).getAttribute('cx')) - 150) / 40) + "," + String((parseInt(document.getElementById(id).getAttribute('cy')) - 500) / -40) + ")";
    document.getElementById("lastPoint").textContent = text;
};

function plotPoints() {
    var x = document.getElementById("xDropdown").value;
    var y = document.getElementById("yDropdown").value;
    if (x != "none" || y != "none") {
        //Insert circle with coordinates
        document.getElementById("p5").setAttribute("r", 5);
        document.getElementById("p5").setAttribute("cx", (x * 40) + 150);
        document.getElementById("p5").setAttribute("cy", 500 - (y * 40));
        document.getElementById("p5").style.visibility = "visible";
    }
};