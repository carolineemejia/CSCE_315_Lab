var num = 0; // global variable

function button1() {
    num++;
    document.getElementById("output").innerHTML = "Press x" + num;
}

function original_style() {
    var theme = document.getElementById('cattheme');
    theme.href = "style.css";
}

function alt_style() {
    var theme = document.getElementById('ogtheme');
    theme.href = "alt_style.css";
}