function MediaPlayer(config){
    this.media = config.el // por ahora teniamos el video hardcoeado(video) estaba embebido, pero eso no es practico, por eso es mejor, pasar como parametro un objeto de configuracion 
    this.plugins = config.plugins || [] // vamos a declarar dentro del objeto un array donde pondremos todos los plugins, pasamos a index, para poder llenar este arreglo en la intacia.
    this.initPlugins() // recordar que al hacer metodos en el prototipo, aqui solo se llama, pero abajo se va a crear con proptype
}

MediaPlayer.prototype.initPlugins = function (){  // esta funcion hara cositas con todos los plugins que hayamos definido.
    this.plugins.forEach(plugin => {
                         // en este this se esta haciendo referencia a la instancia de player
        plugin.run(this) //  este metodo ya pertecece a los plugins, en este caso solo tenemos autoplay, ahi vamso a guardar metodo run.
    });// por cada plugin recibiremos una accion, por ello vamos a iterarlo.,dentro del foreach ejecutaremos su acciom, llamando a un metodo especifico. 
}
MediaPlayer.prototype.play = function(){
    this.media.play()
}
MediaPlayer.prototype.playOrPause = function() {
    if(this.media.paused === true) return this.media.play() 
    return this.media.pause()
}
MediaPlayer.prototype.mute = function(){
    this.media.muted = true;
}
MediaPlayer.prototype.unmute = function(){
    this.media.muted = false;
}
MediaPlayer.prototype.muteOrNoT = function(){
    if(this.media.muted) return this.media.muted = false;
        return this.media.muted = true;
}



export default MediaPlayer;
