const a = document.getElementById("decreaseBtn");
const b = document.getElementById("resetBtn");
const c = document.getElementById("increaseBtn");
const d = document.getElementById("counter");
let count = 0;
c.onclick = function() {
    count++;
    d.textContent = count;

}
a.onclick = function() {
    count--;
    d.textContent = count;

}
b.onclick = function() {
    count = 0;
    d.textContent = count;

}