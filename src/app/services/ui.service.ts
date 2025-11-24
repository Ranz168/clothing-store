import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private cartOpenSubject = new BehaviorSubject<boolean>(false);
  public cartOpen$ = this.cartOpenSubject.asObservable();

  toggleCart(): void {
    this.cartOpenSubject.next(!this.cartOpenSubject.value);
  }

  openCart(): void {
    this.cartOpenSubject.next(true);
  }

  closeCart(): void {
    this.cartOpenSubject.next(false);
  }

  getCartState(): boolean {
    return this.cartOpenSubject.value;
  }
}