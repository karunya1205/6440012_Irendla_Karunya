const events = [{ name: "Yoga", date: "2025-06-01", seats: 10 }];

function showEvent({ name, date }) {
  console.log(`Event: ${name} on ${date}`);
}

const clone = [...events];
showEvent(clone[0]);