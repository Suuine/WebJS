(function(){
  console.log("---First Task---");
  var names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

  for (let name of names) {
    if (name.toLowerCase().startsWith("j")) {
      byeSpeaker.speak(name);
    } else {
      helloSpeaker.speak(name);
    }
  }

  console.log("---Second Task---");
  console.log("Telling which length of names is to 5:");
  var namesForSecond = ["Liner", "Michael", "Olia", "Ben", "Kaye", "Ace", "Sua", "Vlad", "Artem", "Anastasia", "Homa"];

  for (let name of namesForSecond){
    if (name.length > 5) {
      lengthBigger.tell(name);
    } else if (name.length == 5) {
      lengthEqual.tell(name);
    } else {
      lengthSmaller.tell(name);
    }
  }
})();