fetch('https://www.balldontlie.io/api/v1/players')
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

// Path: api\main.js
fetch('https://www.balldontlie.io/api/v1/players')
    .then(response => response.json())
    .then(response => {
        const players = response.data;
        players.forEach(player => {
            console.log(player);
        });
    })
    .catch(err => console.error(err));
    






