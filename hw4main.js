console.log("linked");

function addBorder(id, x1, x2) {
    if (document.getElementById(id).style.stroke == "green"){
        document.getElementById(id).style.stroke = "none";
    }
    else {
        document.getElementById(id).style.stroke = "green";
    }
    var text = "(" + String((parseInt(document.getElementById(id).getAttribute('cx')) - 20) / 20) + "," + String((parseInt(document.getElementById(id).getAttribute('cy')) + 300) / 20) + ")";
    document.getElementById("lastPoint").textContent = text;
}

