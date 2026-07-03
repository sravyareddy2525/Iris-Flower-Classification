function classifyFlower(){

let petal=document.getElementById("petal").value;

if(petal==""){
alert("Please enter petal length");
return;
}

let flower="";

if(petal<2){
flower="Iris Setosa";
}
else if(petal<5){
flower="Iris Versicolor";
}
else{
flower="Iris Virginica";
}

document.getElementById("result").innerHTML="Flower: "+flower;
}
