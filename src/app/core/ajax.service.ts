import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  private baseUrl = 'https://localhost:44342/api/'

  constructor(private http: HttpClient) { }

  doGet<T>(url: string): Observable<T> {
    return this.http.get(this.baseUrl + url)
      .pipe(
        map(d => d as T)
      )
  }

  doPost<T>(url: string, data: any = {}): Observable<T> {
    return this.http.post(this.baseUrl + url, data)
      .pipe(
        map(d => d as T)
      )
  }

  doDelete<T>(url: string): Observable<T> {
    return this.http.delete(this.baseUrl + url)
      .pipe(
        map( d => d as T)
      )
  }

}
