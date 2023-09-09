const editBlogpostFormHandler = async (event) => {
    event.preventDefault();
    
    const blogpost_id = parseInt(window.location.pathname.split('/').pop());
    const blogpost_text = document.querySelector("#edit-blogpost_text").value.trim();
     
    console.log(blogpost_id);
    console.log(blogpost_text);
    
    if (blogpost_id && blogpost_text) {
      const response = await fetch(`/api/blogposts/${blogpost_id}`, {
        method: "PUT",

        body: JSON.stringify({ blogpost_text }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert("Failed to update a post.");
      }
    }
  };

  document.querySelector(".edit-blogpost-form").addEventListener("submit", editBlogpostFormHandler);
  
  const editBlogpostBtn = document.querySelector("#edit-blogpost");
  if (editBlogpostBtn) {
    editBlogpostBtn.addEventListener("click", editBlogpostFormHandler);
    }
    