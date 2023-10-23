let angle = 0
let xPos, yPos
let rScaler =100
let angleSpeed =1
let angleAccel = -0.02
let radius = 100
let ifrect = 1;
let totalNum = 20
let xPos1=[]
let yPos1=[]
let xSpd=[]
let ySpd=[]
let mSize=[]
let radius2= 50
let xSpeed=[]
let ySpeed=[]
let circles=[]
let xPos2=[]
let yPos2=[]
let pressed=false


function setup() {
  createCanvas(600, 600);
   for(let i = 0; i < totalNum; i++){
    xPos1.push(random(0,width))
    yPos1.push(random(0,height))
    xSpd.push(random(3,1))
    ySpd.push(random(6,1))
    mSize.push(random(10,10))
     
     cneterX = 300
     centerY=300
     
     
     
     
   }
}


function draw() {
  background(246,82,117,20);
  
  
  if(pressed==false){
    for(let i=0;i<10;i++){
      for(let angle=0;angle<360;angle+=36){
        xPos2[i]=sin(angle*i)*100+width/2
        yPos2[i]=cos(angle*i)*100+height/2
      }
    }
  }
if (mouseIsPressed){
  pressed=true
  for(let i=0;i<xPos2.length;i++){
    xSpeed[i]=random(-25,25)
    ySpeed[i]=random(-50,50)
  }
  for(let i =0;i<xPos2.length;i++){
    xPos2[i]+=xSpeed[i]
    yPos2[i]+=ySpeed[i]
    fill(157,204,945)
    circle(xPos2[i],yPos2[i],10)
  }
}else{
  pressed=false;
}

    let r=map(sin(frameCount * 0.6),-1,1,20,2550)
  let g=map(sin(frameCount * 0.06),1,-1,0,255)
let b=map(sin(frameCount * 0.1),-1,1,0,255)
  
  if(mouseIsPressed){
    if(mouseX>560&&mouseX<580&&mouseY>540&&mouseY<555){
       for(let i =1; i<xPos1.length; i++){
    xPos1[i] -= xSpd[i]
    yPos1[i] -= ySpd[i]
         fill(r,g,b)
    circle(xPos1[i],yPos1[i],mSize[i])
    if(xPos1[i]>width){
      xPos1[i]=0
    }
    if(yPos1[i]>height){
      yPos1[i]=0
    } 
    }
  }}
      

      
  
    if(mouseIsPressed){
    if(mouseX>560&&mouseX<580&&mouseY>555&&mouseY<570){
       for(let i =1; i<xPos1.length; i++){
    xPos1[i] += xSpd[i]
    yPos1[i] -= ySpd[i]
         fill(b,r,g)
    circle(xPos1[i],yPos1[i],mSize[i])
    if(xPos1[i]>width){
      xPos1[i]=0
    }
    if(yPos1[i]>height){
      yPos1[i]=0
    } 
    }
  }}
  
  
  
  
  
  
      
   else{  
      
      
  for(let i =1; i<xPos1.length; i++){
    xPos1[i] += xSpd[i]
    yPos1[i] += ySpd[i]
    circle(xPos1[i],yPos1[i],mSize[i])
    if(xPos1[i]>width){
      xPos1[i]=0
    }
    if(yPos1[i]>height){
      yPos1[i]=0
    }
  
  }
   }
     let r1=map(sin(frameCount * 0.06),-1,1,255,0)
  let g1=map(sin(frameCount * 0.06),1,-1,0,255)
let b1=map(sin(frameCount * 0.06),-1,1,0,255)
 
 
  stroke(255,251,240)
  strokeWeight(7)
  noFill()
  circle(300,300,400)
  fill(255,251,240,20)
  
  
  
 
 
  
  
  
  
  
  
  noStroke()
  fill(r1,g1,0)
  circle(390,230,155)
  
  
  
  noStroke()
  fill(g1,800,r1)
  circle(410,360,125)
  
  
  
  noStroke()
  fill(b1,r1,2000)
  circle(345,410,115)
  
  stroke(209,41,32)
  noFill()
  circle(300,300,120)
  
  
  noStroke()
    fill("blue")
  rect(540,540,20,15)
  
  noStroke()
  fill("red")
  rect(540,540,40,30)
  
  noStroke()
    fill("blue")
  rect(560,540,20,30)

   noStroke()
  fill("green")
  rect(560,540,20,15)
  
  translate(width/2,height/2)
  
  
  
   let x = radius * cos(radians(angle));
  let y = radius * sin(radians(angle))+sin(cos(radians(angle*10)));
  
if(mouseIsPressed){
  if(mouseX>540&&mouseX<560&&mouseY>540&&mouseY<570){
    x = radius * cos(radians(angle))+2*radius * sin(radians(angle))+sin(cos(radians(angle*10)));
    y=radius * sin(radians(angle))+sin(cos(radians(angle*10)));
  }
}

  

    fill(0); 
  noStroke(); 
 // ellipse(x, y, 40, 40); 
  angle += 10; 
  
  
  let x1 = 200
let y1 = 200
let speedX1 = 5
let speedY1 = 5
let radius1 = 20
  
   fill(0, 0, 255);
  noStroke(); 
  ellipse(x, y, radius * 2, radius * 2);
  
  
  if(dist(0, 100,x, y)  <= 10 ){
    ifrect *=-1;
  }
  if(ifrect == 1){
    //fill(202,226,104)
    push()
    // translate(width/2,height/2)
    rectMode(CENTER);
    rect(0,120,100,70)
    pop()
    
  } else {
    
    push()
    // translate(width/2,height/2)
  
    noStroke()
    // rotate(angle);
    fill(r1,0,b1)
     circle(0,100,70)

    pop()
  }
  
}