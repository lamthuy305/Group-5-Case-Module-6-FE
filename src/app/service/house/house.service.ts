import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {House} from '../../model/house';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  constructor(private http: HttpClient) {
  }


  getAll(id): Observable<House[]> {
    return this.http.get<House[]>(`${API_URL}/houses?id=${id}`);
  }

  getTop5(): Observable<House[]> {
    return this.http.get<House[]>(`${API_URL}/houses/top5`);
  }

  getRandom9House(): Observable<House[]> {
    return this.http.get<House[]>(`${API_URL}/houses/random`);
  }

  getHouseById(id): Observable<House> {
    return this.http.get<House>(`${API_URL}/houses/${id}`);
  }

  createHouse(house): Observable<House> {
    return this.http.post(`${API_URL}/houses`, house);
  }

  searchHouse(city, bedroom, bathroom, price, type) {
    return this.http.get(`${API_URL}/houses/search?city=${city}&bedroom=${bedroom}&bathroom=${bathroom}&price=${price}&type=${type}`);
  }


  editImgHouse(house): Observable<House> {
    return this.http.post(`${API_URL}/houses/img`, house);
  }

  deleteHouse(id): Observable<House> {
    return this.http.delete<House>(`${API_URL}/houses/${id}`);
  }
}
