// var a = document.querySelector('.new-watchlist');
// console.log(a)
// for (var i = 0; i<a.length;i++) {
//     a[i].addEventListener('click',function(){

//      var b = this.offsetParent.parentNode.children[0].innerText;
//     console.log(b);


//     });
// };
const title = document.querySelector('.new-watchlist').offsetParent.parentElement.children[0].innerText
const service = document.querySelector('.new-watchlist').offsetParent.parentElement.children[1].innerText


async function newWatchHandler(event) {
    event.preventDefault();
  console.log(event.target);
  

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