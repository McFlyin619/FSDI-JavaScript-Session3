const client = {
    name:'OBrien',
    type:'Premium',
    data:{
        location:{
            city:'San Diego',
            country:'USA',
            zipCode:'92029'
        },
        account:{
            since:'10-12-19',
            status:'Active',
            stars:200
        }
    },
    hobbies:{
        mus:['Lil Wanye','Chance the rapper'],
        act:['Snowboard','Work on cars','Video games']
    }
}

// console.log(client);

// creat variables to display deep info ^^^
// old way
const clientName = client.name, clientLocation = client.data.location.city, clientStars = client.data.account.stars;
// console.log(clientName);
// console.log(clientLocation);
// console.log(clientStars);

// New way => Object Destructoring

let {name,type} = client; // add what info from client into curly braces. after = must be the same constructoir name
let {data:{location:{city}}} = client;

// console.log(name,type);
// console.log(city);

let {hobbies:{mus,act}} = client;

// console.log(act[0],mus[0]);



// Object Literal Enhancement 

const band = 'Oasis', genre = 'Rock', songs = ['Wonderwall','Song 2','Song 3'];

const music = {band, genre, songs}

// console.log(music);

const students = [
    {name:'Joel',gpa:80},
    {name:'OBrien',gpa:100},
    {name:'Mark',gpa:90},
    {name:'Christian',gpa:85},
    {name:'Christopher',gpa:95},
    {name:'Daniel',gpa:100},
    {name:'Rene',gpa:100},
    {name:'Doninique',gpa:95},
    {name:'Gareth',gpa:85}
]

// for(let i=0;i<students.length;i++){                //for loop to display what the filter does below
//     let results = [];
//     if(students[i].gpa>90){
//         console.log(students[i]);
//         results.push(students[i])
//     }
// }

const best = students.filter(student=>student.gpa>85); // Filter shorthand studen=parameter (can give any name) student.gpa is the new parameter 'student' and gpa from each 'students'
console.log(best);

const Daniel = students.find(student=>student.name=='Daniel');

const {gpa}=Daniel;

let total = students.reduce((gpaTotal,student)=>gpaTotal+student.gpa,0);
console.log(total/students.length);