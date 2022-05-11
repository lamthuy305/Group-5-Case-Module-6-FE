import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {House} from "../../model/house";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  constructor(private http: HttpClient) { }


  getAll(): Observable<House[]> {
    return this.http.get<House[]>(`${API_URL}/houses`);
  }

  getHouseById(id): Observable<House> {
    return this.http.get<House>(`${API_URL}/houses/${id}`);
  }

  createHouse(house): Observable<House> {
    return this.http.post<House>(`${API_URL}/houses`, house);
  }

  editHouse(id, house): Observable<House> {
    return this.http.post<House>(`${API_URL}/houses/${id}`, house);
  }

  deleteHouse(id): Observable<House> {
    return this.http.delete<House>(`${API_URL}/houses/${id}`);
  }
}
