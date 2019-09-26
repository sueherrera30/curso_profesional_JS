function MediaPlayer(config){
    this.media = config.el // por ahora teniamos el video hardcoeado(video) estaba embebido, pero eso no es practico, por eso es mejor, pasar como parametro un objeto de configuracion 
    this.plugins = config.plugins || [] // vamos a declarar dentro del objeto un array donde pondremos todos los plugins, pasamos a index, para poder llenar este arreglo en la intacia.
    this.initPlugins() // recordar que al hacer metodos en el prototipo, aqui solo se llama, pero abajo se va a crear con proptype
}

MediaPlayer.prototype.initPlugins = function (){  // esta funcion hara cositas con todos los plugins que hayamos definido.
     const player = {
        play: () => this.play(),
        pause: () => this.playOrPause(),
        media: this.media,
        get muted(){
            return this.media.muted
        },
        set muted(value) {
            // if( value === true){
            //     this.media.muted = true;
            // }else {
            //     this.media.muted = false;
            // }
            // es mejor :
            // no estamos trabajando sobre propiedades existentes,NO estamos cambiando directamente el valor de muted
            return this.media.muted = value; // si no através de propuedad virtual, recibimos un valor que hace algo diferente,

        }
     }                                    
    this.plugins.forEach(plugin => {
        plugin.run(player)    // en este this se esta haciendo referencia a la instancia de player
                            //  este metodo ya pertecece a los plugins, en este caso solo tenemos autoplay, ahi vamso a guardar metodo run.
    });                     // por cada plugin recibiremos una accion, por ello vamos a iterarlo.,dentro del foreach ejecutaremos su acciom, llamando a un metodo especifico. 
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
