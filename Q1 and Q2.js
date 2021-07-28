//Question 1 - Task 1 and 2
const paragraph = `Thank you so much for contacting us. Dreamland guest relations. You're speaking with Ronaldo. May I have your name, please? Yes, sure. My name is robin soleimani. What is your phone number? It is 9876535362 as mentioned in the book Diary. Thank you so much for providing the info!`;
const lines = paragraph.match(/[^\.!\?]+[\.!\?]+/g);

let counter = 1;

for (var line of lines){
    if (line.split(' ').length > 4){
        var result = `${counter}. ${line.replace(/[6-9]\d{9}/g, 'XXXXXXXXXX').trim()}`;
        console.log(result);
        counter++;
    }
}


//Question 2

const qTeams = {
    aaiec: 400, 
    aaiwc: 60, 
    qai: 200, 
    poc: 100,
    gtm: 50,
    hr: 10
};

var result = [];

for (var team in qTeams) {
    result.push([team, qTeams[team]]);
}

result.sort((a, b) => b[1] - a[1]);

for (var team of result){
    console.log(`${team[0]} - ${team[1]}`)
}

