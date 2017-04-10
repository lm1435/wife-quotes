// $(document).ready(function(){
var arr = ["What is this?", "UM, NO!", "EXCUSE YOU!","WHY DO I HAVE A WEBSITE?", "DELETE IT!", ".....", "I don't like it, I don't like it, I don't like it.", "You better delete this!"];
var imageArray = ["images/1.jpg","images/2.jpg","images/3.jpg",
  "images/4.jpg","images/5.jpg","images/6.jpg", "images/7.jpg", "images/8.jpg"];
var colors = ['#67D5B5', '#EE7785', '#C89EC4', '#84B1ED', '#D4DFE6', '#9DC3C1', '#FFEEE4', '#dedcee'];
var i = 0;
var imageDiv = document.getElementById('images');
imageDiv.classList.add("img-responsive");
imageDiv.style.margin = "auto";
document.getElementById('display').style.fontSize = "32px";
var body = document.body;

document.getElementById("button").addEventListener('click', function(){
  body.style.backgroundColor = colors[i];
  imageDiv.setAttribute("src", imageArray[i]);
  var display = "";
  display += arr[i];
  i = (i+1) % arr.length;
  document.getElementById('display').innerHTML = display;
});
