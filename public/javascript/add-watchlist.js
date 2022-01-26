async function newWatchHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('.watchlist-title').innerText;
    const service = document.querySelector('.watchlist-service').innerText;
   
  


    const response = await fetch(`/api/watchlist`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            service
            
}),
    headers: {
        'Content-Type': 'application/json'
    }
});

if (response.ok) {
    console.log('added!');
} 
else {
    alert(response.statusText);
}
}


document.querySelector('.new-watchlist').addEventListener('click', newWatchHandler);