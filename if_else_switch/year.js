function isLeapYear_if() {
    let year = prompt("Enter the year");
    year = parseInt(year);
    let boo;
    if (year % 400 === 0) {
        boo= true;
    } else if (year % 100 === 0) {
        boo= false;
    } else if (year % 4 === 0) {
        boo= true;
    } else {
        boo= false;
    }
    console.log(`${year}`,boo?"leap year":"not a leap year")
}

function isLeapYear_switch() {
    let year = prompt("Enter the year");
    year = parseInt(year);
    let boo;
    switch (true) {
        case year % 400 === 0:
                boo= true;
            break;
            case year % 100 === 0:
                boo= false;
            break;
            case year % 4 === 0:
                boo= true;
            break;
        default:
            boo= false;
            break;
    }
    console.log(`${year}`,boo?"leap year":"not a leap year")
}

isLeapYear_if()
isLeapYear_switch()