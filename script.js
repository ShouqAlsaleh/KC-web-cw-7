 

function BMI (weight,height)  {
let result = weight/ (height * height) 
return result
}

console.log(BMI(40,40))


function Status (bmi) {
if (bmi < 18.5)
{
    h2.innerHTML = `لديك نقص في الوزن`
    h2.style.color ="orange"
return "لديك نقص في الوزن"

}
else if (bmi >= 18.5 < 25){
    h2.innerHTML = `وزنك صحي`
    h2.style.color ="green"
    return"وزنك صحي"

}
else  {
    h2.innerHTML = `لديك زيادة في الوزن`
    h2.style.color ="red"
    return "لديك زيادة في الوزن"


}
}

function calculate () 
{
let weight = document.getElementById("weight").value
let height = document.getElementById("height").value

let bmi = BMI(weight,height)
let desc = Status(bmi)

let div = document.getElementById("result")

 div.innerText =   bmi +"==" + desc
}

