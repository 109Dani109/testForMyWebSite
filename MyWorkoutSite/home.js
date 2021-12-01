let logo = document.querySelector("logo");

if(logo) {
    logo.addEventListener("change",() =>{
        console.log("ceva");
    }) 
    
}

let date = new Date();

let currentDay = Number(localStorage.getItem("day")) ||  date.getDay() ;

let arrDay = ["Day 1: <br> <span> Push Workout  </span>", "Day 2: <br> <span> Pull Workout  </span>", "Day 3: <br> <span> Legs Workout  </span>", "Day 4: <br> <span> Push Workout  </span>", "Day 5: <br> <span> Pull Workout  </span>" , "Day 6:  <br><span> Fat Burn Workout  </span>"];

localStorage.setItem("day", currentDay);

function showDayOfTheWeek() {
    let text = '';
    if(logo){
        logo.classList.add("pulse");
    }
    
    setTimeout(() =>{
        logo.classList.remove("pulse")
    }, 500)
    switch(currentDay) {
        case 1: text = arrDay[0];
        break;
        case 2:text = arrDay[1];
        break
        case 3: text =  arrDay[2];
        break;
        case 4:text =  arrDay[3];
        break
        case 5:text = arrDay[4];
        break
        case 6: text = arrDay[5];
        break
        case 7:text =  arrDay[6];
        break
    }

    logo.innerHTML =  text;
}

showDayOfTheWeek();


let prevButton = document.querySelector(".prevDay");

let nextButton = document.querySelector(".nextDay");


prevButton.addEventListener("click", () =>{
    prevDayFunction();
    localStorage.setItem("day", currentDay);
    location.reload();
})

nextButton.addEventListener("click", () =>{
    nextDayFunction();
    localStorage.setItem("day", currentDay);
    location.reload();
})


function prevDayFunction() {
    currentDay --;
    if(currentDay < 1) {
        currentDay = 6;
    }
    showDayOfTheWeek();
}

function nextDayFunction() {
    currentDay ++;
    if(currentDay > 6) {
        currentDay = 1;
    }
    showDayOfTheWeek();
}


// nav active buttons

let navBtns = document.querySelectorAll(".subNav a");

navBtns.forEach((btn) =>{
    btn.addEventListener("click", () =>{
        
        addActiveonBtn(btn);
    })
});


function addActiveonBtn(btn) {
    for(let  i = 0; i<navBtns.length ; i++) {
        navBtns[i].classList.remove("activeBtn");
    }
    btn.classList.add("activeBtn");
}



//  active bar onscroll

document.addEventListener("scroll" , () =>{
    addActiveClass() });


function addActiveClass() {
    let scrolled = window.scrollY;

    if(scrolled > 50) {
        document.body.classList.add("activeNav")
    } else {
        document.body.classList.remove("activeNav")

    }
}


// input email function

let form = document.querySelector("#contactForm");

let emailInput = document.querySelector("input[type=email]")


let inputs = document.querySelectorAll(".inputs");



let submitBtn = document.querySelector("#contactSubmit")




function checkFormBox(e) {
 
    inputs.forEach((elm) =>{
        
        if(elm.value.length == 0) {
            elm.classList.add("incomplete");
            form.classList.add('formWrong');
            form.addEventListener("animationend",() =>{
                form.classList.remove("formWrong");
            });
            e.preventDefault();
        } else {
            elm.classList.remove("incomplete");
        }
        
    })

}

form.addEventListener("submit",(e) =>{
    checkFormBox(e);
})


submitBtn.addEventListener("mouseover",() =>{

    inputs.forEach((elm) =>{
        if(elm.value.length == 0) {
            submitBtn.classList.add("incomplete");
        } else {
            submitBtn.classList.remove("incomplete");

        }
        
    })
})



// videos workout





let arrVideos = ["chest", "shoulder", "legs", "abs", "arms","back", "fatburn"];

let videosFromCurrentDay = [];

let containerWorkout = document.querySelector(".containerWorkout");

let workoutFor;

