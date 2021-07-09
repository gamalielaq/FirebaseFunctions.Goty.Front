import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Game } from '../interfaces/interfaces';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class GameService {

  juegos: Game[] = [];

  constructor(
    private http: HttpClient
  ) { }


  getNominados() {
    if (this.juegos.length > 0) {
      return of(this.juegos)
    } else {
      return this.http.get<Game[]>(`${environment.url}/api/goty`).pipe(
        tap( resp => this.juegos = resp ) 
      );
    }
  }

  votarJuego( id:string ) {
    return this.http.post(`${environment.url}/api/goty/${ id }`, {}).pipe(
      catchError( err => {
        return of( err.error );
      })
    )
  }

}
