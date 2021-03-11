const menu = {
    _courses : {
        _appetizers : [],
        _mains : [],
        _desserts : [],
        get appetizers(){
            return this._appetizers;
        },
        get mains(){
            return this._mains;
        },
        get desserts(){
            return this._desserts;
        },
        set appetizers(ob){
            this._appetizers.push(ob)
        },
        set mains(ob){
            this._mains.push(ob)
        },
        set desserts(ob){
            this._desserts.push(ob)
        }
    },

    get courses(){
        return {
            appetizers: this._courses.appetizers,
            mains: this._courses.mains,
            desserts: this._courses.desserts
        }
    },
    
    addDishToCourse(courseName,dishName,dishPrice){
        if(typeof courseName!=='string' || typeof dishName!=='string' || typeof dishPrice!=='number' || dishPrice<1){
            console.log('1 or more parameters are invalid!TRY AGAIN.')
            return
        }
        else if(courseName==='appetizers'||courseName==='mains'||courseName==='desserts'){
            this._courses[courseName] = {name: dishName,price:dishPrice}
            console.log(this._courses[courseName])
        }
        else{
            console.log(`${courseName} IS INVALID!`)
            return
        }

    },

    getRandomDishFromCourse(courseName){
        if(courseName==='appetizers'||courseName==='mains'||courseName==='desserts'){
            let numOfItems = this._courses[courseName].length
            let randChoice = Math.floor(Math.random()*numOfItems)
            return this._courses[courseName][randChoice]
        }
        else{
            return `Invalid Course Name!Try Again.`
        }
    },
    generateRandomMeal(){
        let randApp = this.getRandomDishFromCourse('appetizers')
        let randMains = this.getRandomDishFromCourse('mains')
        let randDessert = this.getRandomDishFromCourse('desserts')
        
        console.log(`Enjoy Your Meal! \n Appetizer: ${randApp.name}\n Main Course: ${randMains.name}\n Dessert: ${randDessert.name}`)
        console.log(`TOTAL PRICE = ${randApp.price} + ${randMains.price} + ${randDessert.price} = ${randApp.price+randMains.price+randDessert.price}`)

    }
}

menu.addDishToCourse('appetizers','Paneer Chilly',250)
menu.addDishToCourse('appetizers','Spring Roll',200)
menu.addDishToCourse('appetizers','Hara Bhara Kebab',270)

menu.addDishToCourse('mains','Paneer Butter Masala',300)
menu.addDishToCourse('mains','Aloo Paratha',450)
menu.addDishToCourse('mains','Veg Fest',500)

menu.addDishToCourse('desserts','Vanilla Brownie',150)
menu.addDishToCourse('desserts','Chocholate Chip Cone',200)
menu.addDishToCourse('desserts','Mango Sundae',120)
menu.addDishToCourse('desserts','Strawberry Ice Cream Shake',300)

console.log(menu.courses)
menu.generateRandomMeal()