function showVideoContainers() {



    switch(currentDay) {
        
        case 1:
            
            videosFromCurrentDay = ["chest", "shoulder"];

        containerWorkout.innerHTML = `<h1> Today's Workout </h1>
        
        <div class="videos">
            
            <div class="video"  data-aos="fade-up-left" >
                <video  muted>
                    <source src="Videos/${videosFromCurrentDay[0]}.mp4" number="1" type="video/mp4">
                    <source src="Videos/${videosFromCurrentDay[0]}.mp4" number="1" type="video/ogg">
                  Your browser does not support the video tag.
                  </video>
            </div>

            <div class="video"  data-aos="fade-up-right">
                <video  muted>
                    <source src="Videos/${videosFromCurrentDay[1]}.mp4" number="2" type="video/mp4">
                    <source src="Videos/${videosFromCurrentDay[1]}.mp4" number="2" type="video/ogg">
                  Your browser does not support the video tag.
                  </video>
            </div>`
            
        break;
        case 2:    

        videosFromCurrentDay = ["back1", "back2"];

        containerWorkout.innerHTML = `<h1> Today's Workout </h1>
        
        <div class="videos">
            
            <div class="video"  data-aos="fade-up-left" >
                <video  muted>
                    <source src="Videos/${videosFromCurrentDay[0]}.mp4" number="1" type="video/mp4">
                    <source src="Videos/${videosFromCurrentDay[0]}.mp4" number="1" type="video/ogg">
                  Your browser does not support the video tag.
                  </video>
            </div>

            <div class="video"  data-aos="fade-up-right">
                <video  muted>
                    <source src="Videos/${videosFromCurrentDay[1]}.mp4" number="2" type="video/mp4">
                    <source src="Videos/${videosFromCurrentDay[1]}.mp4" number="2" type="video/ogg">
                  Your browser does not support the video tag.
                  </video>
            </div>`
    
        break;

       

        case 3:
        
            videosFromCurrentDay = ["abs", "legs"];
        
            containerWorkout.innerHTML = `<h1> Today's Workout </h1>
        
            <div class="videos">
                
                <div class="video"  data-aos="fade-up-left" >
                    <video  muted>
                        <source src="Videos/${videosFromCurrentDay[0]}.mp4" number="1" type="video/mp4">
                        <source src="Videos/${videosFromCurrentDay[0]}.mp4" number="1" type="video/ogg">
                      Your browser does not support the video tag.
                      </video>
                </div>
    
                <div class="video"  data-aos="fade-up-right">
                    <video  muted>
                        <source src="Videos/${videosFromCurrentDay[1]}.mp4" number="2" type="video/mp4">
                        <source src="Videos/${videosFromCurrentDay[1]}.mp4" number="2" type="video/ogg">
                      Your browser does not support the video tag.
                      </video>
                </div>`
        break;
        case 4: 
        
        videosFromCurrentDay = ["chest", "shoulder"];

        containerWorkout.innerHTML = `<h1> Today's Workout </h1>
        
        <div class="videos">
            
            <div class="video"  data-aos="fade-up-left" >
                <video  muted>
                    <source src="Videos/${videosFromCurrentDay[0]}.mp4" number="1" type="video/mp4">
                    <source src="Videos/${videosFromCurrentDay[0]}.mp4" number="1" type="video/ogg">
                  Your browser does not support the video tag.
                  </video>
            </div>

            <div class="video"  data-aos="fade-up-right">
                <video  muted>
                    <source src="Videos/${videosFromCurrentDay[1]}.mp4" number="2" type="video/mp4">
                    <source src="Videos/${videosFromCurrentDay[1]}.mp4" number="2" type="video/ogg">
                  Your browser does not support the video tag.
                  </video>
            </div>`
        case 5:
        
            videosFromCurrentDay = ["back1", "back2"];
        
            containerWorkout.innerHTML = `<h1> Today's Workout </h1>
        
            <div class="videos">
                
                <div class="video"  data-aos="fade-up-left" >
                    <video  muted>
                        <source src="Videos/${videosFromCurrentDay[0]}.mp4" number="1" type="video/mp4">
                        <source src="Videos/${videosFromCurrentDay[0]}.mp4" number="1" type="video/ogg">
                      Your browser does not support the video tag.
                      </video>
                </div>
    
                <div class="video"  data-aos="fade-up-right">
                    <video  muted>
                        <source src="Videos/${videosFromCurrentDay[1]}.mp4" number="2" type="video/mp4">
                        <source src="Videos/${videosFromCurrentDay[1]}.mp4" number="2" type="video/ogg">
                      Your browser does not support the video tag.
                      </video>
                </div>`
        break;
        case 6:
        
            videosFromCurrentDay = ["abs", "fatburn"];
        
            containerWorkout.innerHTML = `<h1> Today's Workout </h1>
        
            <div class="videos">
                
                <div class="video"  data-aos="fade-up-left" >
                    <video  muted>
                        <source src="Videos/${videosFromCurrentDay[0]}.mp4" number="1" type="video/mp4">
                        <source src="Videos/${videosFromCurrentDay[0]}.mp4" number="1" type="video/ogg">
                      Your browser does not support the video tag.
                      </video>
                </div>
    
                <div class="video"  data-aos="fade-up-right">
                    <video  muted>
                        <source src="Videos/${videosFromCurrentDay[1]}.mp4" number="2" type="video/mp4">
                        <source src="Videos/${videosFromCurrentDay[1]}.mp4" number="2" type="video/ogg">
                      Your browser does not support the video tag.
                      </video>
                </div>`
        break;


    }


}



