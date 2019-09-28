import MediaPlayer from './MediaPlayer.js';
import AutoPLay from  '../plugins/AutoPlay.js'; // hay que especificar la terminación del archivo para no crear confuciones.
import AutoPause from '../plugins/AutoPause.js'


const video = document.querySelector('video');
const btn = document.querySelector('button');
const btnUnmute = document.getElementById('unmute');
console.log(btnUnmute)


const player = new MediaPlayer({
    el: video, 
    // Duda: ¿por que este autoplay sin llamarlo con parentesis funciona? 
    plugins:[new AutoPLay(), new AutoPause()],
}); //in stanceamos a mediaplayer y pasamos un objeto de configuracion dentro de las propiedades del a inastancia

btn.onclick = () => {player.playOrPause()}
btnUnmute.onclick = () => {player.muteOrNoT()}

// para SERVICE WORKERS que detectsara si el navegasdor del usuario le da apoyo 
// para poder recibir los service workers ,no todos lo tiene.
// se registra el archiv, que sera tal cual es service worker.

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message)
    })
}




