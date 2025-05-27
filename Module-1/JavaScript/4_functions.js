function addEvent(name, category) {
  return { name, category };
}

function registerUser(eventName) {
  console.log(`User registered for ${eventName}`);
}

function filterEventsByCategory(events, category) {
  return events.filter(e => e.category === category);
}

// Closure example
function categoryTracker() {
  let count = 0;
  return function() {
    count++;
    console.log(`Registrations in category: ${count}`);
  };
}

const trackMusic = categoryTracker();
trackMusic(); trackMusic();