var myImage = document.querySelector('img');

myImage.onclick = function() {

        var mySrc = myImage.getAttribute('src');

        if(mySrc === 'images/portal-boy.png') {
                myImage.setAttribute ('src','images/propic.jpg');
        } 
        else {
                myImage.setAttribute ('src','images/portal-boy.png');
        }

}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {

  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Hi, ' + myName + '!';

}

if(!localStorage.getItem('name')) {
  setUserName();
} 
else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hi, ' + storedName + '!';
}

myButton.onclick = function() {
  setUserName();
}