function showVideoContainers2() {

    

    switch(currentDay) {
        
        case 1:
       
            videosFromCurrentDay = ["chest", "back1"];

            containerWorkout.innerHTML = `<h1> Today's Workout </h1>
        
            <div class="videos">
                
                <div class="video"  data-aos="fade-up-left" >
                    <video  muted>
                        <source src="Videos/${videosFromCurrentDay[0]}.mp4" number="1" type="video/mp4">
                        <source src="Videos/${videosFromCurrentDay[0]}.mp4" number="1" type="video/ogg">
                      Your browser does not support the video tag.
                      </video>
                </div>
    
                <div class="video"  data-aos="fade-up-right">
                    <video  muted>
                        <source src="Videos/${videosFromCurrentDay[1]}.mp4" number="2" type="video/mp4">
                        <source src="Videos/${videosFromCurrentDay[1]}.mp4" number="2" type="video/ogg">
                      Your browser does not support the video tag.
                      </video>
                </div>`
            
        break;
        case 2:    

        videosFromCurrentDay = ["back1", "triceps"];

        containerWorkout.innerHTML = `<h1> Today's Workout </h1>
        
        <div class="videos">
            
            <div class="video"  data-aos="fade-up-left" >
                <video  muted>
                    <source src="Videos/${videosFromCurrentDay[0]}.mp4" number="1" type="video/mp4">
                    <source src="Videos/${videosFromCurrentDay[0]}.mp4" number="1" type="video/ogg">
                  Your browser does not support the video tag.
                  </video>
            </div>

            <div class="video"  data-aos="fade-up-right">
                <video  muted>
                    <source src="Videos/${videosFromCurrentDay[1]}.mp4" number="2" type="video/mp4">
                    <source src="Videos/${videosFromCurrentDay[1]}.mp4" number="2" type="video/ogg">
                  Your browser does not support the video tag.
                  </video>
            </div>`
    
        break;

       

        case 3:
        
            videosFromCurrentDay = ["abs", "shoulder",  "legs"];
        
            containerWorkout.innerHTML = `<h1> Today's Workout </h1>
        
            <div class="videos">
                
                <div class="video"  data-aos="fade-up-left" >
                    <video  muted>
                        <source src="Videos/${videosFromCurrentDay[0]}.mp4" number="1" type="video/mp4">
                        <source src="Videos/${videosFromCurrentDay[0]}.mp4" number="1" type="video/ogg">
                      Your browser does not support the video tag.
                      </video>
                </div>
    
                <div class="video"  data-aos="fade-up-right">
                    <video  muted>
                        <source src="Videos/${videosFromCurrentDay[1]}.mp4" number="2" type="video/mp4">
                        <source src="Videos/${videosFromCurrentDay[1]}.mp4" number="2" type="video/ogg">
                      Your browser does not support the video tag.
                      </video>
                </div>
                
                <div class="video"  data-aos="fade-up-right">
                <video  muted>
                    <source src="Videos/${videosFromCurrentDay[2]}.mp4" number="3" type="video/mp4">
                    <source src="Videos/${videosFromCurrentDay[2]}.mp4" number="3" type="video/ogg">
                  Your browser does not support the video tag.
                  </video>
            </div>
                `

                
        break;
        case 4: 
        
        videosFromCurrentDay = ["chest", "back1"];

        containerWorkout.innerHTML = `<h1> Today's Workout </h1>
        
        <div class="videos">
            
            <div class="video"  data-aos="fade-up-left" >
                <video  muted>
                    <source src="Videos/${videosFromCurrentDay[0]}.mp4" number="1" type="video/mp4">
                    <source src="Videos/${videosFromCurrentDay[0]}.mp4" number="1" type="video/ogg">
                  Your browser does not support the video tag.
                  </video>
            </div>

            <div class="video"  data-aos="fade-up-right">
                <video  muted>
                    <source src="Videos/${videosFromCurrentDay[1]}.mp4" number="2" type="video/mp4">
                    <source src="Videos/${videosFromCurrentDay[1]}.mp4" number="2" type="video/ogg">
                  Your browser does not support the video tag.
                  </video>
            </div>`
        break;
        case 5:
        
            videosFromCurrentDay = ["back1", "triceps"];
        
            containerWorkout.innerHTML = `<h1> Today's Workout </h1>
        
            <div class="videos">
                
                <div class="video"  data-aos="fade-up-left" >
                    <video  muted>
                        <source src="Videos/${videosFromCurrentDay[0]}.mp4" number="1" type="video/mp4">
                        <source src="Videos/${videosFromCurrentDay[0]}.mp4" number="1" type="video/ogg">
                      Your browser does not support the video tag.
                      </video>
                </div>
    
                <div class="video"  data-aos="fade-up-right">
                    <video  muted>
                        <source src="Videos/${videosFromCurrentDay[1]}.mp4" number="2" type="video/mp4">
                        <source src="Videos/${videosFromCurrentDay[1]}.mp4" number="2" type="video/ogg">
                      Your browser does not support the video tag.
                      </video>
                </div>`
        break;
        case 6:
        
            videosFromCurrentDay = ["abs", "shoulder", "legs"];
        
            containerWorkout.innerHTML = `<h1> Today's Workout </h1>
        
            <div class="videos">
                
                <div class="video"  data-aos="fade-up-left" >
                    <video  muted>
                        <source src="Videos/${videosFromCurrentDay[0]}.mp4" number="1" type="video/mp4">
                        <source src="Videos/${videosFromCurrentDay[0]}.mp4" number="1" type="video/ogg">
                      Your browser does not support the video tag.
                      </video>
                </div>
    
                <div class="video"  data-aos="fade-up-right">
                    <video  muted>
                        <source src="Videos/${videosFromCurrentDay[1]}.mp4" number="2" type="video/mp4">
                        <source src="Videos/${videosFromCurrentDay[1]}.mp4" number="2" type="video/ogg">
                      Your browser does not support the video tag.
                      </video>
                </div>
                
                <div class="video"  data-aos="fade-up-right">
                <video  muted>
                    <source src="Videos/${videosFromCurrentDay[2]}.mp4" number="2" type="video/mp4">
                    <source src="Videos/${videosFromCurrentDay[2]}.mp4" number="2" type="video/ogg">
                  Your browser does not support the video tag.
                  </video>
            </div>
                `
        break;


    }


}


