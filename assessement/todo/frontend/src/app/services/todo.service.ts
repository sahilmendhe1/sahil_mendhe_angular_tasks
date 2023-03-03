import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';

const baseUrl = 'http://127.0.0.1:8080/api/todos';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(baseUrl)
  }
  get(id: any): Observable<Todo> {
    return this.http.get<Todo>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<Todo> {
    return this.http.post<Todo>(baseUrl, data);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  // findByTitle(title: any): Observable<Todo[]> {
  //   return this.http.get<Todo[]>(`${baseUrl}?title=${title}`);
  // }
}
