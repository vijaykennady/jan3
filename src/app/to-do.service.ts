import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDoEntity } from './to-do-entity';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:8080/to";

  postToDo(a: ToDoEntity): Observable<ToDoEntity> {
    return this.http.post<ToDoEntity>(`${this.url}/insertToDo`, a);
  }

  getById(id: number): Observable<ToDoEntity> {
    return this.http.get<ToDoEntity>(`${this.url}/getById/${id}`);
  }

  getAll(): Observable<ToDoEntity[]> {
    return this.http.get<ToDoEntity[]>(`${this.url}/getall`);
  }

  putTo(id: number, a: ToDoEntity): Observable<ToDoEntity> {
    return this.http.put<ToDoEntity>(`${this.url}/update/${id}`, a);
  }

  deleteTo(id: number): Observable<ToDoEntity> {
    return this.http.delete<ToDoEntity>(`${this.url}/del/${id}`);
  }
}