if(localStorage.getItem("workoutProgram") == "Dani") {
    showVideoContainers();
    nextButton.addEventListener("click" ,  () =>{
        showVideoContainers();
    })
    
    prevButton.addEventListener("click" ,  () =>{
        showVideoContainers();
    })
} else if(localStorage.getItem("workoutProgram") == "Andrei") {
    showVideoContainers2();
    nextButton.addEventListener("click" ,  () =>{
        showVideoContainers2();
    })
    
    prevButton.addEventListener("click" ,  () =>{
        showVideoContainers2();
    })
} else {
    showVideoContainers();
    nextButton.addEventListener("click" ,  () =>{
        showVideoContainers();
    })
    
    prevButton.addEventListener("click" ,  () =>{
        showVideoContainers();
    })
}








let videos = document.querySelectorAll("video");

videos.forEach((vid) => {
    vid.addEventListener("mouseover", autoPlayVideo)})

videos.forEach((vid) => {
        vid.addEventListener("mouseout", pauseVideo)})


function autoPlayVideo() {
    this.play();
}


function pauseVideo() {
    setTimeout(() =>{
        this.pause();
    }, 2500)
    
}



function iterateBetweenVideos() {

    document.querySelectorAll("video").forEach((vid) =>{
        vid.addEventListener("click", 
            videoOnBigScreen
        )
    })


}

iterateBetweenVideos();


let bigVideoContainer = document.querySelector(".bigVideoContainer");



