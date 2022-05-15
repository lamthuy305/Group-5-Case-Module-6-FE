import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {House} from '../../model/house';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) {
  }


  getAllImageByHouseId(id): Observable<any> {
    return this.http.get<any>(`${API_URL}/images/house/${id}`);
  }

  createImage(id, images) {
    return this.http.post(`${API_URL}/images/${id}`, images);
  }


  deleteImage(id): Observable<any> {
    return this.http.delete<any>(`${API_URL}/images/${id}`);
  }
}
