let events = [];

events.push({ name: "Dance Show", type: "music" });

const musicEvents = events.filter(e => e.type === "music");

const eventCards = events.map(e => `<div>${e.name}</div>`);

console.log(eventCards.join(""));