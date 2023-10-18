import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Book } from '../app.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() book: Book | undefined;
  @Output() addBook: EventEmitter<any> = new EventEmitter();

  addToCart(book:Book){
    this.addBook.emit(book);
  }
}
