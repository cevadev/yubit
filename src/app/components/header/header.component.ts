import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  /** las propiedades para ser usadas en el template y hacer string interpolation, deben ser public */
  public logoPath: string = '../../../assets/img/yubit.svg'; // property binding
  public logoText: string = 'Yubit';
}
