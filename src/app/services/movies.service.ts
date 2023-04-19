import { HttpClient } from '@angular/common/http';
import { Injectable, importProvidersFrom } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  baseUrl = environment.baseUrl;
  apiKey = environment.apiKey;

  constructor(private http: HttpClient) {}

  getTopRatedMovie() {
    return this.http.get(
      `${this.baseUrl}/top_rated?api_key=${this.apiKey}&language=en-US&page=1`
    );
    // return this.http.get(`${this.baseUrl}/top_rated?api_key=${this.apiKey}&&page=1`)
  }
}
