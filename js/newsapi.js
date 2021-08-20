function foo() {
  fetch('https://api.allorigins.win/https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=f5f7ae594ad34dadbe4c0557dc6ed08d')
  .then(r =>  r.json().then(data => ({status: r.status, body: data})))
  .then(obj => console.log(obj));
}
