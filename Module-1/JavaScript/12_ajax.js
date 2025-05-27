function registerUser() {
  setTimeout(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({ name: "User", event: "Yoga" }),
      headers: { "Content-Type": "application/json" }
    })
    .then(res => res.json())
    .then(data => console.log("Success:", data))
    .catch(err => console.error("Error:", err));
  }, 1000);
}

registerUser();