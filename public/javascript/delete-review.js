async function deleteFormHandler(event) {
    event.preventDefault();
  
    // in the url, split the location into an array, use everything before the first /
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    // make a fetch request to a particular review based on id
    const response = await fetch(`/api/reviews/${id}`, {
        // delete the particular review that was found
        method: 'DELETE'
    });
  
    if (response.ok) {
        document.location.replace('/reviews/');
    } 
    else {
        alert(response.statusText);
    }
}
  
// need to implement the following class name in css/tailwind to change the button for deleting
document.querySelector('.delete-review-btn').addEventListener('click', deleteFormHandler);