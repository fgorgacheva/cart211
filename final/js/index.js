let images = [
    { src:"images/index/dog-happy.jpg" , alt:"Happy corgi in the sunlight"}, 
    { src:"images/index/cat-laptop.jpg" , alt:"Cat curling up on someone's warm laptop for attention"}, 
    { src:"images/index/dog-walk.jpg" , alt:"Beagle happy to be on a walk looking at owner"}, 
    { src:"images/index/cat-eat.webp" , alt:"Cat enjoying a meal"}, 
    { src:"images/index/dog-fireplace.jpg" , alt:"Labrador taking a nap near the warm fireplace"}, 
   
    { src:"images/index/dog-ball.jpg" , alt:"Puppy running with its favorite toy"}, 
    { src:"images/index/cat-sleep.jpg" , alt:"Cat sleeping comfortably on a chair"}, 
    { src:"images/index/cat-window.jpg" , alt:"Cat sleeping on the bed near open window"}, 
    { src:"images/index/dog-play.jpg" , alt:"Golden retriever playing with its favorite toy in the grass"}, 
    { src:"images/index/cat-bath.png" , alt:"Cat enjoying a warm bath with rubber ducks"}, 

    { src:"images/index/cat-book.jpg" , alt:"Cat warming up on owner's lap who is reading a book"}, 
    { src:"images/index/dog-family.jpg" , alt:"Golden retriever surounded by loving family"}, 

    {src:"images/logos/logo-B-L.png" , alt:"A Heart For Paws Logo"}, 

    { src:"images/index/dog-eating.jpg" , alt:"Labrador enjoying a meal"}, 
    { src:"images/index/dog-cuddle.jpg" , alt:"Pitbull cuddling lovingly with its owner"}, 

    { src:"images/index/cat-fireplace.jpg" , alt:"Cat enjoying the warmth of the fireplace"}, 
    { src:"images/index/dog-paw.jpeg" , alt:"An owner lovingly holding their dog's paw"}, 
    { src:"images/index/cat-play.jpg" , alt:"A small kitten playing with a new toy innocently"}, 
    { src:"images/index/dog-plush.jpg" , alt:"Daschund sleeping and hugging its favorite plush toy"}, 
    { src:"images/index/cat-family.jpg" , alt:"Cat being loved by its family"}, 

    { src:"images/index/cat-cuddle.jpg" , alt:"Cat being cuddled and loved by its owner"}, 
    { src:"images/index/dog-wash.jpeg" , alt:"Corgi enjoying a warm bath and getting cleaned"}, 
    { src:"images/index/dog-give.jpg" , alt:"Labrador learning how to give the paw in park on a sunny day"}, 
    { src:"images/index/dog-roll.jpg" , alt:"Labrador sunbathing and rolling in the grass"}, 
    { src:"images/index/dog-groom.jpg" , alt:"Bichon frise being groomed to look pretty"}
];

document.addEventListener("DOMContentLoaded", () => {
    let rows = [];
    for(var i = 0; i < 5; i++){
        let row = document.createElement("div");
        row.className = "row animate__animated animate__fadeIn"
        rows.push(row);
    }
    images.forEach((e, i)=>{
        let row = i % 5;
        let imageWrapper = createImage(e.src, e.alt);
        if(i == 12){
            imageWrapper.firstChild.id = "logo"
            $(this).find("#logo").on('hover')
        }
        rows[row].appendChild(imageWrapper  );
        
    })
    $("#board").append(rows);

    $('.imageWrapper').on('mouseenter', function (e) {
        console.log(e);
        if($(this).find("img").attr('id') != "logo"){
            $(this).find("img").hide('explode', { "pieces":25 }, 600);  
        }
        return false;
    });
    document.getElementById("logo").onclick = function() {
        window.location = "./introVid.html";
    }
});




function createImage(src, alt){
    let img = document.createElement('img');
    let div = document.createElement('div');
    div.className="imageWrapper";
    
    img.src = src;
    img.alt = alt;
    
    div.appendChild(img);

    return div;
}