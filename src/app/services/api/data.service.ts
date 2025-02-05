import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  catg: any;
  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {
    this.catg = this.activatedRoute.snapshot.paramMap.get('cat');
  }

  getCategory(): Observable<any> {
    return this.httpClient.get(
      'https://www.themealdb.com/api/json/v1/1/list.php?c=list'
    );
  }
  getCategoryByName(catg: string): Observable<any> {
    return this.httpClient.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${catg}`
    );
  }
  getDetailsById(id: number): Observable<any> {
    return this.httpClient.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
  }
  getAll(): Observable<any> {
    return this.httpClient.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=`
    );
  }
}
