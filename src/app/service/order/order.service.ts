import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {House} from '../../model/house';
import {environment} from '../../../environments/environment';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private http: HttpClient) {
  }

  getAllOrderProcessingByUserId(currentUser_id): Observable<any[]> {
    return this.http.get<any[]>(`${API_URL}/orders/processing/${currentUser_id}`);
  }

  changeStatusOrderDone(id) {
    return this.http.get<any>(`${API_URL}/orders/changeStatusDone/${id}`);
  }

  changeStatusOrderCanceled(id) {
    return this.http.get<any>(`${API_URL}/orders/changeStatusCanceled/${id}`);
  }

  getAllOrderStatusDone(id) {
    return this.http.get<any>(`${API_URL}/orders/statusDone/${id}`);
  }

  get5OrderByOrderIdRent(id) {
    return this.http.get<any>(`${API_URL}/orders/historyOrderTop5/${id}`);

  }

  getOrderById(id): Observable<any> {
    return this.http.get<any>(`${API_URL}/orders/${id}`);
  }

  createOrder(order) {
    return this.http.post(`${API_URL}/orders`, order);
  }

  editOrder(id, order) {
    return this.http.put<any>(`${API_URL}/orders/${id}`, order);
  }

  deleteOrder(id): Observable<House> {
    return this.http.delete<any>(`${API_URL}/orders/${id}`);
  }
}
