import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '../interface/data';
import { Tracks } from '../interface/tracks';
import { Task } from '../interface/task';
import { Track } from '../interface/track';

@Injectable({
  providedIn: 'root'
})
export class CancionService {

  private api = 'http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=b284db959637031077380e7e2c6f2775&format=json';

  constructor(private http: HttpClient) { }

  getAllTask(): Observable<Task>{
    const path = `${this.api}`;
    return this.http.get<Task>(path);
  } 
  getAll(){
    return this.http.get(this.api);
  }
}
