// define variables and array for texts
let title = "SONG OF THE SEA";
let txt = [
  "Timeless sea breezes,",
  "sea-wind of the night: you come for no one;",
  "if someone should wake, he must be prepared how to survive you.",
  "Timeless sea breezes,",
  "that for aeons have blown ancient rocks,",
  "you are purest space coming from afar…",
  "Oh, how a fruit-bearing fig tree feels your coming high up in the moonlight."
];
let yOffset = 0;// set offset to zero for the wave animation

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("monospace");
  textAlign(LEFT, TOP);
  fill(0, 127, 255);
}

// Set function for the text part of the poem
function wave(s, startX, startY) {//s is the variable for each line of text and (startX, startY) is the starting point of the text
  let x = startX;//set x to the starting point
  for (let i = 0; i < s.length; i++) {//because this effect should be happenning to each of the letters, so when i is smaller than the number of letters, it should ++
    let waveValue = sin(yOffset + x*0.01);// see readme
    let y = startY + waveValue * 20;//because waveValue is a sin(x) which is between 1 and -1, we must make it bigger to make the wave bigger
    //creating the letter size changing effect
    let sizeLetter = map(waveValue, -1, 1, 0.5, 1.5);//using map to map the value, waveValue, from -1 to 1 to 0.5, 1.5, ,means 50% or 150% of the original size
    textSize(30 * sizeLetter);//size of the letter will keep changing from 15 to 45
    x += textWidth(s[i]);//move right for each letter
    text(s[i], x, y);//draw text
  }
  
}

function draw() {
  background(255);
  
  textSize(54); //this is the text size for the title
  text(title, width / 2 - textWidth(title) / 2, 100);//draw title
  
  let waveSpacing = 30;//set the vertical distance between each line

  let xPosition = 0;//start from x position =0
  for (let yPosition = height * 1/5; yPosition < height; yPosition += waveSpacing, xPosition += 280) {//draw a for loop to repeat the poem untill the end of the screen, also move right a bit for every repeat
    for (let i = 0; i < txt.length; i++) {
      let line = txt[i];
      wave(line, xPosition, yPosition);//draw our wavey text
      yPosition += waveSpacing;//move down for every line of text
    }
  }
  
  yOffset += 0.03;//I feel like the speed of wave looks the best when it is 0.03
}