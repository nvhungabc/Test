import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent {
product={
  name:'',
  price:0,
  desc:""
}
constructor(private productService:ProductService,private router:Router){

}
onHandleAdd(){
  this.productService.AddProduct(this.product).subscribe((data)=>{
    console.log(data);
    alert("them thanh cong");
    this.router.navigate([''])
    
  },(error)=>{
    console.log(error);
    
  })
}
}
