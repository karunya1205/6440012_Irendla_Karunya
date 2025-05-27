const eventName = "Music Festival";
const eventDate = "2025-06-15";
let availableSeats = 50;

console.log(`Event: ${eventName}, Date: ${eventDate}, Seats: ${availableSeats}`);

function register() {
  if (availableSeats > 0) {
    availableSeats--;
    console.log(`Registered! Seats left: ${availableSeats}`);
  }
}