
const handleNewBlog = async (event) => {
    event.preventDefault();
  
    // Collect values from the newblogpost form
    const blogTitle = document.querySelector('#blogtitle').value.trim();
    const blogContent = document.querySelector('#blogcontent').value.trim();

    if(!blogTitle) {
        alert('Please include a blog title!')
        return;
    } else if (!blogContent) {
        alert('Please include content for your blog!')
        return;
    } else  {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/dashboard/newblog', {
        method: 'POST',
        body: JSON.stringify({ blogTitle, blogContent }),
        headers: { 'Content-Type': 'application/json' },
      });


  
      if (response.ok) {
        
        // If successful, redirect the browser to the blogpost/:id page
        document.location.replace(`/blogpost/${response.id}`);
      } else {
        alert(response.statusText);
      }
    }
  };

  document
  .querySelector('.newblogpost')
  .addEventListener('submit', handleNewBlog);
