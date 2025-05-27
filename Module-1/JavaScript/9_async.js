async function fetchEvents() {
  document.body.innerHTML = "<p>Loading...</p>";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log("Events loaded:", data.slice(0, 3));
  } catch (err) {
    console.error("Fetch error:", err);
  }
}

fetchEvents();