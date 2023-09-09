const commentFormHandler = async (event) => {
    event.preventDefault();
  
    const blogpost_id = parseInt(window.location.pathname.split('/').pop());
    
    console.log(blogpost_id);
    const comment_text = document.querySelector("#add-comment-input").value;
    console.log(comment_text);
  
    if (blogpost_id && comment_text) {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ blogpost_id, comment_text }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace(`/blogposts/${blogpost_id}`);
      } else {
      alert("Please login to add comment");
      }
    }
  };
  
  
  const newCommentForm = document.querySelector('.add-comment-form');
  if (newCommentForm) {
    newCommentForm.addEventListener('submit', commentFormHandler);
  }
