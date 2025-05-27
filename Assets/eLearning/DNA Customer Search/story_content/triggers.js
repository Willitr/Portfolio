function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5bIy9eB3tSN":
        Script1();
        break;
      case "6TDY00ACl8a":
        Script2();
        break;
      case "5piaE9kXH5o":
        Script3();
        break;
      case "6FHoQGVl39t":
        Script4();
        break;
      case "6J44AtbXLTC":
        Script5();
        break;
      case "69ybC2Eo36D":
        Script6();
        break;
      case "6Vu56BuxJMs":
        Script7();
        break;
  }
}

window.InitExecuteScripts = function()
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
window.Script1 = function()
{
  player.once(() => {
const target = object('5VCbQItwsQn');
const duration = 20000;
const easing = 'ease-out';
const id = '6eM3Rboa4gT';
const pulseAmount = 0.1;
const delay = 8000;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  player.once(() => {
const target = object('6nZaDBXen6l');
const duration = 20000;
const easing = 'ease-out';
const id = '6n3i5XoIxEa';
const pulseAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script3 = function()
{
  player.once(() => {
const target = object('6BNwTZTJS1r');
const duration = 20000;
const easing = 'ease-out';
const id = '5ax9seI3y9f';
const pulseAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script4 = function()
{
  player.once(() => {
const target = object('5roTgMdMLjc');
const duration = 20000;
const easing = 'ease-out';
const id = '5pLL3xVRg2F';
const pulseAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
