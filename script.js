// $(document).ready(function(){
var arr = ["Babe, you don't be puto to me", "UM, NO!", "EXCUSE YOU!","I get to pinch your nipples now", "QUESO!", "Why do I have a website!?", "I don't like it, I don't like it, I don't like it.", "Idioso"];
var imageArray = ["_images/1.jpg","_images/2.jpg","_images/3.jpg",
  "_images/4.jpg","_images/5.jpg","_images/6.jpg", "_images/7.jpg", "_images/8.jpg"];
var colors = ['#67D5B5', '#EE7785', '#C89EC4', '#84B1ED', '#D4DFE6', '#9DC3C1', '#FFEEE4', '#dedcee'];
var i = 0;
// document.body.style.backgroundColor = '#67D5B5';
document.getElementById("button").addEventListener('click', function(){
  var display = "";
  display += arr[i];
  i = (i+1) % arr.length;
  document.getElementById('display').innerHTML = display;
});
