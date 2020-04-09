var b1,b2,b3,b4,b5,b6,b7,b8,b9;
var t1=0,t2=0,t3=0,t4=0,t5=0,t6=0,t7=0,t8=0,t9=0;

var cb1,cb2,cb3,cb4,cb5,cb6,cb7,cb8,cb9;
var symbol="O";
var database;
var gsref;
var gs;
var reset;
function setup()
{
    createCanvas(displayWidth-25,displayHeight-155)
    b1=createSprite(455,110,165,165);
    b2=createSprite(627,110,165,165);
    b3=createSprite(798,110,165,165);
    b4=createSprite(455,281,165,165);
    b5=createSprite(627,281,165,165);
    b6=createSprite(798,281,165,165);
    b7=createSprite(455,453,165,165);
    b8=createSprite(627,453,165,165);
    b9=createSprite(798,453,165,165);
   
    reset=createSprite(200,200,70,30);
    database=firebase.database();
    gsref=database.ref('gameState');
    gsref.on("value",function(data){
       gs=data.val();
    })
   

}
function draw()
{
   background(0);
   drawLines();
   textSize(150);
   play();

   if(mousePressedOver(reset))
   {
     database.ref('/').update({
         b1:"",
         b2:"",
         b3:"",
         b4:"",
         b5:"",
         b6:"",
         b7:"",
         b8:"",
         b9:"",
         gameState:-1
     
     })
     }

   if(t1=="X"||t1=="O")
    {
        textSize(150);
    
        text(t1,405,160);
       
    }

    if(t2=="X"||t2=="O")
    {
        textSize(150);
    
        text(t2,576,160);
       
    }
    if(t3=="X"||t3=="O")
    {
        textSize(150);
    
        text(t3,747,160);
       
    }
    if(t4=="X"||t4=="O")
    {
        textSize(150);
    
        text(t4,405,331);
       
    }
    if(t5=="X"||t5=="O")
    {
        textSize(150);
    
        text(t5,576,331);
       
    }
    if(t6=="X"||t6=="O")
    {
        textSize(150);
    
        text(t6,747,331);
       
    }
    if(t7=="X"||t7=="O")
    {
        textSize(150);
    
        text(t7,405,502);
       
    }
    if(t8=="X"||t8=="O")
    {
        textSize(150);
    
        text(t8,576,502);
       
    }
   
    if(t9=="X"||t9=="O")
    {
        textSize(150);
    
        text(t9,747,502);
       
    }
   
    

   drawSprites();
  }

  function drawLines()
  {
    stroke("white");
    strokeWeight(5);
    
    line(370,25,370,displayHeight-180);
    line(541,25,541,displayHeight-180);
    line(712,25,712,displayHeight-180);
    line(885,25,885,displayHeight-180);
    line(370,25,885,25);
    line(370,196,885,196);
    line(370,367,885,367);
    line(370,displayHeight-180,885,displayHeight-180);
    
  }
  function mousePressedOver(s)
  {
      s.mouseActive=true;
      if(mouseIsPressed && s.mouseIsOver )
      {
          return true;
      }
      return false;
  }


  function play()
  {
      if(gs==-1)
    {
        symbol="O";
    }
    else
    if(gs==1)
    {
        symbol="X";
    }



    b1ref = database.ref('b1');
    b1ref.on("value",function(data){
        cb1=data.val();
    })

    if(cb1=="X"||cb1=="O")
     {

        t1=cb1;
        b1.destroy();
     }
    else
    if(mousePressedOver(b1))
    {
        b1.destroy();
        database.ref('/').update({b1:symbol,gameState:-gs});
   
    }


    b2ref = database.ref('b2');
    b2ref.on("value",function(data){
        cb2=data.val();
    })

    if(cb2=="X"||cb2=="O")
     {

        t2=cb2;
        b2.destroy();
     }
    else
    
    if(mousePressedOver(b2))
    {
        b2.destroy();
        database.ref('/').update({b2:symbol,gameState:-gs});
   
    }

    b3ref = database.ref('b3');
    b3ref.on("value",function(data){
        cb3=data.val();
    })

    if(cb3=="X"||cb3=="O")
     {

        t3=cb3;
        b3.destroy();
     }
    else
    
    if(mousePressedOver(b3))
    {
        b3.destroy();
        database.ref('/').update({b3:symbol,gameState:-gs});
   
    }

    b4ref = database.ref('b4');
    b4ref.on("value",function(data){
        cb4=data.val();
    })

    if(cb4=="X"||cb4=="O")
     {

        t4=cb4;
        b4.destroy();
     }
    else
    
    if(mousePressedOver(b4))
    {
        b4.destroy();
        database.ref('/').update({b4:symbol,gameState:-gs});
   
    }


    b5ref = database.ref('b5');
    b5ref.on("value",function(data){
        cb5=data.val();
    })

    if(cb5=="X"||cb5=="O")
     {

        t5=cb5;
        b5.destroy();
     }
    else
    
    if(mousePressedOver(b5))
    {
        b5.destroy();
        database.ref('/').update({b5:symbol,gameState:-gs});
   
    }


    b6ref = database.ref('b6');
    b6ref.on("value",function(data){
        cb6=data.val();
    })

    if(cb6=="X"||cb6=="O")
     {

        t6=cb6;
        b6.destroy();
     }
    else
    
    if(mousePressedOver(b6))
    {
        b6.destroy();
        database.ref('/').update({b6:symbol,gameState:-gs});
   
    }


    b7ref = database.ref('b7');
    b7ref.on("value",function(data){
        cb7=data.val();
    })

    if(cb7=="X"||cb7=="O")
     {

        t7=cb7;
        b7.destroy();
     }
    else
    
    if(mousePressedOver(b7))
    {
        b7.destroy();
        database.ref('/').update({b7:symbol,gameState:-gs});
   
    }


    b8ref = database.ref('b8');
    b8ref.on("value",function(data){
        cb8=data.val();
    })

    if(cb8=="X"||cb8=="O")
     {

        t8=cb8;
        b8.destroy();
     }
    else
    
    if(mousePressedOver(b8))
    {
        b8.destroy();
        database.ref('/').update({b8:symbol,gameState:-gs});
   
    }

    b9ref = database.ref('b9');
    b9ref.on("value",function(data){
        cb9=data.val();
    })

    if(cb9=="X"||cb9=="O")
     {

        t9=cb9;
        b9.destroy();
     }
    else
    
    if(mousePressedOver(b9))
    {
        b9.destroy();
        database.ref('/').update({b9:symbol,gameState:-gs});
   
    }
   
  }