// $(document).ready(function(){
var arr = ["Babe, you don't be puto to me", "UM, NO!", "EXCUSE YOU!","I get to pinch your nipples now", "QUESO!", "Why do I have a website!?", "I don't like it, I don't like it, I don't like it.", "Idioso"];
var i = 0;
// $('#button').click(function(){
//   $('#display').html(arr[i]);
//   i = (i+1) % arr.length;
// });
// });
document.body.style.backgroundColor = '#67D5B5';
document.getElementById("button").addEventListener('click', function(){
  var display = "";
  display += arr[i];
  i = (i+1) % arr.length;
  document.getElementById('display').innerHTML = display;
});
