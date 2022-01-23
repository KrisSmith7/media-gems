async function logout() {

    const response = await fetch('/api/users/logout', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
    });
  
    // if the fetch request has no issues, return to homepage
    if (response.ok) {
        document.location.replace('/');
    } 
    else {
        alert(response.statusText);
    }
}
  
document.querySelector('.logout').addEventListener('click', logout);