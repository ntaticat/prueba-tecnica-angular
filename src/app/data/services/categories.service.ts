import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { ICategoriesResult, ICategory } from '../interfaces/categories.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private url = "https://api.viveplus.com.mx/v1/?m=lista_categorias&key=wB812Mct7RkmRVEriZ63OA==";

  constructor(private http: HttpClient) { }

  getCategories(): Observable<ICategory[]> {
    return this.http.get<ICategoriesResult>(this.url)
      .pipe(
        map((categoriesResult) => categoriesResult.Categorias)
      );
  }
}
