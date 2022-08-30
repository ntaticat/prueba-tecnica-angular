import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as faIcons from '@fortawesome/free-solid-svg-icons';
import { ICategory } from 'src/app/data/interfaces/categories.interface';
import { CategoriesService } from 'src/app/data/services/categories.service';

@Component({
  selector: 'app-hotel-filters',
  templateUrl: './hotel-filters.component.html',
  styleUrls: ['./hotel-filters.component.scss']
})
export class HotelFiltersComponent implements OnInit {

  hotelFiltersForm: FormGroup = this.fb.group({
    estado: [undefined, Validators.required],
    categoria: [undefined, Validators.required],
    marca: [undefined, Validators.required]
  });

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

  constructor(private fb: FormBuilder, private categoriesService: CategoriesService) {
  }

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe((categories) => {
      this.categoriesList = categories;
    });
  }

  onSubmit(e: Event) {

  }

}
