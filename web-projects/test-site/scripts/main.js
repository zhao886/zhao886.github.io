let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    console.log(mySrc)
    if(mySrc === 'images/duo.jpg') {
      myImage.setAttribute('src', 'images/firefox2.png');
    } else {
      myImage.setAttribute('src', 'images/duo.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('请输入你的名字');
  if(!myName){
    setUserName();
  }
  localStorage.setItem('name', myName);
  myHeading.textContent = '多多喜欢' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = '多多喜欢' + storedName;
}
myButton.onclick = function() {
  setUserName();
}





