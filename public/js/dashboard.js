
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
        console.log(response.id);
      if (response.ok) {
        document.location.replace(`/blogpost/${response.id}`);
        
      } else {
        alert(response.statusText);
      }
    }
  };

const updateBlog = () => {

}

const delBlog = async (e) => {
    try {
        const etarget = e.target;
        console.log(etarget.parentNode);
        const response = await fetch('/api/dashboard/:id', {
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





document.querySelector('.updatebtn').addEventListener('click', updateBlog)

document.querySelector('.delbtn').addEventListener('click', delBlog)

  document
  .querySelector('.newblogpost')
  .addEventListener('submit', handleNewBlog);


