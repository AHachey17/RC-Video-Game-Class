//Create a street fighter character class that makes fighting game characters with 4 properties and 3 methods

let streetFighter = {
  bodytype: 'built',
  height: 'tall',
  weight: 165,
  teamColor: 'blue'
}

streetFighter.rightPunch = function rp(){console.log('Punch Right')}


//Leon's way:
class fightingGameCharacter{
  constructor(punch, kick, specialMove, health){//parameters
    this.punch = punch //setting the properties for the objects
    this.kick - kick 
    this.specialmove = specialMove
    this.catchPhase = catchPhase
  }

taunt(){
  alert(`Yu can't handle my ${this.specialMove}`)
}
sayCatchPhase(){
  alert(this.catchPhase)
}
pause(){
  console.log('Taking a break')
}

}



//typed in console: let ryu = new finghtGameCharater('high', 'kdfmdf', 'ijijfef', 'getoverhere')
//ryu.taunt()