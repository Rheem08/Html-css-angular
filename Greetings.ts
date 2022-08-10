class Greeting{
    //fields
    name:string;
    pass:string;

    //constructor
    constructor(name:string, pass:string){
        this.name=name;
        this.pass=pass;

    }

    sayHello(): string{
        return "hello " + this.name + this.pass;
    }
}

    var greet= new Greeting("James" , "12345");
    console.log(greet.sayHello());


