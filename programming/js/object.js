class Animal {
    constructor() {
        this.name
        this.color
        this.legs
        this.eyes
        this.sound
    }

    makeSound() {
        console.log(this.sound)
    }


};

let dog = new Animal();

dog.name = 'Khaleesi';
dog.color = 'Sandy Brown';
dog.legs = 4;
dog.eyes = 2;
dog.sound = 'yelp';

console.log(dog);

dog.makeSound();

let spider = new Animal;

spider.name = 'Charlotte';
spider.color = 'black';
spider.legs = 8;
spider.eyes = 8;
spider.sound = 'hiss';

console.log(spider);

console.log(Animal.sound);

class Movie {
    constructor() {
        this.name
        this.actor
        this.awards
        this.rating
        this.genre
        this.release
        this.boxOffice
        this.budget
        this.writer
        this.plot
    }
};

let tenet = new Movie();

tenet.name = 'tenet';
tenet.actor = 'John David Washington';
tenet.awards = 'Academy Awards for Best Visual Effects';
tenet.rating = '7.4/10';
tenet.genre = 'Action';
tenet.release = 'September 3,2020';
tenet.boxOffice = '363.7m';
tenet.budget = '200m';
tenet.writer = 'Christopher Nolan';
tenet.plot = 'secret agent  is sent to prevent the onset of World War III';


console.log(tenet);

tenet.makeName();


class Album {
    constructor() {
        this.artist
        this.songs
        this.awards
        this.rating
        this.genre
        this.release
        this.label
        this.producer
        this.writer
        this.title
    }
};

let clb = new Album();

clb.artist = 'Drake';
clb.songs = 'Pai/s Home, Fair trade, Love All';
clb.awards = 'Platnium';
clb.rating = 'RYM Rating 1.87';
clb.genre = 'Hip Hop/Rap';
clb.release = 'September 3,2021';
clb.label = 'OVO Sound';
clb.producer = 'Shebib';
clb.writer = 'Shebib';
clb.title = 'Certified Lover Boy';




console.log(clb);

clb.makeArtist();

/* 

    BUILD AN ARRAY OF OBJECTS


    BUILD OBJECTS


    COLLECT DATA FROM USER


    DISPLAY CARDS

    CLICK ON CARD AND ALBUM DETAILS WILL BE ON BACK

    CLICK A BUTTON TO WATCH A YOUTUBE VIDEO

*/

let cardArr = [
    
];