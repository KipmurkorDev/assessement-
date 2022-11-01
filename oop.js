// A pharmacist writes prescriptions to people. 

// A cashier collects cash and returns cash to pharmacy 

// A manager manages employees 

// A manager can sometimes work as a cashier and a pharmacist. 



class Manager{
    constructor(name){
        this.name=name
    }
}
let pharmicist={
    medicine: "Sona Moja",
    prescriptions:function(){
        console.log(`${this.medicine} was prescibes to Patient`);
    }

}

let cashier={
    amount:200,
    collection:function (){
        console.log(` The cashier passes ${this.amount} to pharmacy`);
    }
}

let manager=new Manager(" Emilly")

Object.assign(manager, pharmicist,cashier )

manager.collection()