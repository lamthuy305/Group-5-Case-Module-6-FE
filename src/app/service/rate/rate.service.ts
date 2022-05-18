import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Rate} from "../../model/rate";
const API_URL = `${environment.apiUrl}`;


@Injectable({
  providedIn: 'root'
})
export class RateService {

  constructor(private http: HttpClient) { }

  getRatesByHouseId(houseId: number): Observable<any> {
    return this.http.get<any>(`${API_URL}/rates/${houseId}`)
  }

  createRate(rate: Rate): Observable<any> {
    return this.http.post<any>(`${API_URL}/rates`, rate);
  }

  getRateByUserIdAndHouseId(houseId: number): Observable<any> {
    return this.http.get<any>(`${API_URL}/${houseId}`);
  }

  checkRates(rates: Rate[]): number {
    let total = 0;
    for (const rate of rates) {
      total += rate.ratePoint;
    }
    return Math.round((total / rates.length) * 100) / 100;
  }
}
