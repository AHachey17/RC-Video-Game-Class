//Create a street fighter character class that makes fighting game characters with 4 properties and 3 methods

class SuperMonkeyBall{
  constructor(name, weight, speed, specialDance){
  this.name = name
  this.weight = weight
  this.speed = speed
  this.specialDance = specialDance
  }

moveFoward(){
  console.log('Up')
}
moveBackwards(){
  alert('Down')
}
jump(){
  console.log(`${specialDance}`)
}

}

let Ashley = new SuperMonkeyBall('Ashley', 5, 'fast', 'twirl' )
let Ajai = new SuperMonkeyBall('Ajai', 7, 'medium', 'duggy' )
let Mimi = new SuperMonkeyBall('Mimi', 4, 'superfast', 'twerks')
