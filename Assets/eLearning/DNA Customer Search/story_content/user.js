window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script5 = function()
{
  var player = GetPlayer();
var textEntryWildcardEnd = player.GetVar("textEntryWildcardEnd");
var wildcardEnd = player.GetVar("wildcardEnd");


if (textEntryWildcardEnd.endsWith("%")) {
  wildcardEnd = true;
} else {
  wildcardEnd = false;
}

player.SetVar("wildcardEnd", wildcardEnd);
}

window.Script6 = function()
{
  var player = GetPlayer();
var textEntryWildcardStart = player.GetVar("textEntryWildcardStart");
var wildcardStart = player.GetVar("wildcardStart");


if (textEntryWildcardStart.startsWith("%")) {
  wildcardStart = true;
} else {
  wildcardStart = false;
}

player.SetVar("wildcardStart", wildcardStart);
}

window.Script7 = function()
{
  const script1 = document.createElement('script');
script1.src = "https://cdn.jsdelivr.net/npm/@tsparticles/confetti@3.0.3/tsparticles.confetti.bundle.min.js";
script1.async = false;

script1.onload = function() {

const count = 2000,
  defaults = {
    origin: { y: 0.7 },
  };

function fire(particleRatio, opts) {
  confetti(
    Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio),
    })
  );
}

fire(0.25, {
  spread: 26,
  startVelocity: 55,
});

fire(0.2, {
  spread: 60,
});

fire(0.35, {
  spread: 100,
  decay: 0.91,
  scalar: 0.8,
});

fire(0.1, {
  spread: 120,
  startVelocity: 25,
  decay: 0.92,
  scalar: 1.2,
});

fire(0.1, {
  spread: 120,
  startVelocity: 45,
});

};

document.body.appendChild(script1);
}

};
