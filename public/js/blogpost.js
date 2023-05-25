
const addComment = async (event) => {
    event.preventDefault();

    const commentContent = document.querySelector('#addcommentcontent').value.trim();
    const blogId = document.querySelector('.addcomment').getAttribute('data-id');

    const response = await fetch('/blogpost/comment', {
        method: 'POST',
        body: JSON.stringify({ commentContent, blogId }),
        headers: { 'Content-Type': 'application/json' },
    }) 
    
    if (response.ok) {
        document.location.replace(`/blogpost/${blogId}`);
    } else {
        alert(response.statusText);
    }
}
document
  .querySelector('.addcomment')
  .addEventListener('submit', addComment);