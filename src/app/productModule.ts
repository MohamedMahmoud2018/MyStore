
export class Product {
    id:          number;
    name:        string;
    price:       number;
    url:         string;
    description: string;
    constructor(){
        this.id = 0;
        this.name = "";
        this.price = 0;
        this.url = "";
        this.description = "";
    }
}

export class Cart {
    count:          number;
    items:       Product;
    constructor(_count?:number, _items?: Product) {
        this.count = _count!;
        this.items = _items!;
    }
}
export class RemovedItem{
    product: Product;
    flag: number;
    constructor(_count:number, _prod: Product) {
        this.flag = _count;
        this.product=_prod;
    }
}