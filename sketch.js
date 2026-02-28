var homeScreen;
var cont;
var andalusia, aragon, asturias, balearic, basque, canary, cantabria, castileLeon, castilla, catalonia, extremadaru, hp, continue1, galicia, laRioja, madrid, murcia, navarre, valencia;
var andalusia1, aragon1, asturias1, balearic1, basque1, canary1, cantabria1, castileLeon1, castilla1, catalonia1, extremadaru1, galicia1, laRioja1, madrid1, murcia1, navarre1, valencia1;
var andalusiaB, aragonB, asturiasB, balearicB, basqueB, canaryB, cantabriaB, castileLeonB, castillaB, cataloniaB, extremadaruB, galiciaB, laRiojaB, madridB, murciaB, navarreB, valenciaB;
var andalusiaM = false, aragonM = false, asturiasM = false, balearicM = false, basqueM = false, canaryM = false, cantabriaM = false, castileLeonM = false, castillaM = false, cataloniaM = false, extremadaruM = false, galiciaM = false, laRiojaM = false, madridM = false, murciaM = false, navarreM = false, valenciaM = false;
var gamestate = 0;
var mode = 0;
var select = 0;
var ques = 0;
var ans = 0;
var randomPos = 0;  
var infoText = "";
var questionText = "";
var option1 = "", option2="", option3="", optionC="";

function preload() {
  // Load images
  hp = loadImage("home page.jpg");
  continue1 = loadImage("continue.png");
  // Load images for each region
  andalusia = loadImage("Andalusia.png");
  aragon = loadImage("Aragon.png");
  asturias = loadImage("Asturias.png");
  balearic = loadImage("Balearic Islands.png");
  basque = loadImage("Basque Country.png");
  canary = loadImage("Canary Islands.png");
  cantabria = loadImage("Cantabria.png");
  castileLeon = loadImage("Castile and Leon.png");
  castilla = loadImage("Castilla la Mancha.png");
  catalonia = loadImage("Catalonia.png");
  extremadaru = loadImage("Extremadura.png");
  galicia = loadImage("Galicia.png");
  laRioja = loadImage("La Rioja.png");
  madrid = loadImage("Madrid.png");
  murcia = loadImage("Murcia.png");
  navarre = loadImage("Navarre.png");
  valencia = loadImage("Valencia.png");
  // Load spain map
  spain = loadImage("Spain blank map.png");
  //sounds
  click = loadSound("Click.wav");
  //
  homeImg = loadImage("home.png");
  exit = loadImage("exit.png");
  start = loadImage("start.png");
  backF = loadImage("backF.png");
  backP = loadImage("backP.png");
  backL = loadImage("backL.png");
  backS = loadImage("backS.png");
  //
  foodImg = loadImage("food.png");
  placesImg = loadImage("places.png");
  languageImg = loadImage("languages.png");
  specialityImg = loadImage("speciality.png");
  //
  foodInfo = loadImage("food2.png");
  placesInfo = loadImage("places2.png");
  languageInfo = loadImage("languages2.png");
  specialityInfo = loadImage("speciality2.png");
  //
  quizImg = loadImage("quiz.png");
  foodQ = loadImage("foodQ.png");
  /*placesQ = loadImage("placesQ.png");
  languageQ = loadImage("languagesQ.png");
  specialityQ = loadImage("specialityQ.png");*/
  //
  optionF = loadImage("option.png");
  /*optionP = loadImage("optionP.png");
  optionL = loadImage("optionL.png");
  optionS = loadImage("optionS.png");*/
  //
  wrongSel = loadImage("wrong.png");
  correctSel = loadImage("correct.png");
  //
  /*oneI= loadImage("1.png");
  twoI= loadImage("2.png");
  threeI= loadImage("3.png");*/
  nextI= loadImage("next.png");
  //
  star0 = loadImage("quizEnd0.png");
  star1 = loadImage("quizEnd1.png");
  star2 = loadImage("quizEnd2.png");
  star3 = loadImage("quizEnd3.png");
  doneI = loadImage("done.png");
  extraI = loadImage("extra.png");
}

