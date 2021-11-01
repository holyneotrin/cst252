// author: Trinity Phan-Low
// date: 11.1.2021
// public domain
//

$("#button").click(function(){
  function Vehicle(Make, Model, Year, Color, Extras) {
    this.make = Make;
    this.model = Model;
    this.year = Year;
    this.color = Color;
    this.extras = Extras;
    this.talk = function(){
      return this.make + this.model + this.year + "is " + this.color + " with " + this.extras;

  }
}

var subaru = new Vehicle("~Subuwu ", "Impweze ", "2022 ", "Saphfwire Bwue Pearl", "no extwas~");
  $("#output").append("<p>"+ subaru.talk() + "</p>");

var horse = new Vehicle("Horse ", "Appaloosa ", "2018 ", "Tan ", "with white spots");
  $("#output").append("<p>"+ horse.talk() + "</p>");
});
