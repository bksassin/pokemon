import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonCardService {
  private apiUrl = 'https://api.pokemontcg.io/v2/cards';

  constructor(private http: HttpClient) {}

  getRandomCard(): Observable<any> {
    return this.http.get(`${this.apiUrl}?pageSize=1&page=${Math.floor(Math.random() * 1000)}`)
      .pipe(
        map((response: any) => response.data[0])
      );
  }

  getRandomPokemonNames(count: number): Observable<string[]> {
    return this.http.get(`${this.apiUrl}?pageSize=${count}&page=${Math.floor(Math.random() * 1000)}`)
      .pipe(
        map((response: any) => response.data.map((card: any) => card.name))
      );
  }
}