function videoOnBigScreen() {

    let numberOfVideo = this.querySelector("source").getAttribute("number");

    document.body.classList.add("noScroll");

    bigVideoContainer.style.display = "flex";



    bigVideoContainer.innerHTML = `

    <i class="fas fa-times"></i>
        

        <section>
            <div class="container">
                <div id="video_player">
                    <video src="${this.querySelector("source").src}" autoplay id="main-video"></video>
                    <div class="progressAreaTime">0:00</div>
                    <div class="controls">
                        <div class="progress-area">
                            <div class="progress-bar">
                                <span></span>
                            </div>
                        </div>
                        <div class="controls-list">
                            <div class="controls-left">
                                <span class="icon">
                                    <i class="material-icons fast-rewind">replay_10</i>
                                </span>
                                <span class="icon">
                                    <i class="material-icons play_pause">play_arrow</i>
                                </span>
                                <span class="icon">
                                    <i class="material-icons fast-forward">forward_10</i>
                                </span>
                                <span class="icon">
                                    <i class="material-icons volume">volume_up</i>
                                    <input type="range" min="0" max="100" class="volume_range">
                                </span>
                                <div class="timer">
                                    <span class="current">0:00</span> / <span class="duration">0:00</span>
                                </div>
                            </div>
                            <div class="controls-right">
                                <span class="icon">
                                    <i class="material-icons auto-play"></i>
                                </span>
                                <span class="icon">
                                    <i class="material-icons settingsBtn">settings</i>
                                </span>
                                <span class="icon">
                                    <i class="material-icons picture_in_picutre">picture_in_picture_alt</i>
                                </span>
                                <span class="icon">
                                    <i class="material-icons fullscreen">fullscreen</i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div id="settings">
                        <div class="playback">
                            <span>Playback Speed</span>
                            <ul>
                                <li data-speed="0.25">0.25</li>
                                <li data-speed="0.5">0.5</li>
                                <li data-speed="0.75">0.75</li>
                                <li data-speed="1"  class="active">Normal</li>
                                <li data-speed="1.25">1.25</li>
                                <li data-speed="1.5">1.5</li>
                                <li data-speed="1.75">1.75</li>
                                <li data-speed="2">2</li>
                            </ul>
                        </div>
                    </div>
                </div>
          
                <i id="nextVideo" class="far fa-chevron-double-right"></i>
        

             
                <i id="prevVideo" class="far fa-chevron-double-left"></i>
           
                
            </div>
        </section>
    `


        // control between videos

        let nextVideo = document.getElementById("nextVideo");

        let prevVideo = document.getElementById("prevVideo");


        if(numberOfVideo == 1) {
            prevVideo.style.display = "none";
            nextVideo.style.display = "block";
        } else {
            prevVideo.style.display = "block";
            nextVideo.style.display = "none";
        }


        nextVideo.addEventListener("click", () =>{
            nextWorkOutVideo();
        })

        prevVideo.addEventListener("click", () =>{
            prevWorkOutVideo();
        })
    
   

    
        const video_player = document.querySelector('#video_player'),
        mainVideo = video_player.querySelector('#main-video'),
        progressAreaTime = video_player.querySelector('.progressAreaTime'),
        controls = video_player.querySelector('.controls'),
        progressArea = video_player.querySelector('.progress-area'),
        progress_Bar = video_player.querySelector('.progress-bar'),
        fast_rewind = video_player.querySelector('.fast-rewind'),
        play_pause = video_player.querySelector('.play_pause'),
        fast_forward = video_player.querySelector('.fast-forward'),
        volume = video_player.querySelector('.volume'),
        volume_range = video_player.querySelector('.volume_range'),
        current = video_player.querySelector('.current'),
        totalDuration = video_player.querySelector('.duration'),
        auto_play = video_player.querySelector('.auto-play'),
        settingsBtn = video_player.querySelector('.settingsBtn'),
        picture_in_picutre = video_player.querySelector('.picture_in_picutre'),
        fullscreen = video_player.querySelector('.fullscreen'),
        settings = video_player.querySelector('#settings'),
        playback = video_player.querySelectorAll('.playback li');


        // navigate Between Videos


        function nextWorkOutVideo() {


               let videosFromPage =  document.querySelectorAll("video");

               console.log(videosFromPage);

               videosFromPage[2].click();
        
        }
    
        function prevWorkOutVideo() {
            let videosFromPage =  document.querySelectorAll("video");

            console.log(videosFromPage);

            videosFromPage[1].click();
        }


        // Play video function
        function playVideo() {
            play_pause.innerHTML = "pause";
            play_pause.title = "pause";
            video_player.classList.add('paused')
            mainVideo.play();
        }

        // Pause video function
        function pauseVideo() {
            play_pause.innerHTML = "play_arrow";
            play_pause.title = "play";
            video_player.classList.remove('paused')
            mainVideo.pause();
        }

        play_pause.addEventListener('click',()=>{
            const isVideoPaused = video_player.classList.contains('paused');
            isVideoPaused ? pauseVideo() : playVideo();
        })

        mainVideo.addEventListener('play',()=>{
            playVideo();
        })

        mainVideo.addEventListener('pause',()=>{
            pauseVideo();
        })

        // fast_rewind video function
        fast_rewind.addEventListener('click',()=>{
            mainVideo.currentTime -= 10;
        })

        // fast_forward video function
        fast_forward.addEventListener('click',()=>{
            mainVideo.currentTime += 10;
        })


        // Load video duration
        mainVideo.addEventListener("loadeddata",(e)=>{
            let videoDuration = e.target.duration;
            let totalMin = Math.floor(videoDuration / 60);
            let totalSec = Math.floor(videoDuration % 60);

            // if seconds are less then 10 then add 0 at the begning
            totalSec < 10 ? totalSec = "0"+totalSec : totalSec;
            totalDuration.innerHTML = `${totalMin} : ${totalSec}`;
        })

        // Current video duration
        mainVideo.addEventListener('timeupdate',(e)=>{
            let currentVideoTime = e.target.currentTime;
            let currentMin = Math.floor(currentVideoTime / 60);
            let currentSec = Math.floor(currentVideoTime % 60);
        // if seconds are less then 10 then add 0 at the begning
            currentSec < 10 ? currentSec = "0"+currentSec : currentSec; 
            current.innerHTML = `${currentMin} : ${currentSec}`;

            let videoDuration = e.target.duration
            // progressBar width change
            let progressWidth = (currentVideoTime / videoDuration) * 100;
            progress_Bar.style.width = `${progressWidth}%`;
        })

        // let's update playing video current time on according to the progress bar width

        progressArea.addEventListener('click',(e)=>{
            let videoDuration = mainVideo.duration;
            let progressWidthval = progressArea.clientWidth;
            let ClickOffsetX = e.offsetX;
            mainVideo.currentTime = (ClickOffsetX / progressWidthval) * videoDuration;
        })

        // change volume
        function changeVolume() {
            mainVideo.volume = volume_range.value / 100;
            if (volume_range.value == 0) {
                volume.innerHTML = "volume_off";
            }else if(volume_range.value < 40){
                volume.innerHTML = "volume_down";
            }else{
                volume.innerHTML = "volume_up";
            }

        }

        function muteVolume() {
            if (volume_range.value == 0) {
                volume_range.value = 80;
                mainVideo.volume = 0.8;
                volume.innerHTML = "volume_up";
            }else{
                volume_range.value = 0;
                mainVideo.volume = 0;
                volume.innerHTML = "volume_off";
            }
        }


        volume_range.addEventListener('change',()=>{
            changeVolume();
        })

        volume.addEventListener('click',()=>{
            muteVolume();
        })


        // Update progress area time and display block on mouse move
        progressArea.addEventListener('mousemove',(e)=>{
            let progressWidthval = progressArea.clientWidth;
            let x = e.offsetX;
            progressAreaTime.style.setProperty('--x',`${x}px`);
            progressAreaTime.style.display = "block";
            let videoDuration = mainVideo.duration;
            let progressTime = Math.floor((x/progressWidthval)*videoDuration);
            let currentMin = Math.floor(progressTime / 60);
            let currentSec = Math.floor(progressTime % 60);
        // if seconds are less then 10 then add 0 at the begning
            currentSec < 10 ? currentSec = "0"+currentSec : currentSec; 
            progressAreaTime.innerHTML = `${currentMin} : ${currentSec}`;

        })

        progressArea.addEventListener('mouseleave',()=>{
            progressAreaTime.style.display = "none";
        })



        // Auto play
        auto_play.addEventListener('click',()=>{
            auto_play.classList.toggle('active')
            if(auto_play.classList.contains('active')){
                auto_play.title = "Autoplay is on";
            }else{
                auto_play.title = "Autoplay is off";
            }
        });

        mainVideo.addEventListener("ended",()=>{
            if (auto_play.classList.contains('active')) {
                playVideo();
            }else{
                play_pause.innerHTML = "replay";
                play_pause.title = "Replay";
            }
        });

        // Picture in picture

        picture_in_picutre.addEventListener('click',()=>{
            mainVideo.requestPictureInPicture();
        })


        // Full screen function

        fullscreen.addEventListener('click',()=>{
            if (!video_player.classList.contains('openFullScreen')) {
                video_player.classList.add('openFullScreen');
                fullscreen.innerHTML = "fullscreen_exit";
                video_player.requestFullscreen();
                                mainVideo.style.border = "0px";
            }else{
                video_player.classList.remove('openFullScreen');
                fullscreen.innerHTML = "fullscreen";
                document.exitFullscreen();
                mainVideo.style.border = "2px solid var(--mainColor)";
            }
        });


        video_player.addEventListener("dblclick", () =>{
            if (!video_player.classList.contains('openFullScreen')) {
                video_player.classList.add('openFullScreen');
                fullscreen.innerHTML = "fullscreen_exit";
                video_player.requestFullscreen();
                mainVideo.style.border = "0px";
            }else{
                video_player.classList.remove('openFullScreen');
                fullscreen.innerHTML = "fullscreen";
                document.exitFullscreen();
                mainVideo.style.border = "2px solid var(--mainColor)";
            }
        })


        // Open settings
        settingsBtn.addEventListener('click',()=>{
            settings.classList.toggle('active');
            settingsBtn.classList.toggle('active');
        })

        // Playback Rate

        playback.forEach((event)=>{
            event.addEventListener('click',()=>{
                removeActiveClasses();
                event.classList.add('active');
                let speed = event.getAttribute('data-speed');
                mainVideo.playbackRate = speed;
            })
        })



        function removeActiveClasses() {
            playback.forEach(event => {
                event.classList.remove('active')
            });
        }


        // Store video duration and video path in local storage

        window.addEventListener('unload',()=>{
            let setDuration = localStorage.setItem('duration',`${mainVideo.currentTime}`);
            let setSrc = localStorage.setItem('src',`${mainVideo.getAttribute('src')}`);
        })

        window.addEventListener('load',()=>{
            let getDuration = localStorage.getItem('duration');
            let getSrc = localStorage.getItem('src');
            if (getSrc) {
                mainVideo.src = getSrc;
                mainVideo.currentTime = getDuration;
            }
        })


        mainVideo.addEventListener('contextmenu',(e)=>{
            e.preventDefault();
        })


        // Hide and show controls on Mouse move
        video_player.addEventListener('mouseover',()=>{
            controls.classList.add('active');
        })

        video_player.addEventListener('mouseleave',()=>{
            if (video_player.classList.contains('paused')) {
                if (settingsBtn.classList.contains('active')) {
                    controls.classList.add('active');
                }else{
                    controls.classList.remove('active')
                }
            }else{
                controls.classList.add('active')
            }
        })

        if (video_player.classList.contains('paused')) {
            if (settingsBtn.classList.contains('active')) {
                controls.classList.add('active');
            }else{
                controls.classList.remove('active')
            }
        }else{
            controls.classList.add('active')
        }

        // Hide and show controls on mobile touch
        video_player.addEventListener('touchstart',()=>{
            controls.classList.add('active');
            setTimeout(() => {
                controls.classList.remove('active')
            }, 8000);
        })

        video_player.addEventListener('touchmove',()=>{
            if (video_player.classList.contains('paused')) {
                controls.classList.remove('active')
            }else{
                controls.classList.add('active')
            }
        })

    let closeBtn = document.querySelector(".fa-times");

    closeBtn.addEventListener("click" ,() =>{
        bigVideoContainer.style.display="none";
        bigVideoContainer.innerHTML = "";
        document.body.classList.remove("noScroll");
        messageBtnDisplay();

    })

    let bigVideo = document.querySelector("#main-video");

    bigVideo.addEventListener("click",() =>{
        pausePlay();
    })
    
    function pausePlay() {
        if(bigVideo.paused) {
            bigVideo.play();
        } else {
            bigVideo.pause();
        }
    }

}


