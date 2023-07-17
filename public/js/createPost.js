const postFormHandler = async (event) => {
  event.preventDefault();

  const post_title = document.querySelector("#new-post-title").value.trim();
  const post_text = document.querySelector("#new-post-content").value.trim();

  if (post_title && post_text) {
    const response = await fetch(`/api/posts`, {
      method: "POST",
      body: JSON.stringify({ post_title, post_text }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alertlert(response.statusText);
    }
  }
};

document
  .querySelector(".new-post-form")
  .addEventListener("submit", postFormHandler);
