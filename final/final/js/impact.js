
document.addEventListener("DOMContentLoaded", () => {
    $(".cardText").each((i,e) => {
        e.style.display = "none";
    });
    document.getElementById("textContainer").addEventListener("mouseover", (e) => { 
        if($(e.target).parents(".card").length >= 1){
            changeBackground($(e.target).parents(".card").attr("id"), e);
        }
        else if (e.target.id == "numbers" || e.target.id == "emotions" || e.target.id == "death"){
            changeBackground(e.target.id, e);
        }
        else {
            $(".card").each((i,e) => {
                e.style.filter="blur(0)";
                mainContainer.style.backgroundImage="";
            });
            $(".cardTitle").css("display", "block");
            $(".cardText").css("display", "none");
        }
    } );
});

function changeBackground (id, event) {
    let mainContainer = $("#mainContainer");
    switch(id){
        case "numbers":        
            mainContainer.css("background-image","url('../images/backgrounds/cat-sad.jpg')");
            $("#numbersTitle").css("display", "none");
            $("#numbersText").css("display", "block");
            $("#numberSources").css("display", "block");
            break;

        case "emotions":
            mainContainer.css("background-image","url('../images/backgrounds/dogs-stray.jpg')");            
            $("#emotionsTitle").css("display", "none");
            $("#emotionsText").css("display", "block");
            $("#emotionSources").css("display", "block");
            break;

        case "death":
            mainContainer.css("background-image","url('../images/backgrounds/dog-sick.png')");
            $("#deathTitle").css("display", "none");
            $("#deathText").css("display", "block");
            $("#deathSources").css("display", "block");
            break;
    }

    $(".card").each((i,e) => {
        var cardHasElementMouseOver = $(e).has(event.target);
        if(cardHasElementMouseOver.length == 0 && id != e.id && $(".card").has(event.target)) {
            e.style.filter="blur(10px)";
        }
        else {
            e.style.filter="blur(0)";
        }
    });


    

}