// login form


let logInContainer = document.querySelector(".logInContainer");

let formLogIn = document.getElementById("logIn");

let closeForm = document.querySelector(".closeLogIn");

let usernameInput = document.getElementById("Username");

let passwordInput = document.getElementById("Password");

let sumbmitLogIn = document.getElementById("sumbmitLogIn");

let alertBoxForm = document.getElementById("alertBoxForm");

if(localStorage.getItem("workoutProgram")) {
    logInContainer.classList.add("inactive")
}

formLogIn.addEventListener("animationend", () =>{
    formLogIn.classList.remove("firstTimeDisplay");
})

closeForm.addEventListener("click", () =>{
    logInContainer.classList.add("inactive");
})

sumbmitLogIn.addEventListener("mouseover",() =>{
    checkInputsLogInForm();
})

let ready = false;

function checkInputsLogInForm() {
  
    if(usernameInput.value.length == 0 || passwordInput.value.length == 0 ) {
        sumbmitLogIn.style.cursor = "not-allowed";
        ready  = false;
    } else {
        sumbmitLogIn.style.cursor = "pointer";
        ready  = true;        
    }
}


formLogIn.addEventListener("submit", (e) =>{
    if(ready) {
        e.preventDefault();
        checkInputsValues(e);
    } else {
        e.preventDefault();
        formLogIn.classList.add('formWrong');
        formLogIn.addEventListener("animationend",() =>{
            formLogIn.classList.remove("formWrong");
        });
    }
})

