const myHeading = document.querySelector('h1');

var url = 'https://newsapi.org/v2/top-headlines?' +
          'sources=bbc-news&' +
          'apiKey=f5f7ae594ad34dadbe4c0557dc6ed08d';
!var req = new Request(url);
!fetch(req)
!    .then(function(response) {
!        console.log(response.json());
!    })

var urlpy = new Request(83.187.184.226:12345);
fetch(urlpy)
myHeading.textContent = 'Ximple';
