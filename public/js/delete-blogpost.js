const deleteBlogpost = async (blogpost_id) => {
    const response = await fetch(`/api/blogposts/${blogpost_id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  
    if (response.ok) {
      document.location.reload();
    } else {
      alert("Failed to delete the post.");
    }
  };
  
  const deleteBlogpostHandler = (event) => {
    if (event.target.matches(".delete-post")) {
      const blogpost_id = event.target.getAttribute("data-post-id");
      console.log(blogpost_id);
      deleteBlogpost(blogpost_id);
    }
  };
  
  document.addEventListener("click", deleteBlogpostHandler);
