import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Product } from 'src/assets/product';
import {product} from '../../assets/products';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  products!:Product;
  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    const categoryIdFromRoute = Number(routeParams.get('categoryId'));
    this.products = product.find(products => products.productId === productIdFromRoute && products.categoryId === categoryIdFromRoute);
  }
  share(link:string):void{
    window.open("https://t.me/share/url?url=Zhansaya Store&text="+link+"");
  }
  deleteItem():void{
    const productIdFromRoute =Number(this.route.snapshot.paramMap.get('productId'));
    this.products.isRemoved=true;
    this.router.navigate(['categories/'+this.products.categoryId+'/products']);
  }
  likeItem():void{
    this.products.isLiked=!this.products.isLiked;
    if(this.products.isLiked){
      this.products.like++;
    }
    else{
      this.products.like--;
    }
  } 
}