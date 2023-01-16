const body=document.body;

function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
  //Add hover over image to show product name
  //Add a hint button next to the text field which shows the first two integers of the code and the last two integers are stars*
  
  
  
  const codeNames=[
    "Almonds Green","Aloe Vera Leaves","Anise","Apricots","Artichokes","Arugula","Avocado medium","Avocado Small","Bananas Dole","Bananas Baby","Beans Fava","Beans Garbanzo","Beans Green","Beans Long Green","Beets Bunch","Beets Loose","Blacked Eyed Beans","Broccoli Bunch","Brussel Sprout","Pinto Beans","Beans Pole","Cabbage Green","Cabbage Red","Cabbage Sovoy",
    "Cactus Green","Cactus Pears Red","Cauliflower","Cherimoya","Chives Fresh","Cilantro","Clementines Mandarine","Coconut","Collard Greens","Yellow Corn","Cucumbers Curly","Cucumbers ","Cucumbers Baby","English Cucumber","Dandelion","Dates Fresh","Dill","Dragon Fruit","Eggplant Baby","Eggplant Hindu","Eggplant","Garlic Loose","Ginger Root","Guava","HoneyRock Melon",
    "Kale Green","Kiwi","Kousa","Lettuce Romaine","Leeks Regular","Lemons","Lemons Jumbo","Lettuce Endive Chicory","Limes small","Limes Large","Mango","Melon HoneyDew","Mint Leaves","Molokhia Fresh","Mushrooms Loose","Okra","Onion Cooking Loose","Onion White Large","Onions Green","Onions Knobby","Onions Red","Onion Shallots","Onions White Small","Onions Spanish","Onions Sweet",
    "Onions Valley Farms","Papaya Merisol Large","Parsley Curly","Parsley Italian","Sugar Snap Peas","Green Peppers","Pepper Anaheim","Pepper Cubenellas Green","Pepper Finger Hot","Pepper Finger Red Hot","Pepper Ghost","Pepper Serrano","Peppers Dry Mild","Peppers Jalapeno","Peppers Orange","Peppers Red Bell","Thai Chile Green Pepper","Peppers Yellow","Pineapple","Prunes","Plums Sour",
    "Pomegranate","Pomelo","Potato Swt Red","Potato White","Potatoes Idaho 5 LB","Potatoes Idaho 10 LB","Potato Idaho","Radish Daikon","Radish Bunch","Rashad","Spinash Baby Bulk","Yellow Squash","Swiss Chard","Tomatillos","Tomatoes Beefsteak","Tomatoes Roma","Tomatoes Vine","Tomatoes Vine Loose","Tumeric","Turnip","Watermelon Mini","Watermelon Whole Seeded","Watermelon Whole Seedless","Yams Jumbo","Yucca Root"
  ]
  
  const codes=[
     1010,3064,3338,4218,4516,4884,4225,4046,4011,4234,4528,4535,4066,4531,4539,4540,4526,4060,4550,6115,4530,4069,4554,4104,9090,4255,4079,4257,4888,4889,4450,1014,4614,4078,4597,4062,4611,4593,4615,8888,4891,3040,4599,1013,4081,4608,4612,4299,4319,4627,4030,4594,4640,4629,4033,4053,4604,4048,1022,4959,4034,4896,4930,4645,4655,4160,4663,4068,4659,4082,4662,4666,4093,4163,4661,3112,4900,4901,4675,4065,4677,4697,4696,4113,
     1111,4687,4685,4693,3121,4688,1023,4689,1016,4822,4448,3440,3129,4817,4818,1040,1041,4072,4086,4089,4602,4749,4782,4586,4801,4799,4087,4664,4064,4779,4811,3421,4031,4032,4074,4819
  ]
  
  
  
  const imgUrl=[
    "almondGreen.png","aloeVera.jpg","anise.jpg","apricots.jpg","artichokes.jpg","arugula.jpg","avocadmedium.jpg","avocadSmall.jpg","banana.jpg","babyBananas.jpg","beansFava.png","garbanzoBeans.jpg","greenBeans.jpg","beansLongGreen.jpg","beetsBunch.jpg","beetsLoose.png","blackEyedBeans.jpg","broccoliBunch.webp","brusselSprout.webp","pintoBeans.jpg","beansPole.jpg","cabbageGreen.jpg","cabbageRed.jpg","cabbageSovoy.jpg","cactusGreen.jpg","cactusRed.jpg","cauliflower.png ","cherimoya.webp","chivesFresh.jpg","cilantro.webp","clementinesMandarine.jpg","coconut.jpg","collardGreen.jpg","yellowCorn.jpg","cucumbersCurly.jpg","cucumbers.png","cucumbersBaby.jpg","englishCucumber.jpg","dandelion.webp","datesFresh.webp","dill.png","dragonFruit.jpg","eggplantBaby.jpg","eggplantHindu.jpg","eggplant.jpg","garlicLoose.jpg","gingerRoot.jpg","guava.jpg","honeyRockMelon.jpg","kaleGreen.webp","kiwi.jpg","kousa.webp","lettuceRomaine.jpg","leeksRegular.jpg","lemons.webp","lemonsJumbo.jpg","lettuceEndive.png","limesSmall.jpg","limesLarge.jpg","mango.jpg","melonHoneyDew.jpg","mintLeaves.jpg","molokihaFresh.png","mushroomsLoose.jpg","okra.jpg","onionLoose.jpg","onionsWhiteLarge.jpg","onionsGreen.jpg","onionsKnob.jpg","onionsRed.jpg","onionsShallots.jpg","onionsWhiteSmall.jpg","onionsSpanish.jpg","onionsSweet.jpg","onionValley.jpg","papayaLarge.jpg","parsleyCurly.png","parsleyItalian.jpg","sugarSnapPeas.webp","greenPeppers.jpg","anaheimPepper.webp","cubanellePepper.jpg","fingerHotPeppers.webp","fingerRedHotPeppers.jpg","ghostPeppers.webp","serranoPeppers.jpg","dryMildPeppers.jpg","jalapenoPeppers.jpg","orangePeppers.jpg","redPeppers.jpg","thaiChilePeppers.png","yellowPeppers.jpg","pineaplle.webp","prunes.jpg","plumsSour.webp","pomegranate.webp","pomelo.jpg","potatoSweetRed.jpg","potatoWhite.jpg","potatoes5lb.jpeg","idahoPotato10lb.webp","potatoIdaho.jpg","radishDaikon.webp","radishBunch.webp","rashad.jpg","spinashBabyBulk.jpg","yellowSquash.jpg","swissChard.jpg","tomatillos.webp","beefSteak.jpg","romaTomatoes.jpg","tomatoesVine.jpg","looseTomatoes.jpg","tumeric.jpg","turnip.jpg","miniWatermelon.webp","seededWatermelon.jpg","seedlessWatermelon.jpg","yamsJumbo.jpg","yuccaRoot.png"]
  
  
  
  let inputField=document.getElementById("inputField").value;
  const button=document.getElementById("button");
  const imageText=document.getElementById("imageText");
  const hintBtn=document.getElementById("hintBtn");
 
  
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }


//Random number which chooses array index to retrieve value from array
let x=randomNumber(0,110);


image.src="Images/"+imgUrl[x];
//arrays to store temporary values that are used to create fake answers
let tempArray=[0,0,0,0];
let tempRand=randomNumber(10,99);
let tempString=codes[x].toString();

imageText.textContent=codeNames[x];
//To-Do: there might be chance random number is equal to right answer eliminate that bug


for(let i=0;i<4;i++){

  //generate random numbers close to the answer
    tempRand=randomNumber(10,99);
    tempArray[i]=tempString+''+tempRand;

    
}
//assagin the right answer to one of the buttons
tempRand=randomNumber(0,4);
tempArray[tempRand]=codes[x];


button.addEventListener("click",function(){
    inputField=document.getElementById("inputField").value;
    if(inputField==codes[x]){

        location.reload();
       
    
    }

})

let counter=0;
hintBtn.addEventListener("click", function(){
    counter++;
    
    switch(counter){
    case 1:
        hintBtn.textContent=tempString.substring(0,2)+"**";
        break;
    case 2:
        hintBtn.textContent=tempString.substring(0,3)+"*";
        break;

        case 3:
            hintBtn.textContent=tempString;
            break;




    }
    

})