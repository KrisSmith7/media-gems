async function newWatchHandler() {
  
    const title = document.activeElement.offsetParent.parentElement.children[0].innerText
    const service = document.activeElement.offsetParent.parentElement.children[1].innerText

  

if (title&&service){
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
    alert('Added to Your Watchlist!');
} 
else {
    alert(response.statusText);
}
}

}
