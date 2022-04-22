const mongoose = require('mongoose')

// model step: 1
const cardModel = new mongoose.Schema({
        id: String,
        name: String,
        supertype: String,
        subtypes:Array,
        hp: String,
        types:Array,
        evolvesFrom: String,
        rules: Array,
        abilities:Array,
        attacks: Array,
        weaknesses: Array,
        retreatCost:Array,
        convertedRetreatCost: Number,
        set:Object,
        number: String,
        artist: String,
        rarity:String,
        nationalPokedexNumbers:Array,
        legalities: Object,
        images:Object,
        tcgplayer:Object,
        cardmarket:Object
 
})
module.exports = mongoose.model('allCard', cardModel)
