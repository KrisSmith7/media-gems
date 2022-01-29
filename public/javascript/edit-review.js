async function editFormHandler(event) {
    event.preventDefault();
  
    // const title = document.querySelector('input[name="review-title"]').value.trim();
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    const edit_title = document.querySelector('#edit-title').value.trim();
    const edit_text = document.querySelector('#edit-text').value;
    const edit_service = document.querySelector('#edit-service').value.trim();
   

    // fetch request for particular review via id => edit the review
    const response = await fetch(`/api/reviews/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            edit_title,
            edit_text,
            edit_service

        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
  
    if (response.ok) {
        document.location.replace('/reviews');
    } 
    else {
        alert('Please be sure all fields are completed.');
    }
}


// Change the class name in the css/tailwind
document.querySelector('#edit-reviews-btn').addEventListener('click', editFormHandler);