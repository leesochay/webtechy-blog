const addBlogpostFormHandler = async (event) => {
  event.preventDefault();

  const blogpost_title = document.querySelector("#new-blogpost_title").value;
  const blogpost_text = document.querySelector("#new-blogpost_text").value;

  if (blogpost_title && blogpost_text) {
    const response = await fetch('/api/blogposts', {
    method: 'POST',
    body: JSON.stringify({ blogpost_title, blogpost_text }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to create a new post.');
  }
}
};

const newBlogpostForm = document.querySelector('.new-blogpost-form');
if (newBlogpostForm) {
  newBlogpostForm.addEventListener('submit', addBlogpostFormHandler);
}
