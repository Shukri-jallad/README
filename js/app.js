let userDate = prompt("Is the developer male?");
console.log(userDate);

userDate = userDate.toLowerCase();

if(userDate == 'y' || 'yes'){
        alert('Yes actually I am!')

}else if(userDate == 'n' || 'no'){
        alert('Developer is actually male');
}else{
        alert('Try again later')
}

let userTime = prompt('Does the developer live in Jordan?');
console.log (userTime);

switch(userDate){
    case 'y':
    case 'yes':
        alert('Yes actually I do!');
    break;

    case 'n':
    case 'no':
        alert('Developer actually lives in Jordan');
    break;
    default:
        alert('Try again later')
}

let userLocation = prompt('Does the developer like chocolate?');
console.log (userLocation);

userLocation = userLocation.toLowerCase();

switch(userLocation){
    case 'y':
    case 'yes':
        alert('Yes actually I do!');
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

switch(userDate){
    case 'y':
    case 'yes':
        alert('Yes actually I do!');
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

switch(userDate){
    case 'y':
    case 'yes':
        alert('Yes I do!');
    break;

    case 'n':
    case 'no':
        alert('Sometimes true');
    break;
    default:
        alert('Try again later')
}

alert('Thank you very much for taking my simple quiz, learn more about me in the text below!');