var theModel = document.getElementById("brand");

var theCar = {
    brand: "Infiniti",
    model: "Q60",
    year: 2021,
    condition: "Excellent"
}

theModel.innerHTML = theCar.brand;
document.getElementById("model").innerHTML = theCar.model;
document.getElementById("year").innerHTML = theCar.year;
document.getElementById("condition").innerHTML = theCar.condition;