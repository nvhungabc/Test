import { Component } from '@angular/core';
import { Iproduct } from 'src/app/interface/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.scss']
})
export class UpdateproductComponent {
  product: Iproduct = {
    name: '',
    price: 0,
    desc: ''
  }
  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id')
      this.productService.getdetail(id).subscribe((product: Iproduct) => {
        this.product = product
      })
    }
    )
  }
  onHandleEdit() {
    this.productService.UpdateProduct(this.product).subscribe((data) => {
      alert("uapdate ok")
      this.router.navigate([''])
    })
  }
}
