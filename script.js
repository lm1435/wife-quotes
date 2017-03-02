// $(document).ready(function(){
var arr = ["Babe, you don't be puto to me", "UM, NO!", "EXCUSE YOU!","I get to pinch your nipples now", "QUESO!", "Why do I have a website!?", "I don't like it, I don't like it, I don't like it.", "Idioso"];
var imageArray = ["images/1.jpg","images/2.jpg","images/3.jpg",
  "images/4.jpg","images/5.jpg","images/6.jpg", "images/7.jpg", "images/8.jpg"];
var colors = ['#67D5B5', '#EE7785', '#C89EC4', '#84B1ED', '#D4DFE6', '#9DC3C1', '#FFEEE4', '#dedcee'];
var i = 0;
var j = 0;
var h = 0;
var imageDiv = document.getElementById('images');
imageDiv.classList.add("img-responsive");
imageDiv.style.margin = "auto";
document.getElementById('display').style.fontSize = "32px";
var body = document.body;

document.getElementById("button").addEventListener('click', function(){
  body.style.backgroundColor = colors[h];
  h = (h+1) % colors.length;
  imageDiv.setAttribute("src", imageArray[j]);
  j = (j+1) % imageArray.length;
  var display = "";
  display += arr[i];
  i = (i+1) % arr.length;
  document.getElementById('display').innerHTML = display;
});
