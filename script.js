function  BMI(weight=45, height=1.64){
let result = weight / (height * height);
return result;
}

console.log(BMI(73, 1.64));
console.log(BMI());

function Status(BMI){
if (BMI < 18.5){
    return("لديك نقص في الوزن");
} else if(BMI >= 18.5 && BMI < 25){
    return("وزنك صحي");
}else{
    return("لديك زيادة في الوزن")
}

}
function calculate(){
    let weight = document.getElementById("weight").value
    let height= document.getElementById("height").value
    let bmi = BMI (weight, height);
    let desc = Status(bmi);
    let div = document.getElementById("result")
    div.innerText =bmi + " == " + desc
}
