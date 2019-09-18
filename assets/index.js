import MediaPlayer from './MediaPlayer.js';
import AutoPLay from  '../plugins/AutoPlay.js'; // hay que especificar la terminación del archivo para no crear confuciones.


const video = document.querySelector('video');
const btn = document.querySelector('button');
const btnUnmute = document.getElementById('unmute');
console.log(btnUnmute)


const player = new MediaPlayer({el: video, plugins:[new AutoPLay ]}); //in stanceamos a mediaplayer y pasamos un objeto de configuracion dentro de las propiedades del a inastancia

btn.onclick = () => {player.playOrPause()}
btnUnmute.onclick = () => {player.muteOrNoT()}





