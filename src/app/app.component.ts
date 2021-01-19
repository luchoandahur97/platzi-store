import { Component } from '@angular/core';
import { Product } from './models/product.model'

import { registerLocaleData } from '@angular/common'
import localeCl from '@angular/common/locales/es-CL';

registerLocaleData(localeCl);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'platzi-store';

  items = ['jorge', 'fabian', 'luis'];
  power = 10;

}
