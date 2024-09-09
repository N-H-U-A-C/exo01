import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";
import {ChuckNorrisFact} from "../../domain/chuckNorrisFact";

@Injectable({
  providedIn: 'root'
})
export class ChuckNorrisService {
  url = "https://api.chucknorris.io/jokes/random";

  constructor(private http: HttpClient) {
  }

  getRandom(): Observable<ChuckNorrisFact> {
    return this.http.get<ChuckNorrisFact>(this.url).pipe(
      catchError(error => {
        console.log(error.message);
        return of();
      })
    )
  }
}
