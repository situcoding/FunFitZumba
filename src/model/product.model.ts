export class Product {

    pid: number;
    name: string;
    price: number;
    ratings: number;

    constructor(pid: number, name: string, price: number, ratings: number){
        this.pid = pid;
        this.name = name;
        this.price = price;
        this.ratings = ratings;
    }

    showProduct(){
        console.log(this.pid + " " + this.name)
    }
}
