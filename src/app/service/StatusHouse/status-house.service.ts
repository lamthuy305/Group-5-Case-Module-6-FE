import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Type} from "../../model/type";
import {StatusHouse} from "../../model/status-house";
const API_URL = `${environment.apiUrl}`;


@Injectable({
  providedIn: 'root'
})
export class StatusHouseService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<StatusHouse[]> {
    return this.http.get<StatusHouse[]>(`${API_URL}/statusHouses`);
  }

  getStatusHouseById(id): Observable<StatusHouse> {
    return this.http.get<StatusHouse>(`${API_URL}/statusHouses/${id}`);
  }

  createStatusHouse(statusHouse): Observable<StatusHouse> {
    return this.http.post(`${API_URL}/statusHouses`, statusHouse);
  }

  editStatusHouse(id, statusHouse): Observable<StatusHouse> {
    return this.http.put(`${API_URL}/statusHouses/${id}`, statusHouse);
  }
}
