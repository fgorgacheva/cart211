let colorsArray = [
    "#7FDC36",
    "#0CF0FF",
    "#c859ff",
    "#ff4dac",
    "#FFD600",
    "#FFA800"
];


document.addEventListener("DOMContentLoaded", () => {
    $(".wrapper").on("mouseover", (e) => {
        $(".description").css("background-color", randomColor);
    });



});

function randomColor(){
    let randomNumber = Math.floor(Math.random() * 6);
    return colorsArray[randomNumber];
}
