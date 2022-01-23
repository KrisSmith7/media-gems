async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="review-title"]').value;
    const review_text = document.querySelector('input[name="review-text"]').value;
    // const user_id = document.querySelector('')
  
// is review text appropriate for the variable? => just_tech_news uses a post url here instead

    const response = await fetch(`/api/reviews`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            review_text
    }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
  
    if (response.ok) {
        document.location.replace('/homepage');
    } 
    else {
        alert(response.statusText);
    }
}

// need to implement the following class name in css/tailwind to change the button for deleting
document.querySelector('.new-review-form').addEventListener('submit', newFormHandler);