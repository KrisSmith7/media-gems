async function editFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="review-title"]').value.trim();
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    // fetch request for particular review via id => edit the review
    const response = await fetch(`/api/reviews/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
  
    if (response.ok) {
        document.location.replace('/homepage/');
    } 
    else {
        alert(response.statusText);
    }
}

// Change the class name in the css/tailwind
document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);