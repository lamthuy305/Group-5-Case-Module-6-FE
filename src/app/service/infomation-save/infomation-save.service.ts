import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class InfomationSaveService {

  constructor(private http: HttpClient) {
  }

  get10InformationSaveByIdUserActive(id) {
    return this.http.get<any>(`${API_URL}/infomationSave/active/${id}`);
  }

  getAllInformationSaveByIdUserIsActive(id) {
    return this.http.get<any>(`${API_URL}/infomationSave/${id}`);
  }

  changeActiveInfomation(id) {
    return this.http.get<any>(`${API_URL}/infomationSave?id=${id}`);
  }
}
