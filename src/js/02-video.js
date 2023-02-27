import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function updateTime (timeUpdate) {
	localStorage.setItem("videoplayer-current-time", JSON.stringify(timeUpdate.seconds))}

player.on('timeupdate', throttle((timeUpdate) => updateTime(timeUpdate), 1000));

player.setCurrentTime(localStorage.getItem("videoplayer-current-time")); 
