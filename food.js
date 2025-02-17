// Create class below
class Food{
    constructor(name, daysToSpoil,fresh= true){
        this.name = name;
        this.daysToSpoil = daysToSpoil;
        this.fresh = fresh;
    }
    prepare(){
        console.log(`${this.name} is being prepared`)
    }
    isFresh(){
        if(this.fresh && this.daysToSpoil > 0){
            console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils.`)
        }else{
            console.log(`${this.name} has spoiled.`)
        }
    }
    aDayPasses(){
        this.daysToSpoil--;
        this.isFresh();
    }

}
class BadFood extends Food{
    constructor(name, daysToSpoil, fresh, weapons){
        super(name, daysToSpoil, fresh);
        this.daysToSpoil = 20;
        this.weapons = [3,4,5]
    }
    isFresh(){
        if(daysToSpoil<= 0){
            this.fresh= false
        }
    }
    prepare(){
        console.log(this.weapons)
    }
}

let bad = new BadFood("Bacon", "4", true)
console.log(bad)


// Do not edit below this line
module.exports = Food;
