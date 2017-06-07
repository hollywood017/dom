var myButton = document.getElementById('clicky-thing');
var submitBtn = document.getElementById('submit-info');
var currentImage = 'nike';

myButton.onclick = function () {
  var myImage = document.getElementById('my-image');

  if (currentImage === 'nike') {
    myImage.src = 'https://media1.giphy.com/media/yhRnl31SmMec/giphy.gif';
    currentImage = 'willem defoe';
  }
  else {
    myImage.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Old_Nike_logo.jpg/220px-Old_Nike_logo.jpg';
    currentImage = 'nike';
  }
};

submitBtn.onclick = function () {
  var input1 = document.getElementById('name-input');
  var input2 = document.getElementById('age-input');

  document.write(input1.value + ' ' + input2.value);
};
