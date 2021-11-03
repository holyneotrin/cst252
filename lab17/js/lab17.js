// author: Trinity Phan-Low
// date: 11.1.2021
// public domain
//

//produces info through button
$("#button").click(function(){
  class Vehicle{
    //stating the different values
    constructor(make, model, year, color, extras)
    {
      this.make = make;
      this.model = model;
      this.year = year;
      this.color = color;
      this.extras = extras;
    }
    //returns the info
    info(){
      return this.make + this.model + this.year + "is " + this.color + " with " + this.extras;

  }
}
//the specific JavaScript class is summoned during the click with the right info.
subaru = new Vehicle("~Subuwu ", "Impweze ", "2022 ", "Saphfwire Bwue Pearl", "no extwas~");
  $("#output").append("<p>"+ subaru.info() + "</p>");

horse = new Vehicle("Horse ", "Appaloosa ", "2018 ", "Tan ", "with white spots");
  $("#output").append("<p>"+ horse.info() + "</p>");
});