formLogIn.addEventListener("submit", (e) =>{
    checkInputsValues(e);
})




let usernameValue;

let passwordValue;

function checkInputsValues(e) {
    
    usernameValue =  usernameInput.value;

    passwordValue = passwordInput.value;

    if(usernameValue == "Andrei" && passwordValue == "parolaParola" ) {
        logInContainer.classList.add("inactive");
        activeAndreiWorkout(e);
    } else if(usernameValue == "Dani" && passwordValue == "parola123") {
        logInContainer.classList.add("inactive");
        activeDaniWorkout(e);
    } else if(usernameValue.length ==0 && passwordValue.length ==0 ) {
        e.preventDefault();
        formLogIn.classList.add('formWrong');
        formLogIn.addEventListener("animationend",() =>{
            formLogIn.classList.remove("formWrong");
        });

        alertBoxForm.style.display = "block";
        
        alertBoxForm.innerHTML = "The fields are empty !!!";

        setTimeout(() =>{
            alertBoxForm.style.display = "none";
        }, 2000)
    } 
    else {
        e.preventDefault();
        formLogIn.classList.add('formWrong');
        formLogIn.addEventListener("animationend",() =>{
            formLogIn.classList.remove("formWrong");
        });

        alertBoxForm.style.display = "block";
        
        alertBoxForm.innerHTML = "The username or password are incorrect !!!";

        setTimeout(() =>{
            alertBoxForm.style.display = "none";
        }, 2000)
    }
}



