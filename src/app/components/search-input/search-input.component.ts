import { Component } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css',
})
export class SearchInputComponent {
  public dropDownIcon: string = '../../../assets/img/dropdown_icon.png';
  public searchIcon: string = '../../../assets/img/search_icon.png';
}
