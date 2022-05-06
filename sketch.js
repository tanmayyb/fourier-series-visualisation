/**************************
Created by: Tanmay Bishnoi
For: An explanation video on Youtube that aims at linearising the concept of Fourier Transform and time/frequency domains.
Inspiration:  Zack star
(https://www.youtube.com/watch?v=3gjJDuCAEQQ&t=384s)
**************************/

//Tune these paramenters to your heart's content
const num_circles = 20;
const time_inc = 0.05;

const radius = 100;

let centerX;
let centerY;

const circle_x_offset = 200;
const graph_x_offset = 200;

let time = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
   centerX = windowWidth/2;
   centerY = windowHeight/2;
  stroke(255);
  noFill();
  
}

let wave_array = [];

function draw() {
  background(0);
  
  translate(centerX-circle_x_offset, centerY);
  x_  = 0;
  y_  = 0;
  
  push();
  beginShape();
  for (i=0;i<num_circles;i++){
    n = 2*i+1;
    new_radius = 4*radius/(n*PI);
    x = new_radius*cos(n*time);
    y = -new_radius*sin(n*time);
    ellipse(0,0,2*new_radius, 2*new_radius);
    line(0,0, x,y);
    ellipse(0,0,2,2)
    translate(x,y);
    x_  += x;
    y_  += y;
  }
  fill(255);
  ellipse(0,0,5,5)
  endShape();
  pop();
  
  wave_array.unshift(y_);
  line(x_,y_, graph_x_offset, y_)
  translate(graph_x_offset, 0);
  push();
  fill(255);
  ellipse(0,  y_, 5,5)
  pop();
  beginShape();
  noFill();
  for (let i = 0; i < wave_array.length; i++) {
    vertex(i, wave_array[i]);
  }
  endShape();
  
  if (wave_array.length > 400) {
    wave_array.pop();
  }
  
  time+=time_inc;
}