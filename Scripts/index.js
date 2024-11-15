const tourBox = document.getElementById("tour_box")
const placeList = document.querySelectorAll(".place")
const line = document.querySelector(".line")
let startPlace = 50

/* Tour box script */
tourBox.addEventListener('mouseenter',()=>{
    document.body.style.overflow = 'visible';
})
tourBox.addEventListener('mouseleave', () => {
    document.body.style.overflow = 'auto';
});
tourBox.addEventListener('wheel',(e)=>{
    if(e.wheelDelta > 0){
        tourBox.scrollLeft -= 10
        console.log("left")
    }else{
        tourBox.scrollLeft += 10
        console.log("right")
    }
},{passive:true})
console.log(line)
const lineWidth = 30*placeList.length-30
line.style.width = `${lineWidth}%`
placeList.forEach((place,index)=>{
    place.style.left = `${startPlace}%`
    startPlace +=30
})

//js for dynamic action
    document.querySelectorAll('.song-div').forEach(song => {
        song.addEventListener('click', function() {

            const songName = this.getAttribute('data-song-name');
            const songVideo = this.getAttribute('data-song-video');

            const queryString = `?name=${encodeURIComponent(songName)}&video=${encodeURIComponent(songVideo)}`;
            window.location.href = 'shows.html' + queryString;
        });
    });

