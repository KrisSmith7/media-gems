// var a = document.querySelectorAll('.new-watchlist');
// console.log(a)
// for (var i = 0; i<a.length;i++) {
//     a[i].addEventListener('click',function(){

//      var b = a[i].offsetParent.parentElement.children[0].innerText;
//     console.log(b);


//     });
// };

// const id = document.querySelector(".new-watchlist").value




async function newWatchHandler(event) {
    // event.preventDefault();
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
    console.log('added!');
} 
else {
    alert(response.statusText);
}
}

}
document.querySelector('.new-watchlist').addEventListener('click', newWatchHandler);
