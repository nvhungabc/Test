import { Component ,Input } from '@angular/core';
import { Iproduct } from 'src/app/interface/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
@Input('data') product!: Iproduct;
productId:string='';
constructor(private productserver:ProductService,private router:ActivatedRoute){

}
ngOnInit() {
this.productId=this.router.snapshot.paramMap.get('id')||'';
this.productserver.getdetail(this.productId).subscribe((product:Iproduct)=>{
  this.product=product;
})
}
}
