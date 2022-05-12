import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Type} from "../../model/type";
import {Injectable} from '@angular/core';
const API_URL = `${environment.apiUrl}`


@Injectable({
  providedIn: 'root'
})
export class TypeService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Type[]> {
    return this.http.get<Type[]>(`${API_URL}/types`);
  }

  getTypeById(id): Observable<Type> {
    return this.http.get<Type>(`${API_URL}/types/${id}`);
  }

  createType(type): Observable<Type> {
    return this.http.post(`${API_URL}/types`, type);
  }

  editType(id, type): Observable<Type> {
    return this.http.put(`${API_URL}/types/${id}`, type);
  }
}
