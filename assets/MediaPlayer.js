function MediaPlayer(config){
    this.media = config.el // por ahora teniamos el video hardcoeado(video) estaba embebido, pero eso no es practico, por eso es mejor, pasar como parametro un objeto de configuracion 
}

MediaPlayer.prototype.playOrPause = function() {
    if(this.media.paused === true) return this.media.play() 
    return this.media.pause()
}
export default MediaPlayer;
