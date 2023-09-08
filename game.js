let n = [];
let seq = 0;
// change title
$(document).keypress(function(e){
    console.log(e.key);
    if(n.length === 0){
        randomButton();
        $("h1").html('level ' + n.length);
        seq = 0;
    }
    
});


function randomButton(){
    // generate random number
    seq = 0;
    var num = Math.floor(Math.random()*4);
    console.log("num",num);
    // display new sign
    $(".btn")[num].style.visibility = "hidden";;
    // App num to list
    setTimeout(function() {
    $(".btn")[num].style.visibility = "visible";;
    }, 500);
    
    n.push(num);
    console.log(n);
}




// check valid button
function checkbutton(check,seq) {

    if(check == n[seq]){
        return true;
    }
    return false;
}




$(".btn").click(function(){
    if (n.length ===0) {
        return;
    }
    console.log(this);
    let check = 0;
    switch (this.id) {
        case "green":
             var green = new Audio('https://londonappbrewery.github.io/Simon-Game/sounds/green.mp3'); 
                green.play();
                check = 0;
            break;
        case "red":
             var red = new Audio('https://londonappbrewery.github.io/Simon-Game/sounds/red.mp3'); 
                red.play();
                check = 1;
            break;
        case "yellow":
             var yellow = new Audio('https://londonappbrewery.github.io/Simon-Game/sounds/yellow.mp3'); 
                yellow.play();
                check = 2;
            break;
        case "blue":
             var blue = new Audio('https://londonappbrewery.github.io/Simon-Game/sounds/blue.mp3'); 
                blue.play();
                check = 3;
            break;
    
        default:
            break;
    }
    var isValid = checkbutton(check,seq);

    if (isValid) {
        seq++;
        if (seq  === n.length) {
        randomButton();
        $("h1").html('level ' + n.length);
        }
       
    }
    else{
        var wrong = new Audio('https://londonappbrewery.github.io/Simon-Game/sounds/wrong.mp3'); 
        wrong.play();

        $("body").addClass("game-over");
        setTimeout(function() {
        $("body").removeClass("game-over");
        }, 500);

        
        $("h1").html('Game Over, Press Any Key to Restart');
        seq = 0;
        n = [];
    }
   
});
