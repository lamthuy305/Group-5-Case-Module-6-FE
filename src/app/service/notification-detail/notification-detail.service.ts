import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class NotificationDetailService {

  constructor(private http: HttpClient) {
  }

  getAllNotificationDetailByIdUser(id) {
    return this.http.get<any>(`${API_URL}/notificationDetail/${id}`);
  }


  deleteAllNotificationDetailByIdUser(id) {
    return this.http.delete<any>(`${API_URL}/notificationDetail/delete/${id}`);
  }
}
