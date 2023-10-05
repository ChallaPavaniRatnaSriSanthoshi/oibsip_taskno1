function clearScreen() {
    document.getElementById("outlook").value = "";
}
function view(value) {
    document.getElementById("outlook").value += value;
}
function calculate() {
    var p = document.getElementById("outlook").value;
    var q = eval(p);
    document.getElementById("outlook").value = q;
}