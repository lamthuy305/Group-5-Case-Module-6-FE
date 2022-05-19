import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Type} from '../../model/type';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {any} from "codelyzer/util/function";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) {
  }

  getAll(id): Observable<any[]> {
    return this.http.get<any[]>(`${API_URL}/comments?id=${id}`);
  }

  likeComment(id, user_id) {
    return this.http.get<any[]>(`${API_URL}/likeComment/like/${id}?user=${user_id}`);
  }

  dislikeComment(id, user_id) {
    return this.http.get<any[]>(`${API_URL}/dislikeComment/dislike/${id}?user=${user_id}`);
  }

  get5CommentByHouseId(id) {
    return this.http.get<any[]>(`${API_URL}/comments/house/${id}`);
  }

  createComment(comment): Observable<Type> {
    return this.http.post(`${API_URL}/comments`, comment);
  }

  getAllReplyByIdComment(id): Observable<any> {

    return this.http.get<any>(`${API_URL}/replies?id=${id}`)

  }

  createReply(reply): Observable<any> {
    return this.http.post(`${API_URL}/replies`,reply)
  }

}
