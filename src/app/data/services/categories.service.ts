import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

export interface ICategoriesResult {
  Categorias: ICategory[];
}

export interface ICategory {
  id_categoria: string,
  nombre_categoria: string
}

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private url = "https://api.viveplus.com.mx/v1/?m=lista_categorias&key=wB812Mct7RkmRVEriZ63OA==";

  constructor(private http: HttpClient) { }

  getCategories(): Observable<ICategory[]> {
    return this.http.get<ICategoriesResult>(this.url)
      .pipe(
        map((categoriesResult) => categoriesResult.Categorias),
        tap((categoriesResult) => console.log(categoriesResult)),
      );
  }
}
