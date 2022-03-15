import { Component, OnInit } from '@angular/core';
import { CartApiService } from 'src/app/services/cart-api/cart-api.service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  items: Item[] = [];
  showForm: boolean = false;

  constructor(private cartApiService: CartApiService) { }

  ngOnInit(): void {
    this.getAllItems();
  }

  getAllItems(): void {
    this.cartApiService.getAllItems().subscribe((items: Item[]) => {
      this.items = items;
      console.log('getting all items');
      console.log(items);
    });
  }

  addItem(newItem: Item): void {
    this.cartApiService.addItem(newItem).subscribe((item: Item) => {
      console.log('new item added');
      console.log(item);
    });
    this.showForm = false;
    this.getAllItems();
  }

  deleteItem(id: number = -1): void {
    this.cartApiService.deleteItem(id).subscribe(() => {
      console.log(`item with id: ${id} deleted`);
    });
    this.getAllItems();
  }

}
