// MORE ARRAYS!

// nested arrays

var teams = [
    ['Dallas', 'Coyboys'],
    ['Washington', 'Football Team'],
    ['Philadelphia', 'Eagles'],
    ['New York', 'Giants']
];

console.log(teams.length);
console.log(teams);

console.log(teams[1]);

console.log(teams[1][1]);

var teams2 = [
    ['Los Angeles', 'Rams',
        ['Matthew Stafford', 'Aaron Donald']
    ],
    ['Arizona', 'Cardinals',]
    ['Kyler Murray', 'Chandler Jones']
],

// ['San Francisco', '49ers',
//     ['Jimmy G', 'Josh Norman']
// ],
//     ['Seattle, 'Seahwaks,
//     ['Russell Wilson', 'KJ Wright']
// ]
// ];

// console.log(teams2[2][2][0]);

// var data = [
//     ['villain' ,'image1.jpg']
//     ['villain2', 'image2.jpg']
// ]

// var downtownJackson = ['Jordan', 'Rogelio', 'Kate', 'Keitron', 'Patrick', 'Lorraine', 'Jonathan', 'Takia',
//     'Michael'];
    

    /*
        for
        while
        forEach
        for of
        for in
        do while

        for

    for (initialization; condition; iteration) {
        do stuff
    }

        var i = 0;
        i < arr.length;
        i++

        i + 2
        i = i + 2

        while 

        while (condition) {
            do stuff
        }

        forEach

        arr.forEach(item => {
            do stuff})
    */

        // for (var i = 0; i < downtownJackson.length; i++) {
        //     console.log('Hello ${downtownJackson[i]}');
        // }
        

        var southJackson = ['Markeisha', 'Jack', 'Mark',
        'Brendan', 'Tyler', 'Paxton', 'Colin', 'Aundrea',
        'Lawrencia', 'Eric', 'Rico', 'Aaaron', 'Ethor',
        'Qodemaster Q'];    

        // var i = 0;

        // while (i < southJackson.length) {
        //     console.log(`Satch says, "Hello to you too, $
        //     {southJackson[i]}`);
            
        //     i++
        // };    

        var satchWallet = 1000000000

        // for (var i = 0; i < southJackson.length; i++) {
        //     console.log(`Here is $1,000,000` ${southJackson[i]}`);
        //     satchWallet-= 1000000;
        // }
        var i = 0;
        
        while (satchWallet >= 10000000 && i <= southJackson.length - 1) {
            console.log(`Here is $1,000,000 ${southJackson[i]}`);
            i++;
            satchWallet-=1000000
        }

        console.log(`Satch now has ${satchWallet} left.` );

        downtownJackson.forEach(coder => {
            console.log(`Hello ${coder}`);
        })

        southJackson.forEach(item => {
            console.log(`Hello ${item}`);
        });