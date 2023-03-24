import { Component } from '@angular/core';
import { TypeProduct } from 'src/app/models/type-product';
import { typeProducts } from 'src/app/utils/constants';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {
  typeProducts: TypeProduct[] = typeProducts;

}
