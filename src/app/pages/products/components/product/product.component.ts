import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Product } from '../../../../models/product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent {
    @Input() product: Product;
    @Output() productAdded: EventEmitter<any>;
    today: Date;

    constructor () {
        this.productAdded = new EventEmitter();
        this.today = new Date();
    }
    addCart() {
        this.productAdded.emit(this.product.id);
    }
}

