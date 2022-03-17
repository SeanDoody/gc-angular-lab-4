import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from 'src/app/models/item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartApiService {

  url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAllItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.url}/cart-items`);
  }

  addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(`${this.url}/cart-items`, item);
  }

  editItem(id: number, item: Item): Observable<Item> {
    return this.http.put<Item>(`${this.url}/cart-items/${id}`, item);
  }

  deleteItem(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/cart-items/${id}`);
  }

}