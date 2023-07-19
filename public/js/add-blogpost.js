async function newFormHandler(event) {
  event.preventDefault();
  const blogpost_title = document.querySelector("#blogpost_title").value;
  const blogpost_text = document.querySelector("#blogpost_text").value;
  // Send fetch request to add a new blogpost
  const response = await fetch(`/api/blogpost`, {
    method: "POST",
    body: JSON.stringify({
      blogpost_title,
      blogpost_text,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  //if the blogpost is added, the 'all' template will be rerendered
  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to add blogpopst");
  }
}

document
  .querySelector(".new-blogpost-form")
  .addEventListener("submit", newFormHandler);