function  activeAndreiWorkout(e) {
    workoutFor = "Andrei";
    localStorage.setItem("workoutProgram", workoutFor);
    e.preventDefault();
    logInContainer.classList.add("inactive");
    location.reload();
}

function  activeDaniWorkout(e) {
    
    workoutFor = "Dani";
    localStorage.setItem("workoutProgram", workoutFor);
    e.preventDefault();
    logInContainer.classList.add("inactive");
    showVideoContainers()
    location.reload()
}



// password hide or not


let passwordBtn = document.getElementById("passwordVisible");

passwordBtn.addEventListener("click", () =>{
    if(passwordBtn.classList.contains("fa-eye")) {
        passwordBtn.classList.replace("fa-eye", "fa-eye-slash");
        passwordInput.type = "text";
    } else {
        passwordBtn.classList.replace( "fa-eye-slash" , "fa-eye");
        passwordInput.type = "password";
    }
    
})


let LogInBtn = document.querySelector("#LogInBtn");

LogInBtn.addEventListener("click",  () =>{
    logInContainer.classList.remove("inactive");
    formLogIn.classList.add("firstTimeDisplay");
}) 


// message btn

let btnMessage = document.querySelector("#btnMessage");


videos.forEach((vid) => {
    vid.addEventListener("click", messageBtnDisplay)})



function messageBtnDisplay() {
  
    if(document.body.classList.contains("noScroll")) {
            btnMessage.style.display="none";
    } else {
        btnMessage.style.display="flex";
    }
}


