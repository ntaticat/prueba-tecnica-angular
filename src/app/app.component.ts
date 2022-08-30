import { Component, OnInit } from '@angular/core';

import * as faIcons from '@fortawesome/free-solid-svg-icons';
import { CategoriesService, ICategory } from './data/services/categories.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'prueba-tecnica-angular';

  faIcons = faIcons;
  selectedCar: number = 0;

  selectedCategory: string = "";
  categoriesList: ICategory[] = [];

  cars = [
      { id: 1, name: 'Volvo' },
      { id: 2, name: 'Saab' },
      { id: 3, name: 'Opel' },
      { id: 4, name: 'Audi' },
  ];

  constructor(private categoriesService: CategoriesService) {
  }

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe((categories) => {
      this.categoriesList = categories;
      console.log(categories);
    });
  }
}
