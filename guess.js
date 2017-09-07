  document.getElementById("button").onclick = function guessTheNumber() {

     var num = Math.ceil(Math.random() * 10);
     var guess = document.getElementById('guess').value;
     var p = document.createElement('p');

     if (guess == num) {
       var t = document.createTextNode("You got it!");
       var b = document.createElement('button');
       var x = document.createTextNode('reset');
       b.appendChild(x);
       b.className += "resettt";
       document.getElementById('reset').appendChild(b);
     } else {
       var t = document.createTextNode("Nope, the number was " + num + "!");
     };

     p.appendChild(t);
     document.getElementById('answer').appendChild(p);
     document.getElementById('guess').value = "";

      return false;
    };

  document.getElementById('reset').onclick = function resetGame() {
    document.getElementById('answer').innerHTML = "";
    var parent = document.getElementById('reset').innerHTML="";
  }
