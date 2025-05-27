const events = [
  { name: "Yoga Class", date: "2025-06-01", seats: 0 },
  { name: "Art Workshop", date: "2025-07-01", seats: 5 },
];

events.forEach(event => {
  const isFuture = new Date(event.date) > new Date();
  if (isFuture && event.seats > 0) {
    console.log(`Upcoming: ${event.name}`);
  } else {
    console.log(`Skipping: ${event.name}`);
  }
});

try {
  let selectedEvent = events[1];
  if (selectedEvent.seats <= 0) throw new Error("No seats left!");
  selectedEvent.seats--;
  console.log("Registered!");
} catch (error) {
  console.error("Error during registration:", error.message);
}