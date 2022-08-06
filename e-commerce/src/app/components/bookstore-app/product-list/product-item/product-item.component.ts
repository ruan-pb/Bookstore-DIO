import { Book } from './../model/book';
import { BookService } from './../product-list-component.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()
  livro!:Book
 
  ngOnInit(): void {

  }

}
