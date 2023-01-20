import { Component,EventEmitter,Input,OnInit, Output } from '@angular/core';
import { ProductListService } from '../product-list.service';
import { Product } from '../productModule';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [];
  @Output() SendProdToCart=new EventEmitter();
constructor(private productListService: ProductListService){}
ngOnInit(){
  this.getProducts()
}
getProducts(){
this.productListService.getProducts().subscribe(data=>this.products = data);
}
prodToChild?:Product
  prodIdToChild?:string
addProductToCart(prodId:string,count: string){
  //this.SendProdToCart.emit({prodId,count})
  this.productListService.getProducts().subscribe(data=>{
    this.productListService.addProductToCart(parseInt( count),
    data.filter(p=>p.id==parseInt( prodId))[0]);
    alert("Product added")
  } )
}
}
