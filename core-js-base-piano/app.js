let numberOfKeys = document.querySelectorAll(".key").length;
for (let i = 0; i < numberOfKeys; i++) {
  document.querySelectorAll(".key")[i].addEventListener("click", function () {
    let keyInnerId = this.id;
    playSound(keyInnerId);
    console.log(keyInnerId);
  });
}

document.addEventListener("keydown", function (event) {
  playSound(event.key);
});

function playSound(key) {
  switch (key) {
    case "a":
      let keyA = new Audio("sounds/01-C4.ogg");
      keyA.play();

      break;

    case "s":
      let keyS = new Audio("sounds/02-C4-diez.ogg");
      keyS.play();
      break;

    case "d":
      let keyD = new Audio("sounds/03-D4.ogg");
      keyD.play();
      break;

    case "f":
      let keyF = new Audio("sounds/04-D4-diez.ogg");
      keyF.play();
      break;

    case "g":
      let keyG = new Audio("sounds/05-E4.ogg");
      keyG.play();
      break;

    case "h":
      let keyH = new Audio("sounds/06-F4.ogg");
      keyH.play();
      break;

    case "j":
      let keyJ = new Audio("sounds/07-F4-diez.ogg");
      keyJ.play();
      break;

    case "k":
      let keyK = new Audio("sounds/08-G4.ogg");
      keyK.play();
      break;

    case "l":
      let keyL = new Audio("sounds/09-G4-diez.ogg");
      keyL.play();
      break;

    case "p":
      let keyP = new Audio("sounds/10-A4.ogg");
      keyP.play();
      break;

    case "o":
      let keyO = new Audio("sounds/11-A4-diez.ogg");
      keyO.play();
      break;

    case "i":
      let keyI = new Audio("sounds/12-B4.ogg");
      keyI.play();
      break;

    default:
      console.log(key);
  }
}