function setup() {
  // Create a full-screen canvas
  createCanvas(displayWidth, displayHeight - 137);
  ;

  // Create a sprite for the home screen
  homeScreen = createSprite(displayWidth/2, displayHeight/2 - 70,displayWidth,displayHeight);
  homeScreen.addImage(hp);
  homeScreen.scale = 2.1; // Adjust scale to fit the screen

  cont = createSprite(displayWidth/2, displayHeight-230,400,400);
  cont.addImage(start);
  cont.scale = 0.5;

  spain1 = createSprite(displayWidth/2, displayHeight/2 - 70,displayWidth,displayHeight);
  spain1.addImage(spain);
  spain1.scale = 0.137; // Adjust scale to fit the screen
  spain1.visible = false;

  andalusia1 = createSprite(displayWidth/2, displayHeight/2 - 70,displayWidth,displayHeight);
  andalusia1.addImage(andalusia);
  andalusia1.scale = 0.137; // Adjust scale to fit the screen
  andalusia1.visible = false;
  andalusiaB = createSprite(displayWidth/2 - 68 ,displayHeight - 270,50,15);
  andalusiaB.visible = false;

  aragon1 = createSprite(displayWidth/2, displayHeight/2 - 70,displayWidth,displayHeight);
  aragon1.addImage(aragon);
  aragon1.scale = 0.137; // Adjust scale to fit the screen
  aragon1.visible = false;
  aragonB = createSprite(displayWidth/2 + 130 ,displayHeight/2 -170,45,10);
  aragonB.visible = false;
  
  asturias1 = createSprite(displayWidth/2, displayHeight/2 - 70,displayWidth,displayHeight);
  asturias1.addImage(asturias);
  asturias1.scale = 0.137; // Adjust scale to fit the screen
  asturias1.visible = false;
  asturiasB = createSprite(displayWidth/2 - 130 ,63,50,10);
  asturiasB.visible = false;

  balearic1 = createSprite(displayWidth/2, displayHeight/2 - 70,displayWidth,displayHeight);
  balearic1.addImage(balearic);
  balearic1.scale = 0.137; // Adjust scale to fit the screen
  balearic1.visible = false;        
  balearicB = createSprite(displayWidth/2 + 265 ,displayHeight/2 - 30 ,73,10);
  balearicB.visible = false;

  basque1 = createSprite(displayWidth/2, displayHeight/2 - 70,displayWidth,displayHeight);  
  basque1.addImage(basque);
  basque1.scale = 0.137; // Adjust scale to fit the screen
  basque1.visible = false;
  basqueB = createSprite(displayWidth/2 + 35 ,75,45,25);
  basqueB.visible = false;

  canary1 = createSprite(displayWidth/2, displayHeight/2 - 70,displayWidth,displayHeight);
  canary1.addImage(canary);
  canary1.scale = 0.137; // Adjust scale to fit the screen
  canary1.visible = false;
  canaryB = createSprite(displayWidth/2 + 330 ,displayHeight - 205,70,10);
  canaryB.visible = false;

  cantabria1 = createSprite(displayWidth/2, displayHeight/2 - 70,displayWidth,displayHeight);
  cantabria1.addImage(cantabria);
  cantabria1.scale = 0.137; // Adjust scale to fit the screen
  cantabria1.visible = false;
  cantabriaB = createSprite(displayWidth/2 - 35 ,65,50,10);
  cantabriaB.visible = false;
  
  castileLeon1 = createSprite(displayWidth/2, displayHeight/2 - 70,displayWidth,displayHeight);
  castileLeon1.addImage(castileLeon);
  castileLeon1.scale = 0.137; // Adjust scale to fit the screen
  castileLeon1.visible = false;
  castileLeonB = createSprite(displayWidth/2 - 66 ,displayHeight/2 - 193,69.5,10);
  castileLeonB.visible = false;

  castilla1 = createSprite(displayWidth/2, displayHeight/2 - 70,displayWidth,displayHeight);
  castilla1.addImage(castilla);
  castilla1.scale = 0.137; // Adjust scale to fit the screen
  castilla1.visible = false;
  castillaB = createSprite(displayWidth/2 + 13,displayHeight/2 - 30,90,15);
  castillaB.visible = false;

  catalonia1 = createSprite(displayWidth/2, displayHeight/2 - 70,displayWidth,displayHeight);
  catalonia1.addImage(catalonia);
  catalonia1.scale = 0.137; // Adjust scale to fit the screen
  catalonia1.visible = false;
  cataloniaB = createSprite(displayWidth/2 + 255 ,displayHeight/2 - 192,50,10);
  cataloniaB.visible = false;

  extremadaru1 = createSprite(displayWidth/2, displayHeight/2 - 70,displayWidth,displayHeight);
  extremadaru1.addImage(extremadaru);
  extremadaru1.scale = 0.137; // Adjust scale to fit the screen
  extremadaru1.visible = false;
  extremadaruB = createSprite(displayWidth/2 - 140 ,displayHeight/2 - 29,62,10);
  extremadaruB.visible = false;

  galicia1 = createSprite(displayWidth/2, displayHeight/2 - 70,displayWidth,displayHeight);
  galicia1.addImage(galicia);
  galicia1.scale = 0.137; // Adjust scale to fit the screen
  galicia1.visible = false;
  galiciaB = createSprite(displayWidth/2 - 238 ,93,33,10);
  galiciaB.visible = false;

  laRioja1 = createSprite(displayWidth/2, displayHeight/2 - 70,displayWidth,displayHeight);
  laRioja1.addImage(laRioja);
  laRioja1.scale = 0.137; // Adjust scale to fit the screen
  laRioja1.visible = false;
  laRiojaB = createSprite(displayWidth/2 + 38 ,133,35,10);
  laRiojaB.visible = false;

  madrid1 = createSprite(displayWidth/2, displayHeight/2 - 70,displayWidth,displayHeight);
  madrid1.addImage(madrid);
  madrid1.scale = 0.137; // Adjust scale to fit the screen
  madrid1.visible = false;
  madridB = createSprite(displayWidth/2 - 22.5 ,displayHeight/2 - 106,32,10);
  madridB.visible = false;

  murcia1 = createSprite(displayWidth/2, displayHeight/2 - 70,displayWidth,displayHeight);
  murcia1.addImage(murcia);         
  murcia1.scale = 0.137; // Adjust scale to fit the screen
  murcia1.visible = false;
  murciaB = createSprite(displayWidth/2  + 90 ,displayHeight - 303,33,10);
  murciaB.visible = false;

  navarre1 = createSprite(displayWidth/2, displayHeight/2 - 70,displayWidth,displayHeight);
  navarre1.addImage(navarre);
  navarre1.scale = 0.137; // Adjust scale to fit the screen
  navarre1.visible = false;
  navarreB = createSprite(displayWidth/2 + 84 ,109,38,10);
  navarreB.visible = false;

  valencia1 = createSprite(displayWidth/2, displayHeight/2 - 70,displayWidth,displayHeight);
  valencia1.addImage(valencia);
  valencia1.scale = 0.137; // Adjust scale to fit the screen
  valencia1.visible = false;
  valenciaB = createSprite(displayWidth/2 + 123.5 ,displayHeight/2 - 40,38,10);
  valenciaB.visible = false;

   extra = createSprite(displayWidth/2-10,displayHeight-161.5,185,40);
   extra.addImage(extraI);
   extra.scale = 0.76;
   extra.visible = false; 

  foodI = createSprite(displayWidth/2, displayHeight/2-70,400,400);
  foodI.addImage(foodInfo);
  foodI.scale = 1.35;
  foodI.visible = false;

  placesI = createSprite(displayWidth/2, displayHeight/2-70,400,400);
  placesI.addImage(placesInfo);
  placesI.scale = 1.35;
  placesI.visible = false;

  languageI = createSprite(displayWidth/2, displayHeight/2-70,400,400);
  languageI.addImage(languageInfo);
  languageI.scale = 1.35;
  languageI.visible = false;

  specialityI = createSprite(displayWidth/2, displayHeight/2-70,400,400);
  specialityI.addImage(specialityInfo);
  specialityI.scale = 1.35;
  specialityI.visible = false;

  foodQ2 = createSprite(displayWidth/2, displayHeight/2-70,400,400);
  foodQ2.addImage(foodQ);
  foodQ2.scale = 1.35;
  foodQ2.visible = false;

 /* placesQ2 = createSprite(displayWidth/2, displayHeight/2-70,400,400);
  placesQ2.addImage(placesQ);
  placesQ2.scale = 1.35;
  placesQ2.visible = false;

  languageQ2 = createSprite(displayWidth/2, displayHeight/2-70,400,400);
  languageQ2.addImage(languageQ);
  languageQ2.scale = 1.35;
  languageQ2.visible = false;

  specialityQ2 = createSprite(displayWidth/2, displayHeight/2-70,400,400);   
  specialityQ2.addImage(specialityQ);
  specialityQ2.scale = 1.35;
  specialityQ2.visible = false;*/

  food = createSprite(displayWidth/2 - 364,50,50,50);
  food.addImage(foodImg);
  food.visible = false;

  places = createSprite(displayWidth/2 + 364,50,50,50);
  places.addImage(placesImg);
  places.visible = false;

  language = createSprite(displayWidth/2 - 360,displayHeight - 300,50,50);
  language.addImage(languageImg);
  language.visible = false;

  speciality = createSprite(displayWidth/2 + 360,displayHeight - 300,50,50);
  speciality.addImage(specialityImg);
  speciality.visible = false;

   exitB = createSprite(displayWidth/2 - 350,displayHeight-190,50,50);
   exitB.addImage(exit);
   exitB.scale = 0.3;
   exitB.visible = false;

   quit = createSprite(displayWidth/2 - 300,displayHeight-190,50,50);
   quit.addImage(exit);
   quit.scale = 0.25;
   quit.visible = false;

   back = createSprite(displayWidth+340,displayHeight/2-300,50,50);
   back.scale = 0.19;
   back.visible = false;

   quizB = createSprite(displayWidth+400,displayHeight-190,50,50);
   quizB.addImage(quizImg);
   quizB.scale = 0.8;
   quizB.visible = false;

   wrong1= createSprite(displayWidth/2 - 200, displayHeight/2-70,100,50);
   wrong1.addImage(optionF);
   wrong1.scale = 2.1;
   wrong1.visible = false;

   wrong2= createSprite(displayWidth/2 +200, displayHeight/2-70,100,50);
   wrong2.addImage(optionF);
   wrong2.scale = 2.1;
   wrong2.visible = false;

   wrong3= createSprite(displayWidth/2-200, displayHeight/2 + 70,100,50);
   wrong3.addImage(optionF);
   wrong3.scale = 2.1;
   wrong3.visible = false;
   
   correct= createSprite(displayWidth/2+200, displayHeight/2 + 70,100,50);
   correct.addImage(optionF);
   correct.scale = 2.1;
   correct.visible = false;

   /*number = createSprite(300, displayHeight/2 - 290,50,50);
   number.addImage(oneI);
   number.scale = 0.05;
   number.visible = false;*/

   next = createSprite(displayWidth+340,displayHeight-190,50,50);
   next.addImage(nextI);
   next.scale = 0.35;
   next.visible = false;   

   end = createSprite(displayWidth/2, displayHeight/2-70,400,400);
   end.addImage(star0);
   end.scale = 1.5;
   end.visible = false;

   done = createSprite(displayWidth/2, displayHeight-270,400,400);
   done.addImage(doneI);
   done.scale = 0.4;
   done.visible = false;

   home = createSprite(250,displayHeight/2-310,50,50);
   home.addImage(homeImg);
   home.scale = 0.07;
   home.visible = false;
}
function randomPosGen() {
         if(randomPos === 1)
        {   
            wrong1.x = displayWidth/2 -200;
            wrong1.y = displayHeight/2 -70;
            wrong2.x = displayWidth/2 +200;
            wrong2.y = displayHeight/2 -70;
            wrong3.x = displayWidth/2 -200;
            wrong3.y = displayHeight/2 +70;
            correct.x = displayWidth/2 +200;
            correct.y = displayHeight/2 +70;
        }
         if(randomPos === 2)
         {
            wrong1.x = displayWidth/2 -200;
            wrong1.y = displayHeight/2 -70;
            wrong2.x = displayWidth/2 -200;
            wrong2.y = displayHeight/2 +70;
            wrong3.x = displayWidth/2 +200;
            wrong3.y = displayHeight/2 -70;
            correct.x = displayWidth/2 +200; 
            correct.y = displayHeight/2 +70;
         }
         if(randomPos === 3)
         {
            wrong1.x = displayWidth/2 -200;
            wrong1.y = displayHeight/2 -70;
            wrong2.x = displayWidth/2 +200;
            wrong2.y = displayHeight/2 +70;
            wrong3.x = displayWidth/2 -200;
            wrong3.y = displayHeight/2 +70;
            correct.x = displayWidth/2 +200;
            correct.y = displayHeight/2 -70;
         }
         if(randomPos === 4)
         {
            wrong1.x = displayWidth/2 -200;
            wrong1.y = displayHeight/2 -70;
            wrong2.x = displayWidth/2 +200;
            wrong2.y = displayHeight/2 -70;
            wrong3.x = displayWidth/2 +200;
            wrong3.y = displayHeight/2 +70;
            correct.x = displayWidth/2 -200;
            correct.y = displayHeight/2 +70;
         }
         if(randomPos === 5)
         {
            wrong1.x = displayWidth/2 -200;
            wrong1.y = displayHeight/2 -70;
            wrong2.x = displayWidth/2 +200;
            wrong2.y = displayHeight/2 +70;
            wrong3.x = displayWidth/2 +200;
            wrong3.y = displayHeight/2 -70;
            correct.x = displayWidth/2 -200;
            correct.y = displayHeight/2 +70;
         }
         if(randomPos === 6)        
         {
            wrong1.x = displayWidth/2 -200;
            wrong1.y = displayHeight/2 -70;
            wrong2.x = displayWidth/2 -200;
            wrong2.y = displayHeight/2 +70;
            wrong3.x = displayWidth/2 +200;
            wrong3.y = displayHeight/2 +70;
            correct.x = displayWidth/2 +200;
            correct.y = displayHeight/2 -70;
         } 
         if(randomPos === 7)
        {   
            wrong1.x = displayWidth/2 +200;
            wrong1.y = displayHeight/2 -70;
            wrong2.x = displayWidth/2 -200;
            wrong2.y = displayHeight/2 -70;
            wrong3.x = displayWidth/2 -200;
            wrong3.y = displayHeight/2 +70;
            correct.x = displayWidth/2 +200;
            correct.y = displayHeight/2 +70;
        }
        if(randomPos === 8)
        {   
            wrong1.x = displayWidth/2 +200;
            wrong1.y = displayHeight/2 -70;
            wrong2.x = displayWidth/2 -200;
            wrong2.y = displayHeight/2 -70;
            wrong3.x = displayWidth/2 +200;
            wrong3.y = displayHeight/2 +70;
            correct.x = displayWidth/2 -200;
            correct.y = displayHeight/2 +70;
        }
        if(randomPos === 9)
        {   
            wrong1.x = displayWidth/2 -200;
            wrong1.y = displayHeight/2 +70;
            wrong2.x = displayWidth/2 -200;
            wrong2.y = displayHeight/2 -70;
            wrong3.x = displayWidth/2 +200;
            wrong3.y = displayHeight/2 -70;
            correct.x = displayWidth/2 +200;
            correct.y = displayHeight/2 +70;
        }
        if(randomPos === 10)
        {   
            wrong1.x = displayWidth/2 +200;
            wrong1.y = displayHeight/2 +70;
            wrong2.x = displayWidth/2 -200;
            wrong2.y = displayHeight/2 -70;
            wrong3.x = displayWidth/2 +200;
            wrong3.y = displayHeight/2 -70;
            correct.x = displayWidth/2 -200;
            correct.y = displayHeight/2 +70;
        }
        if(randomPos === 11)
        {   
            wrong1.x = displayWidth/2 -200;
            wrong1.y = displayHeight/2 +70;
            wrong2.x = displayWidth/2 -200;
            wrong2.y = displayHeight/2 -70;
            wrong3.x = displayWidth/2 +200;
            wrong3.y = displayHeight/2 +70;
            correct.x = displayWidth/2 +200;
            correct.y = displayHeight/2 -70;
        }
        if(randomPos === 12)
        {   
            wrong1.x = displayWidth/2 +200;
            wrong1.y = displayHeight/2 +70;
            wrong2.x = displayWidth/2 -200;
            wrong2.y = displayHeight/2 -70;
            wrong3.x = displayWidth/2 -200;
            wrong3.y = displayHeight/2 +70;
            correct.x = displayWidth/2 +200;
            correct.y = displayHeight/2 -70;
        }
        if(randomPos === 13)
        {   
            wrong3.x = displayWidth/2 -200;
            wrong3.y = displayHeight/2 -70;
            wrong1.x = displayWidth/2 +200;
            wrong1.y = displayHeight/2 -70;
            wrong2.x = displayWidth/2 -200;
            wrong2.y = displayHeight/2 +70;
            correct.x = displayWidth/2 +200;
            correct.y = displayHeight/2 +70;
        }
        if(randomPos === 14)
        {   
            wrong3.x = displayWidth/2 -200;
            wrong3.y = displayHeight/2 -70;
            wrong1.x = displayWidth/2 +200;
            wrong1.y = displayHeight/2 -70;
            wrong2.x = displayWidth/2 +200;
            wrong2.y = displayHeight/2 +70;
            correct.x = displayWidth/2 -200;
            correct.y = displayHeight/2 +70;
        }
        if(randomPos === 15)
        {   
            wrong3.x = displayWidth/2 -200;
            wrong3.y = displayHeight/2 -70;
            wrong1.x = displayWidth/2 -200;
            wrong1.y = displayHeight/2 +70;
            wrong2.x = displayWidth/2 +200;
            wrong2.y = displayHeight/2 -70;
            correct.x = displayWidth/2 +200;
            correct.y = displayHeight/2 +70;
        }
        if(randomPos === 16)
        {   
            wrong3.x = displayWidth/2 -200;
            wrong3.y = displayHeight/2 -70;
            wrong1.x = displayWidth/2 +200;
            wrong1.y = displayHeight/2 +70;
            wrong2.x = displayWidth/2 +200;
            wrong2.y = displayHeight/2 -70;
            correct.x = displayWidth/2 -200;
            correct.y = displayHeight/2 +70;
        }
        if(randomPos === 17)
        {   
            wrong3.x = displayWidth/2 -200;
            wrong3.y = displayHeight/2 -70;
            wrong1.x = displayWidth/2 -200;
            wrong1.y = displayHeight/2 +70;
            wrong2.x = displayWidth/2 +200;
            wrong2.y = displayHeight/2 +70;
            correct.x = displayWidth/2 +200;
            correct.y = displayHeight/2 -70;
        }
        if(randomPos === 18)
        {   
            wrong3.x = displayWidth/2 -200;
            wrong3.y = displayHeight/2 -70;
            wrong1.x = displayWidth/2 +200;
            wrong1.y = displayHeight/2 +70;
            wrong2.x = displayWidth/2 -200;
            wrong2.y = displayHeight/2 +70;
            correct.x = displayWidth/2 +200;
            correct.y = displayHeight/2 -70;
        }
        if(randomPos === 19)
        {   
            correct.x = displayWidth/2 -200;
            correct.y = displayHeight/2 -70;
            wrong1.x = displayWidth/2 +200;
            wrong1.y = displayHeight/2 -70;
            wrong2.x = displayWidth/2 -200;
            wrong2.y = displayHeight/2 +70;
            wrong3.x = displayWidth/2 +200;
            wrong3.y = displayHeight/2 +70;
        }
        if(randomPos === 20)
        {   
            correct.x = displayWidth/2 -200;
            correct.y = displayHeight/2 -70;
            wrong1.x = displayWidth/2 +200;
            wrong1.y = displayHeight/2 -70;
            wrong2.x = displayWidth/2 +200;
            wrong2.y = displayHeight/2 +70;
            wrong3.x = displayWidth/2 -200;
            wrong3.y = displayHeight/2 +70;
        }
        if(randomPos === 21)
        {   
            correct.x = displayWidth/2 -200;
            correct.y = displayHeight/2 -70;
            wrong1.x = displayWidth/2 -200;
            wrong1.y = displayHeight/2 +70;
            wrong2.x = displayWidth/2 +200;
            wrong2.y = displayHeight/2 -70;
            wrong3.x = displayWidth/2 +200;
            wrong3.y = displayHeight/2 +70;
        }
        if(randomPos === 22)
        {   
            correct.x = displayWidth/2 -200;
            correct.y = displayHeight/2 -70;
            wrong1.x = displayWidth/2 +200;
            wrong1.y = displayHeight/2 +70;
            wrong2.x = displayWidth/2 +200;
            wrong2.y = displayHeight/2 -70;
            wrong3.x = displayWidth/2 -200;
            wrong3.y = displayHeight/2 +70;
        }
        if(randomPos === 23)
        {   
            correct.x = displayWidth/2 -200;
            correct.y = displayHeight/2 -70;
            wrong1.x = displayWidth/2 -200;
            wrong1.y = displayHeight/2 +70;
            wrong2.x = displayWidth/2 +200;
            wrong2.y = displayHeight/2 +70;
            wrong3.x = displayWidth/2 +200;
            wrong3.y = displayHeight/2 -70;
        }
        if(randomPos === 24)
        {   
            correct.x = displayWidth/2 -200;
            correct.y = displayHeight/2 -70;
            wrong1.x = displayWidth/2 +200;
            wrong1.y = displayHeight/2 +70;
            wrong2.x = displayWidth/2 -200;
            wrong2.y = displayHeight/2 +70;
            wrong3.x = displayWidth/2 +200;
            wrong3.y = displayHeight/2 -70;
        }
}
function draw() {
  
  background("white");
  //background(displayWidth/2, displayHeight/2);
  option1.x = wrong1.x;
  option2.x = wrong2.x;
  option3.x = wrong3.x;
  optionC.x = correct.x;
  option1.y = wrong1.y;
  option2.y = wrong2.y;
  option3.y = wrong3.y;
  optionC.y = correct.y;
  if(mousePressedOver(cont))
 {
    homeScreen.visible = false;
    cont.visible = false;
    gamestate = 1;
  }
  if(mousePressedOver(home) && gamestate == 1)
  {
      gamestate = 0;
  }
  if(gamestate == 0)
  {
     homeScreen.visible = true;   
     cont.visible = true; 
     cont.x = displayWidth/2;
     done.x = displayWidth + 340;
     quizB.visible = false;
     quizB.x=displayWidth + 340;
     home.visible = false;
     spain1.visible = false;
     andalusia1.visible = false;
     aragon1.visible = false;
     asturias1.visible = false;
     balearic1.visible = false;
     basque1.visible = false;
     canary1.visible = false;
     cantabria1.visible = false;
     castileLeon1.visible = false;
     castilla1.visible = false;
     catalonia1.visible = false;
     extremadaru1.visible = false;
     galicia1.visible = false;
     laRioja1.visible = false;
     madrid1.visible = false;
     murcia1.visible = false;
     navarre1.visible = false;
     valencia1.visible = false;
     food.visible = false;
     places.visible = false;
     language.visible = false;
     speciality.visible = false;
     exitB.visible = false;
     foodI.visible = false;
     placesI.visible = false;
     languageI.visible = false;
     specialityI.visible = false;  
     back.visible = false;
     // 
     andalusiaM= false;
     aragonM=false;
     asturiasM=false;
     balearicM=false;
     basqueM=false;
     canaryM=false;
     cantabriaM=false;
     castileLeonM=false;
     castillaM=false;
     cataloniaM=false;
     extremadaruM=false;
     galiciaM=false;
     laRiojaM=false;
     madridM=false;
     murciaM=false;
     navarreM=false;
     valenciaM=false;
     //
     infoText="";
  }
  if(gamestate !=0)
  {
   extra.visible=true;
  }
  else 
  {
   extra.visible=false;
  }
  if(gamestate == 1)
   {
     spain1.visible = true;
     cont.visible = true;
     cont.x = displayWidth + 340;
     home.visible = true;  
     andalusia1.visible = false;
     aragon1.visible = false;
     asturias1.visible = false;
     balearic1.visible = false;
     basque1.visible = false;
     canary1.visible = false;
     cantabria1.visible = false;
     castileLeon1.visible = false;
     castilla1.visible = false;
     catalonia1.visible = false;
     extremadaru1.visible = false;
     galicia1.visible = false;
     laRioja1.visible = false;
     madrid1.visible = false;
     murcia1.visible = false;
     navarre1.visible = false;
     valencia1.visible = false;
     food.visible = false;
     places.visible = false;
     language.visible = false;
     speciality.visible = false;
     //
     andalusiaM= false;
     aragonM=false;
     asturiasM=false;
     balearicM=false;
     basqueM=false;
     canaryM=false;
     cantabriaM=false;
     castileLeonM=false;
     castillaM=false;
     cataloniaM=false;
     extremadaruM=false;
     galiciaM=false;
     laRiojaM=false;
     madridM=false;
     murciaM=false;
     navarreM=false;
     valenciaM=false;
     //
     infoText="";
     //
     foodI.visible = false;
     placesI.visible = false;
     languageI.visible = false;
     specialityI.visible = false;  
     //
     foodQ2.visible = false;
     /*placesQ2.visible = false;
     languageQ2.visible = false;
     specialityQ2.visible = false;*/
     //
     exitB.visible = false;
     back.visible = false;
     quit.visible = false;
     //
     quizB.visible = true;
     setTimeout(() => {
            quizB.x=displayWidth/2;
        }, 100)
     //
     wrong1.visible = false;
     wrong2.visible = false;
     wrong3.visible = false;
     correct.visible = false;
     //number.visible = false;
     end.visible = false;
     next.visible = false;
     next.x = displayWidth + 340;
     done.x = displayWidth + 340;
     select = 0;
     ques = 0;
     ans = 0;
     //Reset option positions and scales
     food.x = displayWidth/2 -364;
     food.y = 50;
     food.scale = 1;
     places.x = displayWidth/2 +364;
     places.y = 50;
     places.scale = 1;
     language.x  = displayWidth/2 -360;
     language.y = displayHeight -300;
     language.scale = 1;
     speciality.x = displayWidth/2 +360;
     speciality.y = displayHeight -300;
     speciality.scale = 1;
     back.x=displayWidth+340;
    // quizB.x=displayWidth/2;
     next.x=displayWidth+340;
   }
   if(gamestate == 2)
   {  
      home.visible = false;
      quizB.visible = false;  
      quizB.x=displayWidth + 340;
      // Hide info sprites
      foodI.visible = false;
      placesI.visible = false;
      languageI.visible = false;
      specialityI.visible = false;
      quit.visible = true;
      quit.x = displayWidth/2 -350;
   }
  if(mousePressedOver(andalusiaB) && gamestate == 1)
    {
      //click.play(0.1);
       homeScreen.visible = false;
       cont.visible = false;
       spain1.visible = false;
       aragon1.visible = false;
       asturias1.visible = false;
        balearic1.visible = false;
        basque1.visible = false;
        canary1.visible = false;
        cantabria1.visible = false;
        castileLeon1.visible = false;
        castilla1.visible = false;
        catalonia1.visible = false;
        extremadaru1.visible = false;
        galicia1.visible = false;
        laRioja1.visible = false;
        madrid1.visible = false;
        murcia1.visible = false;
        navarre1.visible = false;
        valencia1.visible = false;
        // Show Andalusia
       andalusia1.visible = true;
       // Options:
        food.visible = true;
        places.visible = true;
        language.visible = true;
        speciality.visible = true;
        exitB.visible = false;
        //
        andalusiaM=true;
        gamestate = 2;
     }
  if(mousePressedOver(aragonB) && gamestate === 1)
    {
       homeScreen.visible = false;
       cont.visible = false;
       spain1.visible = false;
       andalusia1.visible = false;
       asturias1.visible = false;
        balearic1.visible = false;
        basque1.visible = false;
        canary1.visible = false;
        cantabria1.visible = false;
        castileLeon1.visible = false;
        castilla1.visible = false;
        catalonia1.visible = false;
        extremadaru1.visible = false;
        galicia1.visible = false;
        laRioja1.visible = false;
        madrid1.visible = false;
        murcia1.visible = false;
        navarre1.visible = false;
        valencia1.visible = false;
        // Show Aragon
       aragon1.visible = true;
       // Options:
      food.visible = true;
      places.visible = true;
      language.visible = true;
      speciality.visible = true;
      exitB.visible = false;

      aragonM=true;
      gamestate = 2;
     }
  if(mousePressedOver(asturiasB) && gamestate === 1)
    {
       homeScreen.visible = false;
       cont.visible = false;
       spain1.visible = false;
       andalusia1.visible = false;
       aragon1.visible = false;
        balearic1.visible = false;
        basque1.visible = false;
        canary1.visible = false;
        cantabria1.visible = false;
        castileLeon1.visible = false;
        castilla1.visible = false;
        catalonia1.visible = false;
        extremadaru1.visible = false;
        galicia1.visible = false;
        laRioja1.visible = false;
        madrid1.visible = false;
        murcia1.visible = false;
        navarre1.visible = false;
        valencia1.visible = false;
        // Show Asturias
        asturias1.visible = true;
        // Options:
       food.visible = true;
       places.visible = true;
       language.visible = true;
       speciality.visible = true;
         exitB.visible = false;
         //
         asturiasM = true;
         gamestate = 2;
      }
  if(mousePressedOver(balearicB) && gamestate === 1)
    {
       homeScreen.visible = false;
       cont.visible = false;
       spain1.visible = false;
       andalusia1.visible = false;
       aragon1.visible = false;
       asturias1.visible = false;
        basque1.visible = false;
        canary1.visible = false;
        cantabria1.visible = false;
        castileLeon1.visible = false;
        castilla1.visible = false;
        catalonia1.visible = false;
        extremadaru1.visible = false;
        galicia1.visible = false;
        laRioja1.visible = false;
        madrid1.visible = false;
        murcia1.visible = false;
        navarre1.visible = false;
        valencia1.visible = false;
        // Show Balearic Islands
       balearic1.visible = true;
       // Options:
       food.visible = true;
        places.visible = true;
        language.visible = true;
        speciality.visible = true;
         exitB.visible = false;
         //
         balearicM = true; 
         gamestate = 2;
     }
  if(mousePressedOver(basqueB) && gamestate === 1)
    {
       homeScreen.visible = false;
       cont.visible = false;
       spain1.visible = false;
       andalusia1.visible = false;
       aragon1.visible = false;
       asturias1.visible = false;
        balearic1.visible = false;
        canary1.visible = false;
        cantabria1.visible = false;
        castileLeon1.visible = false;
        castilla1.visible = false;
        catalonia1.visible = false;
        extremadaru1.visible = false;
        galicia1.visible = false;
        laRioja1.visible = false;
        madrid1.visible = false;
        murcia1.visible = false;
        navarre1.visible = false;
        valencia1.visible = false;
        // Show Basque Country
       basque1.visible = true;
       // Options:
       food.visible = true;
        places.visible = true;
        language.visible = true;
        speciality.visible = true;
         exitB.visible = false;
         //
         basqueM = true;
         gamestate = 2;
     }
  if(mousePressedOver(canaryB) && gamestate === 1)   
    {
       homeScreen.visible = false;
       cont.visible = false;
       spain1.visible = false;
       andalusia1.visible = false;
       aragon1.visible = false;
       asturias1.visible = false;
        balearic1.visible = false;
        basque1.visible = false;
        cantabria1.visible = false;
        castileLeon1.visible = false;
        castilla1.visible = false;
        catalonia1.visible = false;
        extremadaru1.visible = false;
        galicia1.visible = false;
        laRioja1.visible = false;
        madrid1.visible = false;
        murcia1.visible = false;
        navarre1.visible = false;
        valencia1.visible = false;
        // Show Canary Islands
       canary1.visible = true;
       // Options:
       food.visible = true;
        places.visible = true;
        language.visible = true;
        speciality.visible = true;
         exitB.visible = false;
         //
         canaryM = true;
         gamestate = 2;
     }
  if(mousePressedOver(cantabriaB) && gamestate === 1)  
    {
       homeScreen.visible = false;
       cont.visible = false;
       spain1.visible = false;
       andalusia1.visible = false;
       aragon1.visible = false;
       asturias1.visible = false;
        balearic1.visible = false;
        basque1.visible = false;
        canary1.visible = false;
        castilla1.visible = false;
        catalonia1.visible = false;
        extremadaru1.visible = false;
        galicia1.visible = false;
        laRioja1.visible = false;
        madrid1.visible = false;
        murcia1.visible = false;
        navarre1.visible = false;
        valencia1.visible = false;
        // Show Cantabria
       cantabria1.visible = true;
       // Options:
       food.visible = true;
        places.visible = true;
        language.visible = true;
        speciality.visible = true;
         exitB.visible = false;
         //
         cantabriaM = true;
         gamestate = 2;
     }
  if(mousePressedOver(castileLeonB) && gamestate === 1)
    {
       homeScreen.visible = false;
       cont.visible = false;
       spain1.visible = false;
       andalusia1.visible = false;
       aragon1.visible = false;
       asturias1.visible = false;
        balearic1.visible = false;
        basque1.visible = false;
        canary1.visible = false;
        cantabria1.visible = false;
        castilla1.visible = false;
        catalonia1.visible = false;
        extremadaru1.visible = false;
        galicia1.visible = false;
        laRioja1.visible = false;
        madrid1.visible = false;
        murcia1.visible = false;
        navarre1.visible = false;
        valencia1.visible = false;
        // Show Castile and Leon
       castileLeon1.visible = true;
       // Options:
       food.visible = true;
        places.visible = true;
        language.visible = true;
        speciality.visible = true;
        exitB.visible = false;
        //
         castileLeonM = true;
        gamestate = 2;
     }
  if(mousePressedOver(castillaB) && gamestate === 1)
    {
       homeScreen.visible = false;
       cont.visible = false;
       spain1.visible = false;
       andalusia1.visible = false;
       aragon1.visible = false;
       asturias1.visible = false;
        balearic1.visible = false;
        basque1.visible = false;
        canary1.visible = false;
        cantabria1.visible = false;
        castileLeon1.visible = false;
        catalonia1.visible = false;
        extremadaru1.visible = false;
        galicia1.visible = false;
        laRioja1.visible = false;
        madrid1.visible = false;
        murcia1.visible = false;
        navarre1.visible = false;
        valencia1.visible = false;
        // Show Castilla la Mancha
       castilla1.visible = true;
       // Options:
       food.visible = true;
        places.visible = true;
        language.visible = true;
        speciality.visible = true;
         exitB.visible = false;
         //
         castillaM = true;
         gamestate = 2;
     }
  if(mousePressedOver(cataloniaB) && gamestate === 1)
    {
       homeScreen.visible = false;
       cont.visible = false;
       spain1.visible = false;
       andalusia1.visible = false;
       aragon1.visible = false;
       asturias1.visible = false;
        balearic1.visible = false;
        basque1.visible = false;
        canary1.visible = false;
        cantabria1.visible = false;
        castileLeon1.visible = false;
        castilla1.visible = false;
        extremadaru1.visible = false;
        galicia1.visible = false;
        laRioja1.visible = false;
        madrid1.visible = false;
        murcia1.visible = false;
        navarre1.visible = false;
        valencia1.visible = false;
        // Show Catalonia
       catalonia1.visible = true;
       // Options:
       food.visible = true;
        places.visible = true;
        language.visible = true;
        speciality.visible = true;
         exitB.visible = false;
         //
         cataloniaM= true;
         gamestate = 2;
     }
  if(mousePressedOver(extremadaruB) && gamestate === 1)
    {
       homeScreen.visible = false;
       cont.visible = false;
       spain1.visible = false;
       andalusia1.visible = false;
       aragon1.visible = false;
       asturias1.visible = false;
        balearic1.visible = false;
        basque1.visible = false;
        canary1.visible = false;
        cantabria1.visible = false;
        castileLeon1.visible = false;
        castilla1.visible = false;
        catalonia1.visible = false;
        galicia1.visible = false;
        laRioja1.visible = false;
        madrid1.visible = false;
        murcia1.visible = false;
        navarre1.visible = false;
        valencia1.visible = false;
        // Show Extremadura
       extremadaru1.visible = true;
       // Options:
       food.visible = true;
        places.visible = true;
        language.visible = true;
        speciality.visible = true;
         exitB.visible = false;
         //
         extremadaruM = true; 
         gamestate = 2;
     }
  if(mousePressedOver(galiciaB) && gamestate === 1)
    {
       homeScreen.visible = false;
       cont.visible = false;
       spain1.visible = false;
       andalusia1.visible = false;
       aragon1.visible = false;
       asturias1.visible = false;
        balearic1.visible = false;
        basque1.visible = false;
        canary1.visible = false;
        cantabria1.visible = false;
        castileLeon1.visible = false;
        castilla1.visible = false;
        catalonia1.visible = false;
        extremadaru1.visible = false;
        laRioja1.visible = false;
        madrid1.visible = false;
        murcia1.visible = false;
        navarre1.visible = false;
        valencia1.visible = false;
        // Show Galicia
       galicia1.visible = true;
       // Options:
       food.visible = true;
        places.visible = true;
        language.visible = true;
        speciality.visible = true;
        exitB.visible = false;
        //
         galiciaM = true;
        gamestate = 2;
     }
  if(mousePressedOver(laRiojaB) && gamestate === 1)
    {
       homeScreen.visible = false;
       cont.visible = false;
       spain1.visible = false;
       andalusia1.visible = false;
       aragon1.visible = false;
       asturias1.visible = false;
        balearic1.visible = false;
        basque1.visible = false;
        canary1.visible = false;
        cantabria1.visible = false;
        castileLeon1.visible = false;
        castilla1.visible = false;
        catalonia1.visible = false;
        extremadaru1.visible = false;
        galicia1.visible = false;
        madrid1.visible = false;
        murcia1.visible = false;
        navarre1.visible = false;
        valencia1.visible = false;
        // Show La Rioja
       laRioja1.visible = true;
       // Options:
       food.visible = true;
        places.visible = true;
        language.visible = true;
        speciality.visible = true;
         exitB.visible = false;
         //
         laRiojaM = true;
         gamestate = 2;
     }
  if(mousePressedOver(madridB) && gamestate === 1)
    {
       homeScreen.visible = false;
       cont.visible = false;
       spain1.visible = false;
       andalusia1.visible = false;
       aragon1.visible = false;
       asturias1.visible = false;
        balearic1.visible = false;
        basque1.visible = false;
        canary1.visible = false;
        cantabria1.visible = false;
        castileLeon1.visible = false;
        castilla1.visible = false;
        catalonia1.visible = false;
        extremadaru1.visible = false;
        galicia1.visible = false;
        laRioja1.visible = false;
        murcia1.visible = false;
        navarre1.visible = false;
        valencia1.visible = false;
        // Show Madrid
       madrid1.visible = true;
       // Options:
       food.visible = true;
        places.visible = true;
        language.visible = true;
        speciality.visible = true;
         exitB.visible = false;
         //
         madridM = true;
         gamestate = 2;
     }
  if(mousePressedOver(murciaB) && gamestate === 1)
    {
       homeScreen.visible = false;
       cont.visible = false;
       spain1.visible = false;
       andalusia1.visible = false;
       aragon1.visible = false;
       asturias1.visible = false;
        balearic1.visible = false;
        basque1.visible = false;
        canary1.visible = false;
        cantabria1.visible = false;
        castileLeon1.visible = false;
        castilla1.visible = false;
        catalonia1.visible = false;
        extremadaru1.visible = false;
        galicia1.visible = false;
        laRioja1.visible = false;
        madrid1.visible = false;
        navarre1.visible = false;
        valencia1.visible = false;
        // Show Murcia
       murcia1.visible = true;
       // Options:
       food.visible = true;
        places.visible = true;
        language.visible = true;
        speciality.visible = true;
         exitB.visible = false;
         //
         murciaM = true;
         gamestate = 2;
     }
  if(mousePressedOver(navarreB) && gamestate === 1)
    {
       homeScreen.visible = false;
       cont.visible = false;
       spain1.visible = false;
       andalusia1.visible = false;
       aragon1.visible = false;
       asturias1.visible = false;
        balearic1.visible = false;
        basque1.visible = false;
        canary1.visible = false;
        cantabria1.visible = false;
        castileLeon1.visible = false;
        castilla1.visible = false;
        catalonia1.visible = false;
        extremadaru1.visible = false;
        galicia1.visible = false;
        laRioja1.visible = false;
        madrid1.visible = false;
        murcia1.visible = false;
        valencia1.visible = false;
        // Show Navarre
       navarre1.visible = true;
       // Options:
       food.visible = true;
        places.visible = true;
        language.visible = true;
        speciality.visible = true;
         exitB.visible = false;
         //
         navarreM = true;
         gamestate = 2;
     }
  if(mousePressedOver(valenciaB) && gamestate === 1)
    {
       homeScreen.visible = false;
       cont.visible = false;
       spain1.visible = false;
       andalusia1.visible = false;
       aragon1.visible = false;
       asturias1.visible = false;
        balearic1.visible = false;
        basque1.visible = false;
        canary1.visible = false;
        cantabria1.visible = false;
        castileLeon1.visible = false;
        castilla1.visible = false;
        catalonia1.visible = false;
        extremadaru1.visible = false;
        galicia1.visible = false;
        laRioja1.visible = false;
        madrid1.visible = false;
        murcia1.visible = false;
        navarre1.visible = false;
        // Show Valencia
       valencia1.visible = true;
       // Options:
       food.visible = true;
        places.visible = true;
        language.visible = true;
        speciality.visible = true;
         exitB.visible = false;
         //
         valenciaM=true;
         gamestate = 2;
     }
   if(mousePressedOver(exitB) && gamestate === 2)
    {
       gamestate = 1; 
    }
    if(mousePressedOver(food) && gamestate === 2)
      {
         gamestate = 3; 
         mode = 1;
         foodI.visible = true;
         food.x = displayWidth/2 -20;
         food.y = displayHeight/2-300;
         food.scale = 1.2;
         places.visible = false;
         language.visible = false;
         speciality.visible = false;
         exitB.visible = false;
         back.addImage(backF);
      }
    if(mousePressedOver(places) && gamestate === 2)
      {
            gamestate = 3; 
            mode = 2;
            placesI.visible = true;
            food.visible = false;
            places.x = displayWidth/2 -20;
            places.y = displayHeight/2-300;
            places.scale = 1.2;
            language.visible = false;
            speciality.visible = false;
            exitB.visible = false;
            back.addImage(backP);
      }
   if(mousePressedOver(language) && gamestate === 2)
   {
         gamestate = 3; 
         mode = 3;
         languageI.visible = true;
         food.visible = false;
         places.visible = false;
         language.x = displayWidth/2 -20;
         language.y = displayHeight/2-300;
         language.scale = 1.2;
         speciality.visible = false;
         exitB.visible = false;
         back.addImage(backL);
   }
   if(mousePressedOver(speciality) && gamestate === 2)
   {
         gamestate = 3; 
         mode = 4;
         specialityI.visible = true;
         food.visible = false;
         places.visible = false;
         language.visible = false;
         speciality.x = displayWidth/2 -20;
         speciality.y = displayHeight/2-300;
         speciality.scale = 1.2;
         exitB.visible = false;
         back.addImage(backS);
   }

   
      if(gamestate === 3)
      {
         back.visible = true;
         quit.visible = false;
         setTimeout(() => {
            back.x=displayWidth-340;
        }, 200)
      }
      if(mousePressedOver(back) && gamestate === 3)
      {
         gamestate = 1;
      }
      if(mousePressedOver(quizB) && gamestate === 1)
      {
         gamestate = 4;
         foodI.visible = false;
         placesI.visible = false;
         languageI.visible = false;
         specialityI.visible = false;  
         //
         speciality.visible = false;
         food.visible = false;
         places.visible = false;
         language.visible = false;
         //
         back.visible = false;
         quizB.visible = false;
         //
         ques = 1;
         randomPos = Math.round(random(1,24));
         console.log("randomPos="+randomPos);  
         randomPosGen();
      }
      if(gamestate === 4)
      {
         home.visible = false;
         quit.visible = true;
         quit.x = displayWidth/2 -300;
         wrong1.addImage(optionF);
         wrong2.addImage(optionF);
         wrong3.addImage(optionF);
         correct.addImage(optionF);
         wrong1.visible = true;
         wrong2.visible = true;
         wrong3.visible = true;
         correct.visible = true;
         questionText = true;
         foodQ2.visible = true;
         next.visible = false;
         next.x=displayWidth+340;
         select = 0;
        
         
         if(ques === 1)
         {
            questionText = "1. ¿Qué comida es típica de Andalucía?";
            option1 = "La paella";
            option2 = "La pizza";
            option3 = "El sushi";
            optionC = "El gazpacho";
         }
         if(ques === 2)
         {
            questionText = "2. ¿Dónde se habla gallego?";
            option1 = "En Madrid";
            option2 = "En Murcia";
            option3 = "En Valencia";
            optionC = "En Galicia";
         }
         if(ques === 3)
         {
            questionText = "3. ¿Qué lengua también se habla en Valencia?";
            option1 = "Euskera";
            option2 = "Catalán";
            option3 = "Francés";
            optionC = "Valenciano";
         }
         if(ques === 4)
         {
            questionText = "4. ¿Qué región es volcánica?";
            option1 = "Valencia";
            option2 = "La Rioja";
            option3 = "Navarra";
            optionC = "Las Islas\n"+"Canarias";
           
         }                    
         if(ques === 5)
         {
            questionText = "5. ¿Qué región es el centro de España?";
            option1 = "Murcia";
            option2 = "Aragón";
            option3 = "Galicia";
            optionC = "Madrid";
         }

         if(ques === 6)
         {
            questionText = "6. ¿Dónde es muy importante el turismo?";
            option1 = "Madrid";
            option2 = "Navarra";
            option3 = "Asturias";
            optionC = "Las Islas\n"+"Baleares";
         }

         if(ques === 7)
         {
            questionText = "7. ¿Qué región es verde y rural?";
            option1 = "Madrid";
            option2 = "Valencia";
            option3 = "Murcia";
            optionC = "Galicia";
         }

         if(ques === 8)
         {
            questionText = "8. ¿Dónde se habla euskera?";
            option1 = "Murcia";
            option2 = "Valencia";
            option3 = "La Rioja";
            optionC = "Navarra";
         }

         if(ques === 9)
         {
            questionText = "9. ¿Qué región tiene clima seco?";
            option1 = "Asturias";
            option2 = "Galicia";
            option3 = "Cantabria";
            optionC = "Murcia";
         }

         if(ques === 10)
         {
            questionText = "10. ¿Qué comida es típica de Valencia?";
            option1 = "Gazpacho";
            option2 = "Tortilla";
            option3 = "Pizza";
            optionC = "Paella";
         }

         if(ques === 11)
         {
            questionText = "11. ¿Qué región es mediterránea?";
            option1 = "Galicia";
            option2 = "Navarra";
            option3 = "Asturias";
            optionC = "Valencia";
         }

         if(ques === 12)
         {
            questionText = "12. ¿Dónde es fuerte la cultura vasca?";
            option1 = "Madrid";
            option2 = "Murcia";
            option3 = "La Rioja";
            optionC = "País Vasco";
         }

         if(ques === 13)
         {
            questionText = "13. ¿Qué región es moderna y diversa?";
            option1 = "Murcia";
            option2 = "Navarra";
            option3 = "Galicia";
            optionC = "Madrid";
         }

         if(ques === 14)
         {
            questionText = "14. ¿Qué lengua es oficial en Galicia?";
            option1 = "Valenciano";
            option2 = "Euskera";
            option3 = "Francés";
            optionC = "Gallego";
         }

         if(ques === 15)
         {
            questionText = "15. ¿Qué región es tranquila y tradicional?";
            option1 = "Madrid";
            option2 = "Valencia";
            option3 = "Canarias";
            optionC = "La Rioja";
         }
         /*if(select == 0)
         {
         if(mode === 1)
         {
            foodQ2.visible = true;
            wrong1.addImage(optionF);
            wrong2.addImage(optionF);
            wrong3.addImage(optionF);
            correct.addImage(optionF);
           
         }
         if(mode === 2)
         {
            placesQ2.visible = true;
            wrong1.addImage(optionP);
            wrong2.addImage(optionP);
            wrong3.addImage(optionP);
            correct.addImage(optionP);
         }
         if(mode === 3)
         {
            languageQ2.visible = true;
            wrong1.addImage(optionL);
            wrong2.addImage(optionL);
            wrong3.addImage(optionL);
            correct.addImage(optionL);
         }
         if(mode === 4)
         {
            specialityQ2.visible = true;
            wrong1.addImage(optionS);
            wrong2.addImage(optionS);
            wrong3.addImage(optionS);
            correct.addImage(optionS);
         }
         }*/

         if(mousePressedOver(correct))
            {
               select=1;
               //console.log("select="+select);
               ans++;
            }
            if(mousePressedOver(wrong1))
            {
               select=2;
               //console.log("select="+select);
            }
            if(mousePressedOver(wrong2))
            {
               select=3;
               //console.log("select="+select);
            }
            if(mousePressedOver(wrong3))
            {
               select=4;
               //console.log("select="+select);
            }
            
            if(select == 1)
            {
               correct.addImage(correctSel);
               gamestate = 5;
               ques = ques + 1;
               //console.log(ques);   
            }
            else if(select == 2)
            {
               wrong1.addImage(wrongSel);
               correct.addImage(correctSel);
               gamestate = 5;
               ques = ques + 1;
               //console.log(ques);
            }
            else if(select == 3)
            {
               wrong2.addImage(wrongSel);
               correct.addImage(correctSel);
               gamestate = 5;
               ques = ques + 1;
               //console.log(ques);
            }
            else if(select == 4)
            {
               wrong3.addImage(wrongSel);
               correct.addImage(correctSel);
               gamestate = 5;
               ques = ques + 1;
               //console.log(ques);
            }

      }
      if(mousePressedOver(quit) && (gamestate === 4 || gamestate ===5 || gamestate ===2))
      {
         gamestate = 1;
      }
      if(gamestate ===5)
      {
         next.visible = true;
         setTimeout(() => {
            next.x=displayWidth-340;
        }, 100)

      }
      if(mousePressedOver(next) && gamestate ===5)
      {
         randomPos = Math.round(random(1,24));
         /*wrong1.visible = false;
         wrong2.visible = false;
         wrong3.visible = false;
         correct.visible = false;*/

         console.log(randomPos);
         if(ques <= 15)
            {
               gamestate = 7;
            }
         else if (ques > 15)
            {
               gamestate = 6;
            }
      
      }
      if(gamestate ===7)
      {
         setTimeout(() => {
            randomPosGen();
            gamestate =4;
         }, 100)
      }
      if(gamestate ===6)
      {
         end.visible = true;
         wrong1.visible = false;
         wrong2.visible = false;
         wrong3.visible = false;
         correct.visible = false;
         //number.visible = false;
         quit.visible = false;
         next.visible = false;
         foodQ2.visible = false;
         /*placesQ2.visible = false;
         languageQ2.visible = false;
         specialityQ2.visible = false;*/
         done.x = displayWidth/2;
         done.visible = true;
         if(ans === 0)
         {
            end.addImage(star0);
         }
         if(ans>4 && ans <10)
         {
            end.addImage(star1);
         }
         if(ans>9 && ans <14)
         {
            end.addImage(star2);
         }
         if(ans === 15)
         {
            end.addImage(star3);
         }
         //
         if(mousePressedOver(done))
         {
            gamestate = 1;
         }
      }
  drawSprites();
  if(gamestate ===4 || gamestate ===5)
  {
     fill("black");
     textSize(22);
     textFont("Cooper");
     text(option1, wrong1.x-50,wrong1.y-17, 660, 220);
     text(option2, wrong2.x-50,wrong2.y-17, 660, 220);
     text(option3, wrong3.x-50,wrong3.y-17, 660, 220);
     text(optionC, correct.x-50,correct.y-17, 660, 220);
     textSize(25);
     text(questionText, displayWidth/2-300,100, 1000, 220);
     
  } 
  if(gamestate === 1)
  {
      fill("black");   
      textSize(20);
      textFont("cooper");
      text("Click on the name\n"+ "of a region to learn\n"+"more about it!", displayWidth/2-430,displayHeight/2-100, 500, 220);

  }
if(gamestate === 2)
  {
      fill("black");   
      textSize(20);
      textFont("cooper");
      text("Click on 'QUIT' to\n"+ "select another\n"+"region!", displayWidth/2-430,displayHeight/2-100, 500, 220);
  }
  if(gamestate===3)
   {
      if(mode === 1)
      {
         if(andalusiaM)
         {
            infoText.visible = true;
            infoText="1. ESP: En Andalucía es típico el gazpacho.\n"+
         "   ENG: Gazpacho is typical in Andalusia.\n"+
         "2. ESP: Se come mucho pescado frito.\n"+
         "   ENG: People eat a lot of fried fish.\n"+
         "3. ESP: El aceite de oliva es muy importante.\n"+
         "   ENG: Olive oil is very important.\n"+
         "4. ESP: El jamón es popular.\n"+
         "   ENG: Ham is popular.\n"+
         "5. ESP: La comida es mediterránea.\n"+
         "   ENG: The food is Mediterranean.\n\n"+
         "        Summary:\n"+
         "⦿ gazpacho\n"+
         "⦿ pescado frito\n"+
         "⦿ aceite de oliva\n"+
         "⦿ jamón\n"+
         "⦿ dieta mediterránea";

         }
         else if(aragonM)
         {
            infoText="1. ESP: En Aragón se come mucha carne.\n"+
         "   ENG: In Aragon people eat a lot of meat.\n"+
         "2. ESP: El cordero es típico.\n"+
         "   ENG: Lamb is typical.\n"+
         "3. ESP: La comida es tradicional.\n"+
         "   ENG: The food is traditional.\n"+
         "4. ESP: Se usan productos locales.\n"+
         "   ENG: Local products are used.\n"+
         "5. ESP: Los platos son sencillos.\n"+
         "   ENG: The dishes are simple.\n\n"+
         "        Summary:\n"+
         "⦿ carne\n"+
         "⦿ cordero\n"+
         "⦿ tradicional\n"+
         "⦿ local";

         }  
         else if(asturiasM)
         {
            infoText="1. ESP: La fabada asturiana es típica.\n"+
         "   ENG: Asturian fabada is typical.\n"+
         "2. ESP: El queso es muy popular.\n"+
         "   ENG: Cheese is very popular.\n"+
         "3. ESP: La sidra es una bebida tradicional.\n"+
         "   ENG: Cider is a traditional drink.\n"+
         "4. ESP: Se come comida fuerte.\n"+
         "   ENG: People eat hearty food.\n"+
         "5. ESP: Hay productos locales.\n"+
         "   ENG: There are local products.\n\n"+
         "        Summary:\n"+
         "⦿ fabada\n"+
         "⦿ queso\n"+
         "⦿ sidra\n"+
         "⦿ comida fuerte\n"+
         "⦿ productos locales";

         }
         else if(balearicM)
         {
            infoText="1. ESP: En las Baleares se come mucho pescado.\n"+
         "   ENG: In the Balearic Islands people eat a lot of fish.\n"+
         "2. ESP: La ensaimada es típica.\n"+
         "   ENG: Ensaimada is typical.\n"+
         "3. ESP: La comida es mediterránea.\n"+
         "   ENG: The food is Mediterranean.\n"+
         "4. ESP: Se usan productos frescos.\n"+
         "   ENG: Fresh products are used.\n"+
         "5. ESP: La comida es ligera.\n"+
         "   ENG: The food is light.\n\n"+
         "        Summary:\n"+
         "⦿ pescado\n"+
         "⦿ ensaimada\n"+
         "⦿ comida mediterránea\n"+
         "⦿ productos frescos\n"+
         "⦿ comida ligera";

         }
         else if(basqueM)
         {
            infoText="1. ESP: En el País Vasco se come bien.\n"+
         "   ENG: In the Basque Country people eat well.\n"+
         "2. ESP: Los pintxos son muy populares.\n"+
         "   ENG: Pintxos are very popular.\n"+
         "3. ESP: Se come mucho pescado.\n"+
         "   ENG: People eat a lot of fish.\n"+
         "4. ESP: La comida es de alta calidad.\n"+
         "   ENG: The food is high quality.\n"+
         "5. ESP: La gastronomía es famosa.\n"+
         "   ENG: The gastronomy is famous.\n\n"+
         "        Summary:\n"+
         "⦿ pintxos\n"+
         "⦿ pescado\n"+
         "⦿ gastronomía\n"+
         "⦿ alta calidad\n"+
         "⦿ comida famosa";

         }
         else if(canaryM)
         {
            infoText="1. ESP: Las papas arrugadas son típicas.\n"+
         "   ENG: Wrinkled potatoes are typical.\n"+
         "2. ESP: Se come mucho pescado.\n"+
         "   ENG: People eat a lot of fish.\n"+
         "3. ESP: Las salsas son populares.\n"+
         "   ENG: Sauces are popular.\n"+
         "4. ESP: La comida es sencilla.\n"+
         "   ENG: The food is simple.\n"+
         "5. ESP: Se usan productos locales.\n"+
         "   ENG: Local products are used.\n\n"+
         "        Summary:\n"+
         "⦿ papas arrugadas\n"+
         "⦿ pescado\n"+
         "⦿ salsas\n"+
         "⦿ comida sencilla\n"+
         "⦿ productos locales";

         }
         else if(cantabriaM)
         {
            infoText="1. ESP: En Cantabria se come mucho pescado.\n"+
         "   ENG: In Cantabria people eat a lot of fish.\n"+
         "2. ESP: El marisco es muy popular.\n"+
         "   ENG: Seafood is very popular.\n"+
         "3. ESP: Se usan productos del mar.\n"+
         "   ENG: Products from the sea are used.\n"+
         "4. ESP: El queso es típico.\n"+
         "   ENG: Cheese is typical.\n"+
         "5. ESP: La comida es fresca.\n"+
         "   ENG: The food is fresh.\n\n"+
         "        Summary:\n"+
         "⦿ pescado\n"+
         "⦿ marisco\n"+
         "⦿ productos del mar\n"+
         "⦿ queso\n"+
         "⦿ comida fresca";

         }
         else if(castileLeonM)
         {
            infoText="1. ESP: En Castilla y León se come mucha carne.\n"+
         "   ENG: In Castile and León people eat a lot of meat.\n"+
         "2. ESP: El lechazo es típico.\n"+
         "   ENG: Roast lamb is typical.\n"+
         "3. ESP: El jamón es muy famoso.\n"+
         "   ENG: Ham is very famous.\n"+
         "4. ESP: La comida es tradicional.\n"+
         "   ENG: The food is traditional.\n"+
         "5. ESP: Se comen platos fuertes.\n"+
         "   ENG: People eat hearty dishes.\n\n"+
         "        Summary:\n"+
         "⦿ carne\n"+
         "⦿ lechazo\n"+
         "⦿ jamón\n"+
         "⦿ comida tradicional\n"+
         "⦿ platos fuertes";

         }
         else if(castillaM)
         {
            infoText="1. ESP: El queso manchego es típico.\n"+
         "   ENG: Manchego cheese is typical.\n"+
         "2. ESP: Se come comida simple.\n"+
         "   ENG: People eat simple food.\n"+
         "3. ESP: El aceite de oliva es importante.\n"+
         "   ENG: Olive oil is important.\n"+
         "4. ESP: Hay platos tradicionales.\n"+
         "   ENG: There are traditional dishes.\n"+
         "5. ESP: La comida es rural.\n"+
         "   ENG: The food is rural.\n\n"+
         "        Summary:\n"+
         "⦿ queso manchego\n"+
         "⦿ comida simple\n"+
         "⦿ aceite de oliva\n"+
         "⦿ platos tradicionales\n"+
         "⦿ comida rural";

         }
         else if(cataloniaM)
         {
            infoText="1. ESP: En Cataluña se come pan con tomate.\n"+
         "   ENG: In Catalonia people eat bread with tomato.\n"+
         "2. ESP: La comida es mediterránea.\n"+
         "   ENG: The food is Mediterranean.\n"+
         "3. ESP: Se usan verduras y pescado.\n"+
         "   ENG: Vegetables and fish are used.\n"+
         "4. ESP: La comida es variada.\n"+
         "   ENG: The food is varied.\n"+
         "5. ESP: Hay platos tradicionales.\n"+
         "   ENG: There are traditional dishes.\n\n"+
         "        Summary:\n"+
         "⦿ pan con tomate\n"+
         "⦿ comida mediterránea\n"+
         "⦿ verduras\n"+
         "⦿ pescado\n"+
         "⦿ comida variada";

         }
         else if(extremadaruM)
         {
            infoText="1. ESP: En Extremadura se come mucho jamón.\n"+
         "   ENG: In Extremadura people eat a lot of ham.\n"+
         "2. ESP: El cerdo es muy importante.\n"+
         "   ENG: Pork is very important.\n"+
         "3. ESP: La comida es tradicional.\n"+
         "   ENG: The food is traditional.\n"+
         "4. ESP: Se usan productos locales.\n"+
         "   ENG: Local products are used.\n"+
         "5. ESP: Los platos son sencillos.\n"+
         "   ENG: The dishes are simple.\n\n"+
         "        Summary:\n"+
         "⦿ jamón\n"+
         "⦿ cerdo\n"+
         "⦿ comida tradicional\n"+
         "⦿ productos locales\n"+
         "⦿ platos sencillos";

         }
         else if(galiciaM)
         {
           infoText="1. ESP: En Galicia se come mucho pescado.\n"+
         "   ENG: In Galicia people eat a lot of fish.\n"+
         "2. ESP: El marisco es muy famoso.\n"+
         "   ENG: Seafood is very famous.\n"+
         "3. ESP: La comida es tradicional.\n"+
         "   ENG: The food is traditional.\n"+
         "4. ESP: Se usan productos del mar.\n"+
         "   ENG: Products from the sea are used.\n"+
         "5. ESP: La comida es fresca.\n"+
         "   ENG: The food is fresh.\n\n"+
         "        Summary:\n"+
         "⦿ pescado\n"+
         "⦿ marisco\n"+
         "⦿ tradicional\n"+
         "⦿ fresca";
 
         }
         else if(laRiojaM)
         {
            infoText="1. ESP: En La Rioja se come carne.\n"+
         "   ENG: In La Rioja people eat meat.\n"+
         "2. ESP: La comida es tradicional.\n"+
         "   ENG: The food is traditional.\n"+
         "3. ESP: Se usan productos locales.\n"+
         "   ENG: Local products are used.\n"+
         "4. ESP: Los platos son simples.\n"+
         "   ENG: The dishes are simple.\n"+
         "5. ESP: La comida es casera.\n"+
         "   ENG: The food is homemade.\n\n"+
         "        Summary:\n"+
         "⦿ carne\n"+
         "⦿ tradicional\n"+
         "⦿ local\n"+
         "⦿ casera";

         }
         else if(madridM)
         {
            infoText="1. ESP: En Madrid hay comida variada.\n"+
         "   ENG: In Madrid there is varied food.\n"+
         "2. ESP: Se comen platos de toda España.\n"+
         "   ENG: Dishes from all over Spain are eaten.\n"+
         "3. ESP: Hay restaurantes tradicionales.\n"+
         "   ENG: There are traditional restaurants.\n"+
         "4. ESP: También hay comida moderna.\n"+
         "   ENG: There is also modern food.\n"+
         "5. ESP: La comida es diversa.\n"+
         "   ENG: The food is diverse.\n\n"+
         "        Summary:\n"+
         "⦿ variada\n"+
         "⦿ tradicional\n"+
         "⦿ moderna\n"+
         "⦿ diversa";

         }
         else if(murciaM)
         {
            infoText="1. ESP: En Murcia se comen verduras.\n"+
         "   ENG: In Murcia people eat vegetables.\n"+
         "2. ESP: La comida es mediterránea.\n"+
         "   ENG: The food is Mediterranean.\n"+
         "3. ESP: Se usan productos frescos.\n"+
         "   ENG: Fresh products are used.\n"+
         "4. ESP: El arroz es importante.\n"+
         "   ENG: Rice is important.\n"+
         "5. ESP: La comida es ligera.\n"+
         "   ENG: The food is light.\n\n"+
         "        Summary:\n"+
         "⦿ verduras\n"+
         "⦿ mediterránea\n"+
         "⦿ fresca\n"+
         "⦿ ligera";

         }
         else if(navarreM)
         {
            infoText="1. ESP: En Navarra se come carne.\n"+
         "   ENG: In Navarra people eat meat.\n"+
         "2. ESP: Se usan productos locales.\n"+
         "   ENG: Local products are used.\n"+
         "3. ESP: La comida es tradicional.\n"+
         "   ENG: The food is traditional.\n"+
         "4. ESP: Hay platos sencillos.\n"+
         "   ENG: There are simple dishes.\n"+
         "5. ESP: La comida es de calidad.\n"+
         "   ENG: The food is good quality.\n\n"+
         "        Summary:\n"+
         "⦿ carne\n"+
         "⦿ local\n"+
         "⦿ tradicional\n"+
         "⦿ sencilla";

         }
         else if(valenciaM)
         {
            infoText="1. ESP: En Valencia se come paella.\n"+
         "   ENG: In Valencia people eat paella.\n"+
         "2. ESP: El arroz es muy importante.\n"+
         "   ENG: Rice is very important.\n"+
         "3. ESP: La comida es mediterránea.\n"+
         "   ENG: The food is Mediterranean.\n"+
         "4. ESP: Se usan verduras y pescado.\n"+
         "   ENG: Vegetables and fish are used.\n"+
         "5. ESP: La comida es variada.\n"+
         "   ENG: The food is varied.\n\n"+
         "        Summary:\n"+
         "⦿ paella\n"+
         "⦿ arroz\n"+
         "⦿ mediterránea\n"+
         "⦿ variada";

         }
      }
      else if (mode === 2)
      {
         if(andalusiaM)
         {
            infoText.visible = true;
            infoText="1. ESP: Sevilla es la capital de Andalucía.\n"+
         "   ENG: Seville is the capital of Andalusia.\n"+
         "2. ESP: La Alhambra está en Granada.\n"+
         "   ENG: The Alhambra is in Granada.\n"+
         "3. ESP: Málaga tiene playas bonitas.\n"+
         "   ENG: Málaga has beautiful beaches.\n"+
         "4. ESP: Córdoba tiene una mezquita famosa.\n"+
         "   ENG: Córdoba has a famous mosque.\n"+
         "5. ESP: Hace buen tiempo en Andalucía.\n"+
         "   ENG: The weather is good in Andalusia.\n\n"+
         "        Summary:\n"+
         "⦿ Sevilla\n"+
         "⦿ Granada\n"+
         "⦿ playas\n"+
         "⦿ monumentos\n"+
         "⦿ buen tiempo";
            
         }
         else if(aragonM)
         {
            infoText="1. ESP: Zaragoza es la capital de Aragón.\n"+
         "   ENG: Zaragoza is the capital of Aragon.\n"+
         "2. ESP: El río Ebro pasa por Zaragoza.\n"+
         "   ENG: The Ebro River goes through Zaragoza.\n"+
         "3. ESP: Los Pirineos están en el norte.\n"+
         "   ENG: The Pyrenees are in the north.\n"+
         "4. ESP: Hay montañas y naturaleza.\n"+
         "   ENG: There are mountains and nature.\n"+
         "5. ESP: Hay pueblos pequeños.\n"+
         "   ENG: There are small towns.\n\n"+
         "        Summary:\n"+
         "⦿ Zaragoza\n"+
         "⦿ río Ebro\n"+
         "⦿ Pirineos\n"+
         "⦿ montañas\n"+
         "⦿ pueblos";


         }  
         else if(asturiasM)
         {
            infoText="1. ESP: Asturias está en el norte de España.\n"+
         "   ENG: Asturias is in the north of Spain.\n"+
         "2. ESP: Hay montañas y mar.\n"+
         "   ENG: There are mountains and sea.\n"+
         "3. ESP: Oviedo es la capital.\n"+
         "   ENG: Oviedo is the capital.\n"+
         "4. ESP: Hay naturaleza verde.\n"+
         "   ENG: There is green nature.\n"+
         "5. ESP: Es una región natural.\n"+
         "   ENG: It is a natural region.\n\n"+
         "        Summary:\n"+
         "⦿ norte\n"+
         "⦿ montañas\n"+
         "⦿ mar\n"+
         "⦿ Oviedo\n"+
         "⦿ naturaleza";

         }
         else if(balearicM)
         {
            infoText="1. ESP: Las Baleares son islas.\n"+
         "   ENG: The Balearic Islands are islands.\n"+
         "2. ESP: Mallorca es muy famosa.\n"+
         "   ENG: Mallorca is very famous.\n"+
         "3. ESP: Hay muchas playas.\n"+
         "   ENG: There are many beaches.\n"+
         "4. ESP: Es un destino turístico.\n"+
         "   ENG: It is a tourist destination.\n"+
         "5. ESP: El mar es importante.\n"+
         "   ENG: The sea is important.\n\n"+
         "        Summary:\n"+
         "⦿ islas\n"+
         "⦿ Mallorca\n"+
         "⦿ playas\n"+
         "⦿ turismo\n"+
         "⦿ mar";

         }
         else if(basqueM)
         {
            infoText="1. ESP: El País Vasco está en el norte.\n"+
         "   ENG: The Basque Country is in the north.\n"+
         "2. ESP: Bilbao es una ciudad importante.\n"+
         "   ENG: Bilbao is an important city.\n"+
         "3. ESP: Hay montañas y costa.\n"+
         "   ENG: There are mountains and coast.\n"+
         "4. ESP: Es una región moderna.\n"+
         "   ENG: It is a modern region.\n"+
         "5. ESP: Tiene ciudades y pueblos.\n"+
         "   ENG: It has cities and towns.\n\n"+
         "        Summary:\n"+
         "⦿ norte\n"+
         "⦿ Bilbao\n"+
         "⦿ costa\n"+
         "⦿ montañas\n"+
         "⦿ ciudades";

         }
         else if(canaryM)
         {
            infoText="1. ESP: Las Canarias son islas.\n"+
         "   ENG: The Canary Islands are islands.\n"+
         "2. ESP: Están en el océano Atlántico.\n"+
         "   ENG: They are in the Atlantic Ocean.\n"+
         "3. ESP: Hay volcanes.\n"+
         "   ENG: There are volcanoes.\n"+
         "4. ESP: Tenerife es muy famosa.\n"+
         "   ENG: Tenerife is very famous.\n"+
         "5. ESP: Hace buen tiempo.\n"+
         "   ENG: The weather is good.\n\n"+
         "        Summary:\n"+
         "⦿ islas\n"+
         "⦿ Atlántico\n"+
         "⦿ volcanes\n"+
         "⦿ Tenerife\n"+
         "⦿ buen tiempo";

         }
         else if(cantabriaM)
         {
            infoText="1. ESP: Santander es la capital.\n"+
         "   ENG: Santander is the capital.\n"+
         "2. ESP: Cantabria está en el norte de España.\n"+
         "   ENG: Cantabria is in the north of Spain.\n"+
         "3. ESP: Hay muchas playas.\n"+
         "   ENG: There are many beaches.\n"+
         "4. ESP: Hay montañas verdes.\n"+
         "   ENG: There are green mountains.\n"+
         "5. ESP: La naturaleza es importante.\n"+
         "   ENG: Nature is important.\n\n"+
         "        Summary:\n"+
         "⦿ Santander\n"+
         "⦿ norte\n"+
         "⦿ playas\n"+
         "⦿ montañas\n"+
         "⦿ naturaleza";

         }
         else if(castileLeonM)
         {
            infoText="1. ESP: Valladolid es una ciudad importante.\n"+
         "   ENG: Valladolid is an important city.\n"+
         "2. ESP: Salamanca es famosa por su universidad.\n"+
         "   ENG: Salamanca is famous for its university.\n"+
         "3. ESP: La región es muy grande.\n"+
         "   ENG: The region is very large.\n"+
         "4. ESP: Hay muchas ciudades históricas.\n"+
         "   ENG: There are many historic cities.\n"+
         "5. ESP: Está en el centro-norte.\n"+
         "   ENG: It is in the central-north area.\n\n"+
         "        Summary:\n"+
         "⦿ Valladolid\n"+
         "⦿ Salamanca\n"+
         "⦿ grande\n"+
         "⦿ histórica";

         }
         else if(castillaM)
         {
            infoText="1. ESP: Toledo es una ciudad muy famosa.\n"+
         "   ENG: Toledo is a very famous city.\n"+
         "2. ESP: La región es muy grande.\n"+
         "   ENG: The region is very large.\n"+
         "3. ESP: Hay muchos pueblos.\n"+
         "   ENG: There are many towns.\n"+
         "4. ESP: El paisaje es seco.\n"+
         "   ENG: The landscape is dry.\n"+
         "5. ESP: Está en el centro de España.\n"+
         "   ENG: It is in the center of Spain.\n\n"+
         "        Summary:\n"+
         "⦿ Toledo\n"+
         "⦿ centro\n"+
         "⦿ pueblos\n"+
         "⦿ paisaje seco";

         }
         else if(cataloniaM)
         {
            infoText="1. ESP: Barcelona es la capital.\n"+
         "   ENG: Barcelona is the capital.\n"+
         "2. ESP: Hay playas y montañas.\n"+
         "   ENG: There are beaches and mountains.\n"+
         "3. ESP: La Sagrada Familia es famosa.\n"+
         "   ENG: The Sagrada Familia is famous.\n"+
         "4. ESP: Es una región moderna.\n"+
         "   ENG: It is a modern region.\n"+
         "5. ESP: Está en el noreste de España.\n"+
         "   ENG: It is in the northeast of Spain.\n\n"+
         "        Summary:\n"+
         "⦿ Barcelona\n"+
         "⦿ playas\n"+
         "⦿ Sagrada Familia\n"+
         "⦿ moderna";

         }
         else if(extremadaruM)
         {
            infoText="1. ESP: Mérida es una ciudad histórica.\n"+
         "   ENG: Mérida is a historic city.\n"+
         "2. ESP: Hay ruinas romanas.\n"+
         "   ENG: There are Roman ruins.\n"+
         "3. ESP: La región es rural.\n"+
         "   ENG: The region is rural.\n"+
         "4. ESP: Hay mucha naturaleza.\n"+
         "   ENG: There is a lot of nature.\n"+
         "5. ESP: Está en el oeste de España.\n"+
         "   ENG: It is in the west of Spain.\n\n"+
         "        Summary:\n"+
         "⦿ Mérida\n"+
         "⦿ ruinas romanas\n"+
         "⦿ rural\n"+
         "⦿ naturaleza";

         }
         else if(galiciaM)
         {
           infoText="1. ESP: Galicia está en el noroeste de España.\n"+
         "   ENG: Galicia is in the northwest of Spain.\n"+
         "2. ESP: Santiago de Compostela es muy famosa.\n"+
         "   ENG: Santiago de Compostela is very famous.\n"+
         "3. ESP: Hay costa y playas.\n"+
         "   ENG: There is coast and beaches.\n"+
         "4. ESP: La región es muy verde.\n"+
         "   ENG: The region is very green.\n"+
         "5. ESP: Hay mucha naturaleza.\n"+
         "   ENG: There is a lot of nature.\n\n"+
         "        Summary:\n"+
         "⦿ noroeste\n"+
         "⦿ Santiago\n"+
         "⦿ costa\n"+
         "⦿ verde\n"+
         "⦿ naturaleza";
 
         }
         else if(laRiojaM)
         {
            infoText="1. ESP: La Rioja está en el norte de España.\n"+
         "   ENG: La Rioja is in the north of Spain.\n"+
         "2. ESP: Logroño es la capital.\n"+
         "   ENG: Logroño is the capital.\n"+
         "3. ESP: Es una región pequeña.\n"+
         "   ENG: It is a small region.\n"+
         "4. ESP: Hay paisajes rurales.\n"+
         "   ENG: There are rural landscapes.\n"+
         "5. ESP: Hay muchos pueblos.\n"+
         "   ENG: There are many towns.\n\n"+
         "        Summary:\n"+
         "⦿ norte\n"+
         "⦿ Logroño\n"+
         "⦿ pequeña\n"+
         "⦿ rural\n"+
         "⦿ pueblos";

         }
         else if(madridM)
         {
            infoText="1. ESP: Madrid es la capital de España.\n"+
         "   ENG: Madrid is the capital of Spain.\n"+
         "2. ESP: Es una ciudad muy grande.\n"+
         "   ENG: It is a very big city.\n"+
         "3. ESP: Hay muchos museos.\n"+
         "   ENG: There are many museums.\n"+
         "4. ESP: Es el centro del país.\n"+
         "   ENG: It is the center of the country.\n"+
         "5. ESP: Hay muchos monumentos.\n"+
         "   ENG: There are many monuments.\n\n"+
         "        Summary:\n"+
         "⦿ capital\n"+
         "⦿ grande\n"+
         "⦿ museos\n"+
         "⦿ centro\n"+
         "⦿ monumentos";

         }
         else if(murciaM)
         {
            infoText="1. ESP: Murcia está en el sureste de España.\n"+
         "   ENG: Murcia is in the southeast of Spain.\n"+
         "2. ESP: Murcia es la capital.\n"+
         "   ENG: Murcia is the capital.\n"+
         "3. ESP: Hay costa y playas.\n"+
         "   ENG: There is coast and beaches.\n"+
         "4. ESP: El clima es seco.\n"+
         "   ENG: The climate is dry.\n"+
         "5. ESP: Hay zonas rurales.\n"+
         "   ENG: There are rural areas.\n\n"+
         "        Summary:\n"+
         "⦿ sureste\n"+
         "⦿ Murcia\n"+
         "⦿ costa\n"+
         "⦿ clima seco\n"+
         "⦿ rural";

         }
         else if(navarreM)
         {
            infoText="1. ESP: Navarra está en el norte de España.\n"+
         "   ENG: Navarra is in the north of Spain.\n"+
         "2. ESP: Pamplona es la capital.\n"+
         "   ENG: Pamplona is the capital.\n"+
         "3. ESP: Hay montañas.\n"+
         "   ENG: There are mountains.\n"+
         "4. ESP: La región tiene naturaleza.\n"+
         "   ENG: The region has nature.\n"+
         "5. ESP: Hay pueblos pequeños.\n"+
         "   ENG: There are small towns.\n\n"+
         "        Summary:\n"+
         "⦿ norte\n"+
         "⦿ Pamplona\n"+
         "⦿ montañas\n"+
         "⦿ naturaleza\n"+
         "⦿ pueblos";

         }
         else if(valenciaM)
         {
            infoText="1. ESP: Valencia está en la costa este.\n"+
         "   ENG: Valencia is on the east coast.\n"+
         "2. ESP: Valencia es una ciudad grande.\n"+
         "   ENG: Valencia is a big city.\n"+
         "3. ESP: Hay playas bonitas.\n"+
         "   ENG: There are beautiful beaches.\n"+
         "4. ESP: El clima es bueno.\n"+
         "   ENG: The climate is good.\n"+
         "5. ESP: Es una región mediterránea.\n"+
         "   ENG: It is a Mediterranean region.\n\n"+
         "        Summary:\n"+
         "⦿ costa este\n"+
         "⦿ ciudad grande\n"+
         "⦿ playas\n"+
         "⦿ clima\n"+
         "⦿ mediterránea";

         }
      }
      else if(mode === 3)
      {
         if(andalusiaM)
         {
            infoText.visible = true;
            infoText="1. ESP: En Andalucía se habla español.\n"+
         "   ENG: Spanish is spoken in Andalusia.\n"+
         "2. ESP: El acento andaluz es fuerte.\n"+
         "   ENG: The Andalusian accent is strong.\n"+
         "3. ESP: Las personas hablan rápido.\n"+
         "   ENG: People speak fast.\n"+
         "4. ESP: Algunas letras no se pronuncian.\n"+
         "   ENG: Some letters are not pronounced.\n"+
         "5. ESP: Es un acento muy conocido.\n"+
         "   ENG: It is a very well-known accent.\n\n"+
         "        Summary:\n"+
         "⦿ español\n"+
         "⦿ acento andaluz\n"+
         "⦿ rápido\n"+
         "⦿ conocido";
         }
         else if(aragonM)
         {
            infoText="1. ESP: En Aragón se habla español.\n"+
         "   ENG: Spanish is spoken in Aragon.\n"+
         "2. ESP: Algunas personas hablan aragonés.\n"+
         "   ENG: Some people speak Aragonese.\n"+
         "3. ESP: El aragonés no es muy común.\n"+
         "   ENG: Aragonese is not very common.\n"+
         "4. ESP: El español es la lengua principal.\n"+
         "   ENG: Spanish is the main language.\n\n"+
         "        Summary:\n"+
         "⦿ español\n"+
         "⦿ aragonés\n"+
         "⦿ lengua principal";

         }  
         else if(asturiasM)
         {
            infoText="1. ESP: En Asturias se habla español.\n"+
         "   ENG: Spanish is spoken in Asturias.\n"+
         "2. ESP: Existe el idioma asturiano.\n"+
         "   ENG: The Asturian language exists.\n"+
         "3. ESP: No todas las personas lo hablan.\n"+
         "   ENG: Not everyone speaks it.\n"+
         "4. ESP: El español es el más usado.\n"+
         "   ENG: Spanish is the most used language.\n\n"+
         "        Summary:\n"+
         "⦿ español\n"+
         "⦿ asturiano\n"+
         "⦿ idioma regional";

         }
         else if(balearicM)
         {
            infoText="1. ESP: En las Baleares se habla español.\n"+
         "   ENG: Spanish is spoken in the Balearic Islands.\n"+
         "2. ESP: También se habla catalán.\n"+
         "   ENG: Catalan is also spoken.\n"+
         "3. ESP: El catalán es lengua oficial.\n"+
         "   ENG: Catalan is an official language.\n"+
         "4. ESP: Muchas personas son bilingües.\n"+
         "   ENG: Many people are bilingual.\n\n"+
         "        Summary:\n"+
         "⦿ español\n"+
         "⦿ catalán\n"+
         "⦿ bilingüe\n"+
         "⦿ oficial";

         }
         else if(basqueM)
         {
            infoText="1. ESP: En el País Vasco se habla español.\n"+
         "   ENG: Spanish is spoken in the Basque Country.\n"+
         "2. ESP: También se habla euskera.\n"+
         "   ENG: Basque is also spoken.\n"+
         "3. ESP: El euskera es lengua oficial.\n"+
         "   ENG: Basque is an official language.\n"+
         "4. ESP: Muchas personas son bilingües.\n"+
         "   ENG: Many people are bilingual.\n\n"+
         "        Summary:\n"+
         "⦿ español\n"+
         "⦿ euskera\n"+
         "⦿ bilingüe\n"+
         "⦿ oficial";

         }
         else if(canaryM)
         {
            infoText="1. ESP: En Canarias se habla español.\n"+
         "   ENG: Spanish is spoken in the Canary Islands.\n"+
         "2. ESP: El acento es suave.\n"+
         "   ENG: The accent is soft.\n"+
         "3. ESP: Es parecido al acento andaluz.\n"+
         "   ENG: It is similar to the Andalusian accent.\n"+
         "4. ESP: El español es la lengua principal.\n"+
         "   ENG: Spanish is the main language.\n\n"+
         "        Summary:\n"+
         "⦿ español\n"+
         "⦿ acento suave\n"+
         "⦿ principal";

         }
         else if(cantabriaM)
         {
         infoText="1. ESP: En Cantabria se habla español.\n"+
         "   ENG: Spanish is spoken in Cantabria.\n"+
         "2. ESP: El español es la lengua principal.\n"+
         "   ENG: Spanish is the main language.\n"+
         "3. ESP: Algunas personas tienen acento del norte.\n"+
         "   ENG: Some people have a northern accent.\n"+
         "4. ESP: No hay otra lengua oficial.\n"+
         "   ENG: There is no other official language.\n\n"+
         "        Summary:\n"+
         "⦿ español\n"+
         "⦿ lengua principal\n"+
         "⦿ acento del norte";

         }
         else if(castileLeonM)
         {
            infoText="1. ESP: En Castilla y León se habla español.\n"+
         "   ENG: Spanish is spoken in Castile and León.\n"+
         "2. ESP: El español es muy claro.\n"+
         "   ENG: The Spanish is very clear.\n"+
         "3. ESP: Es una región importante para el idioma.\n"+
         "   ENG: It is an important region for the language.\n"+
         "4. ESP: No hay otra lengua oficial.\n"+
         "   ENG: There is no other official language.\n\n"+
         "        Summary:\n"+
         "⦿ español\n"+
         "⦿ claro\n"+
         "⦿ importante";

         }
         else if(castillaM)
         {
            infoText="1. ESP: En Castilla-La Mancha se habla español.\n"+
         "   ENG: Spanish is spoken in Castilla-La Mancha.\n"+
         "2. ESP: El español es la lengua principal.\n"+
         "   ENG: Spanish is the main language.\n"+
         "3. ESP: El acento es bastante neutro.\n"+
         "   ENG: The accent is quite neutral.\n"+
         "4. ESP: No hay lenguas regionales.\n"+
         "   ENG: There are no regional languages.\n\n"+
         "        Summary:\n"+
         "⦿ español\n"+
         "⦿ neutro\n"+
         "⦿ principal";

         }
         else if(cataloniaM)
         {
            infoText="1. ESP: En Cataluña se habla español.\n"+
         "   ENG: Spanish is spoken in Catalonia.\n"+
         "2. ESP: También se habla catalán.\n"+
         "   ENG: Catalan is also spoken.\n"+
         "3. ESP: El catalán es lengua oficial.\n"+
         "   ENG: Catalan is an official language.\n"+
         "4. ESP: Muchas personas son bilingües.\n"+
         "   ENG: Many people are bilingual.\n\n"+
         "        Summary:\n"+
         "⦿ español\n"+
         "⦿ catalán\n"+
         "⦿ bilingüe\n"+
         "⦿ oficial";

         }
         else if(extremadaruM)
         {
            infoText="1. ESP: En Extremadura se habla español.\n"+
         "   ENG: Spanish is spoken in Extremadura.\n"+
         "2. ESP: El español es la lengua principal.\n"+
         "   ENG: Spanish is the main language.\n"+
         "3. ESP: El acento es similar al andaluz.\n"+
         "   ENG: The accent is similar to Andalusian.\n"+
         "4. ESP: No hay otra lengua oficial.\n"+
         "   ENG: There is no other official language.\n\n"+
         "        Summary:\n"+
         "⦿ español\n"+
         "⦿ acento\n"+
         "⦿ principal";

         }
         else if(galiciaM)
         {
            infoText="1. ESP: En Galicia se habla español.\n"+
         "   ENG: Spanish is spoken in Galicia.\n"+
         "2. ESP: También se habla gallego.\n"+
         "   ENG: Galician is also spoken.\n"+
         "3. ESP: El gallego es lengua oficial.\n"+
         "   ENG: Galician is an official language.\n"+
         "4. ESP: Muchas personas son bilingües.\n"+
         "   ENG: Many people are bilingual.\n"+
         "5. ESP: Se usan dos lenguas.\n"+
         "   ENG: Two languages are used.\n\n"+
         "        Summary:\n"+
         "⦿ español\n"+
         "⦿ gallego\n"+
         "⦿ bilingüe\n"+
         "⦿ oficial";

         }
         else if(laRiojaM)
         {
            infoText="1. ESP: En La Rioja se habla español.\n"+
         "   ENG: Spanish is spoken in La Rioja.\n"+
         "2. ESP: El acento es claro.\n"+
         "   ENG: The accent is clear.\n"+
         "3. ESP: Es fácil de entender.\n"+
         "   ENG: It is easy to understand.\n"+
         "4. ESP: No hay otra lengua oficial.\n"+
         "   ENG: There is no other official language.\n"+
         "5. ESP: El español es la lengua principal.\n"+
         "   ENG: Spanish is the main language.\n\n"+
         "        Summary:\n"+
         "⦿ español\n"+
         "⦿ claro\n"+
         "⦿ fácil\n"+
         "⦿ principal";

         }
         else if(madridM)
         {
            infoText="1. ESP: En Madrid se habla español.\n"+
         "   ENG: Spanish is spoken in Madrid.\n"+
         "2. ESP: El acento es neutro.\n"+
         "   ENG: The accent is neutral.\n"+
         "3. ESP: Es fácil de entender.\n"+
         "   ENG: It is easy to understand.\n"+
         "4. ESP: No hay lengua regional.\n"+
         "   ENG: There is no regional language.\n"+
         "5. ESP: El español es estándar.\n"+
         "   ENG: Spanish is standard.\n\n"+
         "        Summary:\n"+
         "⦿ español\n"+
         "⦿ neutro\n"+
         "⦿ estándar\n"+
         "⦿ fácil";

         }
         else if(murciaM)
         {
            infoText="1. ESP: En Murcia se habla español.\n"+
         "   ENG: Spanish is spoken in Murcia.\n"+
         "2. ESP: El acento es claro.\n"+
         "   ENG: The accent is clear.\n"+
         "3. ESP: El español es la lengua principal.\n"+
         "   ENG: Spanish is the main language.\n"+
         "4. ESP: No hay lengua regional oficial.\n"+
         "   ENG: There is no official regional language.\n"+
         "5. ESP: Es fácil de entender.\n"+
         "   ENG: It is easy to understand.\n\n"+
         "        Summary:\n"+
         "⦿ español\n"+
         "⦿ claro\n"+
         "⦿ principal\n"+
         "⦿ fácil";

         }
         else if(navarreM)
         {
            infoText="1. ESP: En Navarra se habla español.\n"+
         "   ENG: Spanish is spoken in Navarra.\n"+
         "2. ESP: También se habla euskera.\n"+
         "   ENG: Basque is also spoken.\n"+
         "3. ESP: El euskera es lengua oficial.\n"+
         "   ENG: Basque is an official language.\n"+
         "4. ESP: Algunas personas son bilingües.\n"+
         "   ENG: Some people are bilingual.\n"+
         "5. ESP: Se usan dos lenguas.\n"+
         "   ENG: Two languages are used.\n\n"+
         "        Summary:\n"+
         "⦿ español\n"+
         "⦿ euskera\n"+
         "⦿ bilingüe\n"+
         "⦿ oficial";

         }
         else if(valenciaM)
         {
            infoText="1. ESP: En Valencia se habla español.\n"+
         "   ENG: Spanish is spoken in Valencia.\n"+
         "2. ESP: También se habla valenciano.\n"+
         "   ENG: Valencian is also spoken.\n"+
         "3. ESP: El valenciano es lengua oficial.\n"+
         "   ENG: Valencian is an official language.\n"+
         "4. ESP: Muchas personas son bilingües.\n"+
         "   ENG: Many people are bilingual.\n"+
         "5. ESP: Se usan dos lenguas.\n"+
         "   ENG: Two languages are used.\n\n"+
         "        Summary:\n"+
         "⦿ español\n"+
         "⦿ valenciano\n"+
         "⦿ bilingüe\n"+
         "⦿ oficial";

         }
      }
      else if(mode === 4)
      {
         if(andalusiaM)
         {
            infoText.visible = true;
            infoText="1. ESP: El flamenco es muy importante.\n"+
         "   ENG: Flamenco is very important.\n"+
         "2. ESP: El flamenco es música y baile.\n"+
         "   ENG: Flamenco is music and dance.\n"+
         "3. ESP: La Semana Santa es muy famosa.\n"+
         "   ENG: Holy Week is very famous.\n"+
         "4. ESP: Hay muchas tradiciones culturales.\n"+
         "   ENG: There are many cultural traditions.\n"+
         "5. ESP: La cultura es muy rica.\n"+
         "   ENG: The culture is very rich.\n\n"+
         "        Summary:\n"+
         "⦿ flamenco\n"+
         "⦿ baile\n"+
         "⦿ Semana Santa\n"+
         "⦿ tradiciones\n"+
         "⦿ cultura";
   
         }
         else if(aragonM)
         {
            infoText="1. ESP: La identidad regional es fuerte.\n"+
         "   ENG: Regional identity is strong.\n"+
         "2. ESP: Hay fiestas tradicionales.\n"+
         "   ENG: There are traditional festivals.\n"+
         "3. ESP: La cultura es histórica.\n"+
         "   ENG: The culture is historic.\n"+
         "4. ESP: La naturaleza es importante.\n"+
         "   ENG: Nature is important.\n\n"+
         "        Summary:\n"+
         "⦿ identidad\n"+
         "⦿ fiestas\n"+
         "⦿ historia\n"+
         "⦿ naturaleza";

         }  
         else if(asturiasM)
         {
            infoText="1. ESP: La naturaleza es muy importante.\n"+
         "   ENG: Nature is very important.\n"+
         "2. ESP: Hay mucha vida rural.\n"+
         "   ENG: There is a lot of rural life.\n"+
         "3. ESP: Las tradiciones son fuertes.\n"+
         "   ENG: Traditions are strong.\n"+
         "4. ESP: La cultura es tranquila.\n"+
         "   ENG: The culture is calm.\n\n"+
         "        Summary:\n"+
         "⦿ naturaleza\n"+
         "⦿ rural\n"+
         "⦿ tradiciones\n"+
         "⦿ tranquilidad";

         }
         else if(balearicM)
         {
            infoText="1. ESP: Las islas son muy turísticas.\n"+
         "   ENG: The islands are very touristic.\n"+
         "2. ESP: Hay muchas playas bonitas.\n"+
         "   ENG: There are many beautiful beaches.\n"+
         "3. ESP: El turismo es muy importante.\n"+
         "   ENG: Tourism is very important.\n"+
         "4. ESP: La vida es tranquila.\n"+
         "   ENG: Life is calm.\n"+
         "5. ESP: El clima es bueno.\n"+
         "   ENG: The climate is good.\n\n"+
         "        Summary:\n"+
         "⦿ turismo\n"+
         "⦿ playas\n"+
         "⦿ islas\n"+
         "⦿ vida tranquila\n"+
         "⦿ buen clima";

         }
         else if(basqueM)
         {
            infoText="1. ESP: La cultura vasca es muy fuerte.\n"+
         "   ENG: Basque culture is very strong.\n"+
         "2. ESP: La identidad es importante.\n"+
         "   ENG: Identity is important.\n"+
         "3. ESP: Las tradiciones son diferentes.\n"+
         "   ENG: Traditions are different.\n"+
         "4. ESP: El deporte es popular.\n"+
         "   ENG: Sport is popular.\n"+
         "5. ESP: La cultura es única.\n"+
         "   ENG: The culture is unique.\n\n"+
         "        Summary:\n"+
         "⦿ cultura vasca\n"+
         "⦿ identidad\n"+
         "⦿ tradiciones\n"+
         "⦿ deporte\n"+
         "⦿ cultura única";

         }
         else if(canaryM)
         {
            infoText="1. ESP: Las islas son volcánicas.\n"+
         "   ENG: The islands are volcanic.\n"+
         "2. ESP: El clima es cálido.\n"+
         "   ENG: The climate is warm.\n"+
         "3. ESP: El turismo es muy importante.\n"+
         "   ENG: Tourism is very important.\n"+
         "4. ESP: La naturaleza es especial.\n"+
         "   ENG: Nature is special.\n"+
         "5. ESP: Las islas están en el Atlántico.\n"+
         "   ENG: The islands are in the Atlantic.\n\n"+
         "        Summary:\n"+
         "⦿ volcánico\n"+
         "⦿ clima cálido\n"+
         "⦿ turismo\n"+
         "⦿ naturaleza\n"+
         "⦿ Atlántico";
         }
         else if(cantabriaM)
         {
            infoText="1. ESP: La naturaleza es muy verde.\n"+
         "   ENG: Nature is very green.\n"+
         "2. ESP: Hay mucha costa y mar.\n"+
         "   ENG: There is a lot of coast and sea.\n"+
         "3. ESP: La región es tranquila.\n"+
         "   ENG: The region is calm.\n"+
         "4. ESP: La vida es rural.\n"+
         "   ENG: Life is rural.\n"+
         "5. ESP: El paisaje es bonito.\n"+
         "   ENG: The landscape is beautiful.\n\n"+
         "        Summary:\n"+
         "⦿ naturaleza\n"+
         "⦿ costa\n"+
         "⦿ tranquilidad\n"+
         "⦿ vida rural\n"+
         "⦿ paisaje";

         }
         else if(castileLeonM)
         {
            infoText="1. ESP: La historia es muy importante.\n"+
         "   ENG: History is very important.\n"+
         "2. ESP: Hay muchos castillos.\n"+
         "   ENG: There are many castles.\n"+
         "3. ESP: La cultura es tradicional.\n"+
         "   ENG: The culture is traditional.\n"+
         "4. ESP: Hay pueblos antiguos.\n"+
         "   ENG: There are old towns.\n"+
         "5. ESP: La región es grande.\n"+
         "   ENG: The region is large.\n\n"+
         "        Summary:\n"+
         "⦿ historia\n"+
         "⦿ castillos\n"+
         "⦿ tradición\n"+
         "⦿ pueblos\n"+
         "⦿ región grande";

         }
         else if(castillaM)
         {
            infoText="1. ESP: Don Quijote es muy famoso.\n"+
         "   ENG: Don Quixote is very famous.\n"+
         "2. ESP: La región es muy seca.\n"+
         "   ENG: The region is very dry.\n"+
         "3. ESP: Hay muchos molinos.\n"+
         "   ENG: There are many windmills.\n"+
         "4. ESP: La vida es rural.\n"+
         "   ENG: Life is rural.\n"+
         "5. ESP: La cultura es tradicional.\n"+
         "   ENG: The culture is traditional.\n\n"+
         "        Summary:\n"+
         "⦿ Don Quijote\n"+
         "⦿ molinos\n"+
         "⦿ rural\n"+
         "⦿ tradición\n"+
         "⦿ región seca";

         }
         else if(cataloniaM)
         {
            infoText="1. ESP: La identidad catalana es fuerte.\n"+
         "   ENG: Catalan identity is strong.\n"+
         "2. ESP: La cultura es diferente.\n"+
         "   ENG: The culture is different.\n"+
         "3. ESP: Las tradiciones son importantes.\n"+
         "   ENG: Traditions are important.\n"+
         "4. ESP: Hay mucha vida cultural.\n"+
         "   ENG: There is a lot of cultural life.\n"+
         "5. ESP: La región es moderna.\n"+
         "   ENG: The region is modern.\n\n"+
         "        Summary:\n"+
         "⦿ identidad\n"+
         "⦿ cultura\n"+
         "⦿ tradiciones\n"+
         "⦿ vida cultural\n"+
         "⦿ modernidad";

         }
         else if(extremadaruM)
         {
            infoText="1. ESP: La naturaleza es muy importante.\n"+
         "   ENG: Nature is very important.\n"+
         "2. ESP: La región es tranquila.\n"+
         "   ENG: The region is calm.\n"+
         "3. ESP: Hay muchos espacios naturales.\n"+
         "   ENG: There are many natural spaces.\n"+
         "4. ESP: La vida es rural.\n"+
         "   ENG: Life is rural.\n"+
         "5. ESP: La cultura es tradicional.\n"+
         "   ENG: The culture is traditional.\n\n"+
         "        Summary:\n"+
         "⦿ naturaleza\n"+
         "⦿ tranquilidad\n"+
         "⦿ rural\n"+
         "⦿ espacios naturales\n"+
         "⦿ tradición";

         }
         else if(galiciaM)
         {
            infoText="1. ESP: En Valencia se habla español.\n"+
         "   ENG: Spanish is spoken in Valencia.\n"+
         "2. ESP: También se habla valenciano.\n"+
         "   ENG: Valencian is also spoken.\n"+
         "3. ESP: El valenciano es lengua oficial.\n"+
         "   ENG: Valencian is an official language.\n"+
         "4. ESP: Muchas personas son bilingües.\n"+
         "   ENG: Many people are bilingual.\n"+
         "5. ESP: Se usan dos lenguas.\n"+
         "   ENG: Two languages are used.\n\n"+
         "        Summary:\n"+
         "⦿ español\n"+
         "⦿ valenciano\n"+
         "⦿ bilingüe\n"+
         "⦿ oficial";

         }
         else if(laRiojaM)
         {
            infoText="1. ESP: La región es tranquila.\n"+
         "   ENG: The region is calm.\n"+
         "2. ESP: Hay vida rural.\n"+
         "   ENG: There is rural life.\n"+
         "3. ESP: Las tradiciones son importantes.\n"+
         "   ENG: Traditions are important.\n"+
         "4. ESP: La cultura es tradicional.\n"+
         "   ENG: The culture is traditional.\n"+
         "5. ESP: Es una región pequeña.\n"+
         "   ENG: It is a small region.\n\n"+
         "        Summary:\n"+
         "⦿ tranquilidad\n"+
         "⦿ rural\n"+
         "⦿ tradiciones\n"+
         "⦿ tradicional\n"+
         "⦿ pequeña";

         }
         else if(madridM)
         {
            infoText="1. ESP: Es una región muy importante.\n"+
         "   ENG: It is a very important region.\n"+
         "2. ESP: Es el centro de España.\n"+
         "   ENG: It is the center of Spain.\n"+
         "3. ESP: Hay mucha vida cultural.\n"+
         "   ENG: There is a lot of cultural life.\n"+
         "4. ESP: Es una región moderna.\n"+
         "   ENG: It is a modern region.\n"+
         "5. ESP: La cultura es diversa.\n"+
         "   ENG: The culture is diverse.\n\n"+
         "        Summary:\n"+
         "⦿ importante\n"+
         "⦿ centro\n"+
         "⦿ cultural\n"+
         "⦿ moderna\n"+
         "⦿ diversa";

         }
         else if(murciaM)
         {
            infoText="1. ESP: El clima es seco.\n"+
         "   ENG: The climate is dry.\n"+
         "2. ESP: La agricultura es importante.\n"+
         "   ENG: Agriculture is important.\n"+
         "3. ESP: La región es tranquila.\n"+
         "   ENG: The region is calm.\n"+
         "4. ESP: Hay vida rural.\n"+
         "   ENG: There is rural life.\n"+
         "5. ESP: La cultura es tradicional.\n"+
         "   ENG: The culture is traditional.\n\n"+
         "        Summary:\n"+
         "⦿ clima seco\n"+
         "⦿ agricultura\n"+
         "⦿ tranquilidad\n"+
         "⦿ rural\n"+
         "⦿ tradicional";

         }
         else if(navarreM)
         {
            infoText="1. ESP: El clima es seco.\n"+
         "   ENG: The climate is dry.\n"+
         "2. ESP: La agricultura es importante.\n"+
         "   ENG: Agriculture is important.\n"+
         "3. ESP: La región es tranquila.\n"+
         "   ENG: The region is calm.\n"+
         "4. ESP: Hay vida rural.\n"+
         "   ENG: There is rural life.\n"+
         "5. ESP: La cultura es tradicional.\n"+
         "   ENG: The culture is traditional.\n\n"+
         "        Summary:\n"+
         "⦿ clima seco\n"+
         "⦿ agricultura\n"+
         "⦿ tranquilidad\n"+
         "⦿ rural\n"+
         "⦿ tradicional";

         }
         else if(valenciaM)
         {
            infoText="1. ESP: La naturaleza es importante.\n"+
         "   ENG: Nature is important.\n"+
         "2. ESP: Hay montañas y campos.\n"+
         "   ENG: There are mountains and countryside.\n"+
         "3. ESP: Las tradiciones son fuertes.\n"+
         "   ENG: Traditions are strong.\n"+
         "4. ESP: La cultura es regional.\n"+
         "   ENG: The culture is regional.\n"+
         "5. ESP: La identidad es importante.\n"+
         "   ENG: Identity is important.\n\n"+
         "        Summary:\n"+
         "⦿ naturaleza\n"+
         "⦿ montañas\n"+
         "⦿ tradiciones\n"+
         "⦿ identidad\n"+
         "⦿ regional";
         }
      }
      fill("white");
      textSize(20);
      textFont("Cooper");
      text(infoText, displayWidth/2-300,110, 1000, 1000);
   }  
}
