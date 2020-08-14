function Music() {

    // load all the samples
    let musicArray = [];
    musicArray.push(new Audio("./samples/guitar1.mp3"));
    musicArray.push(new Audio("./samples/guitar2.mp3"));
    musicArray.push(new Audio("./samples/guitar3.mp3"));
    musicArray.push(new Audio("./samples/guitar4.mp3"));
    musicArray.push(new Audio("./samples/guitar5.mp3"));
    musicArray.push(new Audio("./samples/drum1.mp3"));
    musicArray.push(new Audio("./samples/drum2.mp3"));
    musicArray.push(new Audio("./samples/drum3.mp3"));
    musicArray.push(new Audio("./samples/drum4.mp3"));
    musicArray.push(new Audio("./samples/drum5.mp3"));
    musicArray.push(new Audio("./samples/bass1.mp3"));
    musicArray.push(new Audio("./samples/bass2.mp3"));
    musicArray.push(new Audio("./samples/bass3.mp3"));
    musicArray.push(new Audio("./samples/bass4.mp3"));
    musicArray.push(new Audio("./samples/bass5.mp3")); 

    let carouselArray = [];
    
    this.getRandomMusic = function() {
        let randomGetal = Math.floor(Math.random() * (0, 14));
        let track = musicArray[randomGetal];
    
         // add samples to carousel 
        carouselArray.push(track);  
        console.log(carouselArray); 
    }

    this.playAudio = function() { 
        setInterval(function(){
            for (let i = 0; i < carouselArray.length; i++){
                carouselArray[i].play();
            }
        },1000);
    }   

    this.clearMusic = function() {
        for (let i = 0; i < carouselArray.length; i++){
            carouselArray[i].pause();
            carouselArray[i].currentTime = 0;
        }
        carouselArray = [];
        
    }
    
}



    