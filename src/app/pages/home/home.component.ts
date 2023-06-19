import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Iproduct } from 'src/app/interface/product';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  products: Iproduct[] = [];
  product!: Iproduct;
  constructor(private productService: ProductService) {
    this.productService.getProduct().subscribe((data) => {
      this.products = data
    })
  }
  remove(id: any) {
    const comfirmdelete = confirm("Ban co muon xoa");
    if (comfirmdelete) {
      this.productService.DeleteProduct(id).subscribe(() => { this.products = this.products.filter(item => item.id !== id)
        alert('xoa ok') }, (error) => {
        console.log(error);

      })
    }
  }
}


