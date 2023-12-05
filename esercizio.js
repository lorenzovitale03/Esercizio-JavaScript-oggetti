class User{
    constructor(firstName,lastName,age,location){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }

    getConfronto(utente1,utente2){
        if(utente1.age < utente2.age){
            console.log(utente1.firstName + "è piu' piccolo  di "+ utente2.firstName);
        }else if(utente1.age > utente2.age){
            console.log(utente1.firstName + "è piu' grande di " + utente2.firstName);
        }else{
            console.log(utente1.age + "ed "+ utente2.age + "sono coetanei");
        }
    }

}

const utente1 = new User("Giovanni","Verdi",25,"Milano");
const utente2 = new User("Anna","Mastroianni",43,"Roma");
utente1.getConfronto(utente2,utente1);



