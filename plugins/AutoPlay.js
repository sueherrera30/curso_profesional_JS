function  AutoPlay(){}
AutoPlay.prototype.run = function(player) { // recibimos una instacia del mediapleyer.
    player.mute()
    player.play()
}

export default AutoPlay;