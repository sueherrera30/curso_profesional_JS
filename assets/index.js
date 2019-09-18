import MediaPlayer from './MediaPlayer.js';

const video = document.querySelector('video');
const btn = document.querySelector('button');

const player = new MediaPlayer({el: video}); //in stanceamos a mediaplayer y pasamos un objeto de configuracion dentro de las propiedades del a inastancia.

btn.onclick = () => {player.playOrPause()}




