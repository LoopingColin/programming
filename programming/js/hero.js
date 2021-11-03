/*

    Hero Generator

    Build a program that will randomize an adjective, hero, and usperpower

    ex: the fantastic lava girl can carave 30 pumpkins

        Pseudocode

        Variables

        adjectives
        heroes
        powers

        adj
        hero
        power
        message
        idx
            adjIdx
            heroIdx
            powerIdx

        PROCEDURE

        SET  adjectives, heroes, powers

        SET adj FROM adjectives
        SET hero FROM heroes
        SET power FROM powers
        SET message to "The {adj} {hero} can {power}"

        DISPLAY  messsage
        OUTPUT message
*/

var adjectives = [
    'Cool',
    'Amazing',
    'Ferocious',
    'Fantastic',
    'Magnificent'
];

var heroes = [
    'Supercoder',
    'Mightyman',
    'MightGuy',
    'Torpedo',
    'Avalanche'
];

var powers = [
    'shoot lasers',
    'run at supersonic speeds',
    'increase physical capability',
    'create lighting attacks',
    'teleport anywhere'
];

// powers[2] =>'leap curbs in a single bound'
// powers[1+1] => 'leap curbs in a single bound'

// var foo = 2;
// powers[foo] => 'leap curbs in a single bound'

// var idx;

var adjIdx = Math.floor(Math.random() * adjectives.length);
var heroIdx = Math.floor(Math.random() * heroes.length);
var powerIdx = Math.floor(Math.random() * powers.length);


// Math.floor(Math.random())

//console.log(Math.floor(2.956));

// console.log(Math.random())


var adj, hero, power;

adj = adjectives[adjIdx];
hero = heroes[heroIdx];
power = powers[powerIdx];
// var message = 'The ' + adj + ' ' + hero + ' can ' + power;

// String template literal
var message = `The ${adj} ${hero} can ${power}.`

console.log(message);



/*
    Build a randomizer

*/