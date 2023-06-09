// Handlebars.registerPartial('updateInsert', '{{update}}');

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
      })
      const parsedResponse = await response.json();
      if (response.ok) {
        document.location.replace(`/blogpost/${parsedResponse.id}`);
        
      } else {
        alert(response.statusText);
      }
    }
  };

const openUpdateBlog = (e) => {
    const etarget = e.target;
    const blogId = etarget.getAttribute('data-blogid');
    console.log(blogId);
    document.location.replace(`/blogpost/update/${blogId}`);
}

const delBlog = async (e) => {
    try {
        const etarget = e.target;
        const blogId = etarget.getAttribute('data-blogid');
        const response = await fetch(`/api/dashboard/${blogId}`, {
            method: 'DELETE',
          });
          if (response.ok) {
            document.location.replace('/dashboard')
          } else {
            alert('Failed to delete blog')
          }
    } catch (err) {
        console.log(err);
    }
}

//setting up jquery style element selector for the entire userblogs in order to perform event delegation to target the individual buttons
const userBlogs = $('#userblogs');

if ($('.updatebtn')) {
    userBlogs.on('click', '.updatebtn', openUpdateBlog);
}


if ($('.delbtn')) {
    userBlogs.on('click', '.delbtn', delBlog);
}

  document
  .querySelector('.newblogpost')
  .addEventListener('submit', handleNewBlog);


