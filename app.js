const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");
//END SECTION
const section = document.querySelector("section");
const end = section.querySelector("h1");


const updateVideoSrc = () => {
 window.addEventListener('resize' , () => {
  const screenWidth = window.innerWidth

  if (screenWidth > 768) {
    video.src = './videos/full_video_landscape.mp4'
  } else {
    video.src = './videos/full_video_portrait.mp4'
  }
 })
}

updateVideoSrc()

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 18000, //how long
  triggerElement: intro,
  triggerHook: 0 //when to start
})
  .addIndicators()
  .setPin(intro) //to stick the intro
  .addTo(controller);

//Text Animation
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnim)
  .addTo(controller);

//Video Animation
let accelamount = 0.1; //for smooth transition, when you stop scroll it will go smooth
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 1000; //
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  video.currentTime = delay;
}, 33.3);
//divide 1000 / FPS = 1000 / 30 = 33.3
