
const updateBlog = async (event) => {
    event.preventDefault();

    const updateBlogTitle = document.querySelector('#updateblogtitle').value.trim();
    const updateBlogContent = document.querySelector('#updateblogcontent').value.trim();
    const blogId = document.querySelector('.updateblog').getAttribute('data-id');

    const response = await fetch('/api/dashboard', {
        method: 'PUT',
        body: JSON.stringify({ updateBlogTitle, updateBlogContent, blogId }),
        headers: { 'Content-Type': 'application/json' },
    }) 
    
    if (response.ok) {
        document.location.replace(`/blogpost/${blogId}`);
    } else {
        alert(response.statusText);
    }
}
document
  .querySelector('.updateblog')
  .addEventListener('submit', updateBlog);