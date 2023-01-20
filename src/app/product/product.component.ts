import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductListService } from '../product-list.service';
import { Product } from '../productModule';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
constructor(private activatedRoute: ActivatedRoute,
  private productListService: ProductListService){

}
  prod?:Product
  prodId:number=0
ngOnInit(): void {
  this.activatedRoute.paramMap.subscribe((params:ParamMap) => 
  this.prodId= parseInt( params.get('id')!) );
  this.productListService.getProducts().subscribe(data=>{
    console.log(data);
    this.prod=data.filter(p=>p.id==this.prodId)[0];
  } )
   
}
addProductToCart(prodId:number,count: string){
  
  this.productListService.getProducts().subscribe(data=>{
    this.productListService.addProductToCart(parseInt( count),
    data.filter(p=>p.id== prodId)[0]);
    
  } )
  alert("Product added")
}
}
