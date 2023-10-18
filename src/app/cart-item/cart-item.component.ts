import { Component, Input, Output, EventEmitter  } from '@angular/core';

import { Book } from '../app.component';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})

export class CartItemComponent {
  @Input() item!: Book;
  @Input() qty?: number;
  @Output() qtyChange = new EventEmitter<number>();

  decrement() {
    if (this.qty && this.qty > 1) {
        this.qty--;
        this.qtyChange.emit(this.qty);
    }
  }

  increment() {
    this.qty = (this.qty || 0) + 1;
    this.qtyChange.emit(this.qty);
  }
}