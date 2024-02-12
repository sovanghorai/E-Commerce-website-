let mainimgEl = document.getElementById("main-img");
let smallimgEl = document.getElementsByClassName("small-img");

smallimgEl[0].onclick = function () {
    mainimgEl.src = smallimgEl[0].src;
}
smallimgEl[1].onclick = function () {
    mainimgEl.src = smallimgEl[1].src;
}

smallimgEl[2].onclick = function () {
    mainimgEl.src = smallimgEl[2].src;
}

smallimgEl[3].onclick = function () {
    mainimgEl.src = smallimgEl[3].src;
}
