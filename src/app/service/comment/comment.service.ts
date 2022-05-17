import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Type} from '../../model/type';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${API_URL}/comments`);
  }

  likeComment(id){
    return this.http.get<any[]>(`${API_URL}/comments/like/${id}`);
  }

  dislikeComment(id){
    return this.http.get<any[]>(`${API_URL}/comments/dislike/${id}`);
  }

  getAllCommentByHouseId(id) {
    return this.http.get<any[]>(`${API_URL}/comments/house/${id}`);
  }

  createComment(comment): Observable<Type> {
    return this.http.post(`${API_URL}/comments`, comment);
  }
}
