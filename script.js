let buttinOne=document.querySelector(".questOne");
let buttinTwo=document.querySelector(".questTwo");

let message=document.querySelector("p");
// let speedInput=
// .finishOne, .finishTwo, .finishThree, .finishFour
let age;

buttinOne.onclick=function(){
  let numInput=document.querySelector(".numBox"); // returns html element
  let numValue = numInput.value; // returns string
  let num = Number(numValue); // parse to number
  console.log(typeof num, num >= 15, num <= 18);
  if(num >= 15 && num <= 18){ 
    // numValue > 15 means numValue is greater than 15
    // numValue >= 15 means numValue is greater than or equal to 15
    // numValue === 15 means numValue equal to 15
  document.querySelector(".hide").style.display="block";
} else{
    document.querySelector(".message").innerHTML="Try Again. . .";
}
    age = num;
  
};

buttinTwo.onclick = function() {
    // clear original
     document.querySelector(".finishFour").style.display = "none";
  		document.querySelector(".finResFour").style.display = "none";
         document.querySelector(".finishOne").style.display = "none";
  		document.querySelector(".finResOne").style.display = "none";
            document.querySelector(".finishTwo").style.display = "none";
  		document.querySelector(".finResTwo").style.display = "none";
      document.querySelector(".finishThree").style.display = "none";
  		document.querySelector(".finResThree").style.display = "none";
    
      let speed = document.querySelector(".speed").value.toLowerCase().trim();
    console.log(document.querySelector(".speed").value);
    if(speed === "fast" && age <= 18 && age >= 17){
        document.querySelector(".finishFour").style.display = "block";
  		document.querySelector(".finResFour").style.display = "block";
    } else if (speed === "fast" && age <= 16 && age >= 15){
        document.querySelector(".finishOne").style.display = "block";
  		document.querySelector(".finResOne").style.display = "block";
    } else if (speed === "slow" && age <= 16 && age >= 15){
        document.querySelector(".finishTwo").style.display = "block";
  		document.querySelector(".finResTwo").style.display = "block";
    } else if (speed === "slow" && age <= 18 && age >= 17 ){
        document.querySelector(".finishThree").style.display = "block";
  		document.querySelector(".finResThree").style.display = "block";
    }
    console.log("speed: ", speed, ", age: ", age);
};
