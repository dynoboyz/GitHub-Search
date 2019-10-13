import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const endpoint = 'https://api.github.com/search/';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    const body = res;
    return body || { };
  }

  getGitHubs(currentPage, perPage, search): Observable<any> {
    let params = new HttpParams();
    params = params.append('page', currentPage);
    params = params.append('per_page', perPage);
    if (search) {
      params = params.append('q', search);
    }
    return this.http.get(endpoint + 'repositories', { params: params }).pipe(
      map(this.extractData));
  }
}
