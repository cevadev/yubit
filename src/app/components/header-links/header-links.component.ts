import { Component } from '@angular/core';

@Component({
  selector: 'app-header-links',
  templateUrl: './header-links.component.html',
  styleUrl: './header-links.component.css',
})
export class HeaderLinksComponent {
  public userAccount: string = 'Cuenta y pedidos';
  public language: string = 'Language';
  public shopping: string = 'Carrito';
  public help: string = 'Ayuda';

  public bestSeller: string = 'Más vendidos';
  public fullStar: string = '5 estrellas';
  public categories: string = 'Categorías';
}
