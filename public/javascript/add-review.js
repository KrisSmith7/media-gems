async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="review-title"]').value;
    const review_text = document.querySelector('input[name="review-text"]').value;
  
// is review text appropriate for the variable? => just_tech_news uses a post url here instead

    const response = await fetch(`/apiRoutes/review-Routes`, {
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
        // are we implementing the dashboard? 
            // if not, change to '/'
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);