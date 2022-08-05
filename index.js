document.querySelector("button").addEventListener("click", function () {
  var rand = Math.floor(Math.random()*6) + 1;
  var diceimg = "images/dice" + rand + ".png";
  document.querySelectorAll("img")[0].setAttribute("src", diceimg);

  var rand2 = Math.floor(Math.random()*6) + 1;
  var diceimg2 = "images/dice" + rand2 + ".png";
  document.querySelectorAll("img")[1].setAttribute("src", diceimg2);

  if(rand > rand2){
    document.querySelector("h1").textContent = "😏 Player 1 won";
  }
  else if(rand === rand2){
    document.querySelector("h1").textContent = "🤝Draw🤝";
  }
  else{
    document.querySelector("h1").textContent = "Player 2 won 😏";
  }
})
