
function areaOfCircle(r){
    return 22/7*r**2;
}
console.log("Area of circle is",areaOfCircle(10));

function perimeterOfRectangle(l,b){
    result = 2*(l+b);
    return result;
}
console.log("Perimeter of rectangle :",perimeterOfRectangle(7,5));
function volumeOfCube(a){
    result = a**3;
    return result;
}
console.log("Volume of Cube:",volumeOfCube(3));
function simpleInterest(p,r,t){
    result = (p*r*t)/100;
    return result;
}
console.log("Simple Interest:",simpleInterest(5000,10,3));
function averageOfThree(a,b,c){
    result = (a+b+c)/3;
    return result;
}
console.log("Average of three numbers is :",averageOfThree(12,18,24));
function celsiusToFahrenheit(c){
    result = (c * 9/5) + 32;
    return result;
}
console.log("Temperature in ferenheit:",celsiusToFahrenheit(25));
function kmToMiles(km){
    result = km * 0.621371;
    return result;
}
console.log("Distance in miles is :",kmToMiles(5));
function square(num){
    result = num**2;
    return result;
}
console.log("Square of a number is :",square(5));
function sum(a,b){
    result = a+b;
    return result;
}
console.log("Sum of two numbers is :",sum(5,7));
function multiplyThree(a, b, c){
    result = a*b*c;
    return result;
}
console.log("Product of three numbers is :",multiplyThree(5,2,4));
