    //variables
    
let score= 0;
let sprinklesCost = 15;
let sprinkles = 0;
let gumballs= 0;
let gumballCost =150;
let clickingPower = 1;
let gummyBear = 0;
let gummyBearCost = 1500;
let strawberry = 0;
let strawberryCost = 150000;
let drizzle=0;
let drizzleCost= 1500000;

    //end


    function buySprinkles(){
        if (score >= sprinklesCost){
            score = score - sprinklesCost;
            sprinkles = sprinkles +1;
            sprinklesCost = Math.round(sprinklesCost * 1.15);

            document.getElementById("score").innerHTML = score ;
            document.getElementById("sprinklesCost").innerHTML = sprinklesCost;
            document.getElementById("sprinkles").innerHTML = sprinkles ;
            updateScorePerSecond();
        }
    }

    
    function buyGumball(){
        if (score >= gumballCost){
            score = score - gumballCost;
            gumballs = gumballs + 1;
            gumballCost = Math.round(gumballCost * 1.15);

            document.getElementById("score").innerHTML = score ;
            document.getElementById("gumballCost").innerHTML = gumballCost;
            document.getElementById("gumballs").innerHTML = gumballs ;
            updateScorePerSecond();
        }
    }
    function buyGummyBear(){
        if (score >= gummyBearCost){
            score = score - gummyBearCost;
            gummyBear = gummyBear + 1;
            gummyBearCost = Math.round(gummyBearCost * 1.15);

            document.getElementById("score").innerHTML = score ;
            document.getElementById("gummyBearCost").innerHTML = gummyBearCost;
            document.getElementById("gummyBear").innerHTML = gummyBear ;
            updateScorePerSecond();
            
        }
    }
    function buyStrawberry(){
        if (score >= strawberryCost){
            score = score - strawberryCost;
            strawberry = strawberry + 1;
            strawberryCost = Math.round(strawberryCost * 1.15);

            document.getElementById("score").innerHTML = score ;
            document.getElementById("strawberryCost").innerHTML = strawberryCost;
            document.getElementById("strawberry").innerHTML = strawberry ;
            updateScorePerSecond();
        }
    }
    
    function buyDrizzle(){
        if (score >= drizzleCost){
            score = score - drizzleCost;
            drizzle = drizzle +1;
            drizzleCost = Math.round(drizzleCost * 1.15);

            document.getElementById("score").innerHTML = score ;
            document.getElementById("drizzleCost").innerHTML = drizzleCost;
            document.getElementById("drizzle").innerHTML = drizzle ;
            updateScorePerSecond();
        }
    }

    function addToScore(amount){
        score = score + amount; 
        document.getElementById("score").innerHTML = score ;
    }
    function updateScorePerSecond(){
        scorePerSecond = [sprinkles+ gumballs *5 +gummyBear *30 +strawberry *100 + drizzle * 1000];
        document.getElementById("scorePerSecond").innerHTML = scorePerSecond;
    }
    
    setInterval (function(){
        score = score + sprinkles;
        score = score + gumballs * 5;
         score = score + gummyBear * 50; 
        score = score + strawberry *100;
        score = score + drizzle *1000
        document.getElementById("score").innerHTML = score;

        document.title = score + " toppings" + " -Sweet Tooth Clicker"
        }, 1000);//1000ms = 1s = +1 click per 10s

