

let score = 0;

function question1(){
    let userDate = prompt("Is the developer male?");
    console.log(userDate);
    
    userDate = userDate.toLowerCase();
    
    
    
    if(userDate == 'y' || 'yes'){
            alert('Yes actually I am!');
            score ++;
    
    }else if(userDate == 'n' || 'no'){
            alert('Developer is actually male');
    }else{
            alert('Try again later')
    }
}
question1();

function question2(){
    let userTime = prompt('Does the developer live in Jordan?');
    console.log (userTime);
    
    switch(userTime){
        case 'y':
        case 'yes':
            alert('Yes actually I do!');
            score ++;
        break;
    
        case 'n':
        case 'no':
            alert('Developer actually lives in Jordan');
        break;
        default:
            alert('Try again later')
    }
}

question2();

let userLocation = prompt('Does the developer like chocolate?');
console.log (userLocation);

userLocation = userLocation.toLowerCase();

switch(userLocation){
    case 'y':
    case 'yes':
        alert('Yes actually I do!');
        score ++;
    break;

    case 'n':
    case 'no':
        alert('The developer actually likes chocolate');
    break;
    default:
        alert('Try again later')
}

let userActivity = prompt('Does the developer like football?');
console.log (userActivity);

userActivity = userActivity.toLowerCase();

switch(userActivity){
    case 'y':
    case 'yes':
        alert('Yes actually I do!');
        score ++;
    break;

    case 'n':
    case 'no':
        alert('Developer actually likes football');
    break;
    default:
        alert('Try again later')
}

let userAge = prompt('Does the developer like music?');
console.log (userAge);

userAge = userAge.toLowerCase();

switch(userAge){
    case 'y':
    case 'yes':
        alert('Yes I do!');
        score ++;
    break;

    case 'n':
    case 'no':
        alert('Sometimes true');
    break;
    default:
        alert('Try again later');
}

i=0;
while (i < 4){
userGuess = prompt('What\'s my favorite number (single digit)');
userGuess = parseInt(userGuess);

if(userGuess < 7){
    alert('Go higher');
    i++;
}else if(userGuess > 7){
    alert('Go lower');
    i++;
}else if(userGuess = 7){
    alert('You are correct!');
    score ++;
    i=4;
}else{
    alert('sorry, try again later');

}
}


let myFavoritfood = ['cake' , 'pizza' , 'shawarma' , 'brocolli' , 'lettuce' , 'tomato'];
alert('Guess my favorite food, 3 are correct!');
alert('Cake, Pizza, Lettuce, Brocolli, Shawarma, Tomato. Choose any of 3');

i=0;
while(i<6){
    userMind = prompt('Take a guess?');
    userMind = userMind.toLowerCase(userMind);
    if(userMind === myFavoritfood[3] || userMind === myFavoritfood[4] || userMind === myFavoritfood[5]){
    alert('You are correct!');
    score ++;
    i=6;
}else{
    alert('Try again :)');
    i++;
}
}

alert('Your score is: ' + score);
alert('Thank you very much for taking my simple quiz, learn more about me in the text below!');