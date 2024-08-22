function weatherClothingAdviser_if() {
    let temperature = prompt("What's the current temperature ?");
    let isRaining = prompt("Is it raining? (yes or no)");
    temperature = parseFloat(temperature);
    if (temperature < 0) {
        console.log("It's freezing! Wear a heavy coat, scarf, gloves, and a hat.");
    } else if (temperature >= 0 && temperature <= 10) {
        console.log("It's cold outside. Wear a coat and consider wearing a hat and gloves.");
    } else if (temperature > 10 && temperature <= 20) {
        console.log("It's cool. A jacket or sweater should be fine.");
    } else if (temperature > 20 && temperature <= 30) {
        console.log("It's warm. A t-shirt and light clothing should be comfortable.");
    } else {
        console.log("It's hot! Wear shorts, a t-shirt, and stay hydrated.");
    }

    if (isRaining.toLowerCase() === 'yes') {
        console.log("Don't forget to take an umbrella and wear waterproof shoes.");
    } else {
        console.log("No rain, so you won't need an umbrella.");
    }
}

function weatherClothingAdviser_switch() {
    let temperature = prompt("What's the current temperature ?");
    let isRaining = prompt("Is it raining? (yes or no)");
    temperature = parseFloat(temperature);
    let clothingAdvice;
    switch (true) {
        case (temperature < 0):
            clothingAdvice = "It's freezing! Wear a heavy coat, scarf, gloves, and a hat.";
            break;
        case (temperature >= 0 && temperature <= 10):
            clothingAdvice = "It's cold outside. Wear a coat and consider wearing a hat and gloves.";
            break;
        case (temperature > 10 && temperature <= 20):
            clothingAdvice = "It's cool. A jacket or sweater should be fine.";
            break;
        case (temperature > 20 && temperature <= 30):
            clothingAdvice = "It's warm. A t-shirt and light clothing should be comfortable.";
            break;
        default:
            clothingAdvice = "It's hot! Wear shorts, a t-shirt, and stay hydrated.";
            break;
    }
    let rainAdvice;
    switch (isRaining.toLowerCase()) {
        case 'yes':
            rainAdvice = "Don't forget to take an umbrella and wear waterproof shoes.";
            break;
        case 'no':
            rainAdvice = "No rain, so you won't need an umbrella.";
            break;
        default:
            rainAdvice = "Please enter 'yes' or 'no' for the rain question.";
            break;
    }
    console.log(clothingAdvice);
    console.log(rainAdvice);
}


weatherClothingAdviser_if();
weatherClothingAdviser_switch();
