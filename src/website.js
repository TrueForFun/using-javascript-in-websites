import { styler, value, physics, pointer, spring, listen } from "popmotion";

const swiper = new Swiper(`.swiper`, {
  speed: 400,
  spaceBetween: 100,
  effect: `cube`,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const ball = document.querySelector(".brand");
console.log({ ball });
const ballStyler = styler(ball);
const ballXY = value({ x: 0, y: 0 }, ballStyler.set);

let activeAction;
let pointerTracker;

function startTracking() {
  activeAction = physics({
    velocity: ballXY.getVelocity(),
    friction: 0.6,
    springStrength: 400,
    to: ballXY.get(),
    restSpeed: false,
  }).start(ballXY);

  pointerTracker = pointer(ballXY.get()).start((v) =>
    activeAction.setSpringTarget(v)
  );
}

function stopTracking() {
  if (activeAction) activeAction.stop();
  if (pointerTracker) pointerTracker.stop();
  spring({
    velocity: ballXY.getVelocity(),
    from: ballXY.get(),
    stiffness: 300,
    damping: 10,
  }).start(ballXY);
}

listen(ball, "mousedown touchstart").start(startTracking);
listen(document, "mouseup touchend").start(stopTracking);
