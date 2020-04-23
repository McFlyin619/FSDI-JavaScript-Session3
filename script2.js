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
    }
}

console.log(client);

// creat variables to display deep info ^^^
// old way
const clientName = client.name, clientLocation = client.data.location.city, clientStars = client.data.account.stars;
console.log(clientName);
console.log(clientLocation);
console.log(clientStars);

// New way =>Object Destructoring

