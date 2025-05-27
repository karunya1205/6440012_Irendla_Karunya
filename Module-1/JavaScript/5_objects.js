function Event(name, date, seats) {
  this.name = name;
  this.date = date;
  this.seats = seats;
}

Event.prototype.checkAvailability = function() {
  return this.seats > 0;
};

const event = new Event("Coding Bootcamp", "2025-07-10", 20);
console.log(Object.entries(event));