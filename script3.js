let pet = {
    name:'Ziggy',
    hunger:50,
    happiness:50,
    status:function(){

        document.getElementById('data').innerHTML = 
        `<p><b>Hunger:</b> ${this.hunger}</p>
        <p><b>Happiness:</b> ${this.happiness}</p>`;
    },
    
    feed:function(){
        // feed pet
        if(this.hunger > 0){
            this.hunger -= 5;
        } if (this.hunger === 0){
            document.getElementById('full').innerHTML =
            `${this.name} is full!`;
        }
        // decrease hunger
        if(this.happiness < 100){
            this.happiness += 5;
        } if (this.happiness === 100){
            document.getElementById('happy').innerHTML = 
            `${this.name} is happy!`
        }
        // increase happiness
        pet.status();
        // call status function to update values on html

        console.log('Feeding...')
    }
}

pet.status();
