import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = 'https://api.spacexdata.com/v3/launches';

  constructor(private httpClient: HttpClient) {
  }

  public getAll(): any {
    return this.httpClient.get(this.REST_API_SERVER);
  }

  public getById(id: number): any {
    return this.httpClient.get(`${this.REST_API_SERVER}/${id}`);
  }
}
