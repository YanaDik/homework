let playlist = document.getElementById('playlist');
let iconHeart = document.getElementById('icon-heart');

var playList = [
	{
		author: 'led zeppelin',
		song: 'stairway to heaven',
		duration: '2:03'
	},
	{
		author: 'queen',
		song: 'bohemian rhapsody',
		duration: '2:30'
	},
	{
		author: 'lynyrd skynyrd',
		song: 'free bird',
		duration: '1:56'
	},
	{
		author: 'deep purple',
		song: 'smoke on the water',
		duration: '3:03'
	},
	{
		author: 'jimi hendrix',
		song: 'all along the watchtower',
		duration: '2:53'
	},
	{
		author: 'AC/DC',
		song: 'back in black',
		duration: '2:43'
	},
	{
		author: 'queen',
		song: 'we will rock you',
		duration: '2:13'
	},
	{
		author: 'metallica',
		song: 'enter sandman',
		duration: '3:03'
	}
];

playList.forEach((item, i, arr) => {
	let playlistLi = document.createElement('li');
	playlistLi.setAttribute('class', 'ba-tune');

	let playlistDivBaTune = document.createElement('div');
	playlistDivBaTune.setAttribute('class', 'ba-tune__top');
	let playlistSpanDuration = document.createElement('span');
	playlistSpanDuration.setAttribute('class', 'ba-tune__duration');
	playlistSpanDuration.innerText = item.duration;
	playlistDivBaTune.appendChild(playlistSpanDuration);
	let playlistSpanAuthor = document.createElement('span');
	playlistSpanAuthor.setAttribute('class', 'ba-tune__author');
	playlistSpanAuthor.innerText = item.author;
	playlistDivBaTune.appendChild(playlistSpanAuthor);

	let playlistDivContent = document.createElement('div');
	let playlistDivBaSong = document.createElement('p');
	playlistDivBaSong.setAttribute('class', 'ba-tune__song');
	playlistDivBaSong.innerText = item.song;
	playlistDivContent.appendChild(playlistDivBaTune);
	playlistDivContent.appendChild(playlistDivBaSong);

	playlistLi.appendChild(playlistDivContent);
	playlistLi.appendChild(iconHeart);
	playlist.appendChild(playlistLi);
});
