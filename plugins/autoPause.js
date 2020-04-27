class AutoPause {
    constructor(){
        this.threshhold = 0.25,
        this.handleIntersection = this.handleIntersection.bind(this);
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this)
    }
    // recibe un metodo 
    run(player) {
        //para poder llamar cosas ncesitamos 
        this.player = player;
        // no funcionaba por que el que ejecuta el video es el IntersectionObserver y cambio el 
        //concepto de this.
        const observer = new IntersectionObserver(this.handleIntersection,
            {
                threshhold: this.threshhold,
            });

        // el observador mirara el video que se reproduce.
        observer.observe( this.player.media);
        document.addEventListener("visibilitychange", this.handleVisibilityChange)
    }
    // podremos enlistar todos los elementos 
    // en este caso solo hay uno,
    handleIntersection(entries){
        const entry = entries[0];
        // si l oque recibe el intersector, es mayor que a lo del humbral entonces se hara visible.-- por ejeplo si mandar mas de un elemento como las classes, devolvera un arreglo con mas indices.
        if(isVisible) {
            this.player.play()
        } else {
            this.player.pause();
        }    
    }

    handleVisibilityChange(){
        const isVisible = document.visibilityState === "visible"
        if(isVisible){
            this.player.play()
        } else {
            this.player.pause();
        }
    }
}

export default AutoPause; 

 // en este mdetodo construiremos el intersectionObserver
// Recibe dos argumentos, un handler que va a recibir la información 
// es el que va a observar y el segundo es un objeto de configuración.
// a su vez el hanlder será un metodo de la classe y el objeto de configuración 
// necesitamos pasarle un HUMBRAl -> treshold lo que hara  es DEFINIR  que porciento de 
// elemento de contenedor debe de temner para darte aviso,cada que lleguemos a ese momento el estará observando y nos va a avisar.