alert ('Stop there');

var url = 'https://newsapi.org/v2/top-headlines?' +
          'sources=bbc-news&' +
          'apiKey=f5f7ae594ad34dadbe4c0557dc6ed08d';
var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    })

const restest = document.getElementById('test');
!message = response
restest.innerHTML = 'XX';

const myHeading = document.querySelector('h1');

myHeading.textContent = 'XXX';
