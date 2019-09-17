const video = document.querySelector('video');
const btn = document.querySelector('button');

function MediaPlayer(config){
    this.media = config.el // por ahora teniamos el video hardcoeado(video) estaba embebido, pero eso no es practico, por eso es mejor, pasar como parametro un objeto de configuracion 
}

MediaPlayer.prototype.playOrPause = function() {
    if(this.media.paused === true) return this.media.play() 
    return this.media.pause()
}
const player = new MediaPlayer({el: video}); //in stanceamos a mediaplayer y pasamos un objeto de configuracion dentro de las propiedades del a inastancia.
btn.onclick = () => {player.playOrPause()}












// nota: entender comportsamiento de this en funcion play 
