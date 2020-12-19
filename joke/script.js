 const joke = document.getElementById('joke');
 const btn = document.querySelector('.btn');
 getJoke();

 function getJoke() {
     fetch('https://icanhazdadjoke.com', {
             headers: {
                 Accept: 'application/json'
                     // 'Content-Type': 'application/x-www-form-urlencoded',
             }
         }).then(res => res.json())
         .then(data => {
             joke.innerText = data.joke;
         })
         .catch(e => console.error(e));
 }
 btn.addEventListener('click', getJoke);