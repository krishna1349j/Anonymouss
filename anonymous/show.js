async function fetchConfessions() {
  const { data, error } = await supabaseClient
    .from("confessions")
    .select("*");

  if (error) {
    console.error("Error fetching confessions:", error);
    return;
  }

  const now = new Date();
  const showMessages = data.filter(item => {
    const createdAt = new Date(item.created_at);
    const diffHours = (now - createdAt) / (1000 * 60 * 60);
    return diffHours >= 12;
  });

  const container = document.getElementById("confessionList");
  container.innerHTML = "";

  if (showMessages.length === 0) {
    container.innerHTML = "<p>No messages yet. Come back later.</p>";
    return;
  }

  showMessages.forEach(item => {
    const div = document.createElement("div");
    div.className = "message";
    div.innerText = item.message;
    container.appendChild(div);
  });
}

fetchConfessions();
