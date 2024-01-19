
let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

let mainImg = document.getElementById("main-image")
let smallImg = "https://static.wixstatic.com/media/93e8a3_9fa23196ddf6427a9da574e2b31a13d2~mv2.jpg/v1/fill/w_619,h_420,al_c,q_80,enc_auto/93e8a3_9fa23196ddf6427a9da574e2b31a13d2~mv2.jpg"
let mediumImg ="https://static.wixstatic.com/media/93e8a3_9fa23196ddf6427a9da574e2b31a13d2~mv2.jpg/v1/fill/w_1822,h_420,al_c,q_85,enc_auto/93e8a3_9fa23196ddf6427a9da574e2b31a13d2~mv2.jpg"

let largeImg = "https://static.wixstatic.com/media/93e8a3_9fa23196ddf6427a9da574e2b31a13d2~mv2.jpg/v1/fill/w_1920,h_166,al_c,q_80,enc_auto/93e8a3_9fa23196ddf6427a9da574e2b31a13d2~mv2.jpg"
if (screenWidth < 600) {
    mainImg.src = smallImg;
    mainImg.style.height =" 317px"
  } else if (screenWidth < 2300) {
    mainImg.src = mediumImg;
    mainImg.style.height ="352px"

  } else {
    mainImg.src = largeImg;
  }
console.log(screenWidth)
  console.log(smallImg)
  console.log(mediumImg)
  console.log(largeImg)