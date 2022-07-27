import { Component, OnInit } from '@angular/core';
import { ProductmasterService } from 'src/app/services/productmaster.service';
import { Product } from 'src/app/model/Product';
import { resetFakeAsyncZone } from '@angular/core/testing';
@Component({
  selector: 'app-productmaster',
  templateUrl: './productmaster.component.html',
  styleUrls: ['./productmaster.component.css']
})
export class ProductmasterComponent implements OnInit {
  isAdded:boolean=false;
  isTableVisible:boolean=false;
  isResetVisible:boolean=false;
  prod:Product={
    id:0,
    name:'',
    desc:'',
    manu:'',
    price:0
  }
   products:Product[]=[];

  constructor(private productmasterservice:ProductmasterService) { }

  ngOnInit(): void {}
  
  displayProducts():void{
   
    this.isTableVisible=true;
    this.productmasterservice.getProducts().subscribe(
     (data:any[])=>{
      console.log(data)
      this.products = data
     })
    
  }
  addProduct(): void{
    this.productmasterservice.addProduct(this.prod).subscribe(
      prod =>this.products.unshift(prod)
   )
   this.isAdded=true;
   this.displayProducts();
   this.isResetVisible=true;
   
  }
  resetData():void{
    this.prod={
      id:0,
      name:'',
      desc:'',
      manu:'',
      price:0
    }
    this.isAdded=false;
    this.isResetVisible=false;
    this.isTableVisible=false;

  }
  

}
