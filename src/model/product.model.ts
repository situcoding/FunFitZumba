export class Product {

    pid: number | null | undefined;
    name: string | null | undefined;
    price: number | null | undefined;
    ratings: number | null | undefined;

    constructor(pid: number | null | undefined, 
                name: string | null | undefined, 
                price: number | null | undefined, 
                ratings: number | null | undefined){
        this.pid = pid;
        this.name = name;
        this.price = price;
        this.ratings = ratings;
    }

    showProduct(){
        console.log(this.pid + " " + this.name)
    }
}
