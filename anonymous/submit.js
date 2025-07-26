document.getElementById("confessForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const message = document.getElementById("confession").value;

  if (!message.trim()) return alert("Message cannot be empty");

  const { error } = await supabaseClient
    .from("confessions")
    .insert([{ message }]);

  if (error) {
    alert("Error submitting message");
    console.error(error);
  } else {
    alert("Message submitted! It will appear after 12 hours.");
    document.getElementById("confession").value = "";
  }
});
