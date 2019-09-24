function AutoPlay(){}
AutoPlay.prototype.run = function(player) { // recibimos una instacia del mediapleyer.
    if(!player.muted){
        player.muted = true;
    }
    player.play()
}

export default AutoPlay;