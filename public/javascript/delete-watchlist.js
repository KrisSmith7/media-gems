async function deleteFormHandler(event) {
    // event.preventDefault();
    const id = document.activeElement.value
    
    // make a fetch request to a particular review based on id
    const response = await fetch(`/api/watchlist/${id}`, {
        // delete the particular review that was found
        method: 'DELETE'
    });
  
    if (response.ok) {
          document.location.replace('/mywatchlist/');
        console.log(id)
    } 
    else {
        alert(response.statusText);
    }
}
  
// need to implement the following class name in css/tailwind to change the button for deleting
// document.querySelector('.delete-watch-btn').addEventListener('click', deleteFormHandler);