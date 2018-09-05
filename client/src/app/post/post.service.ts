import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../model/post';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get('/server/api/posts');
  }

  getPost(id: number) {
    return this.http.get('/server/api/posts' + '/' + id);
  }

  createPost(post) {
    const body = JSON.stringify(post);
    return this.http.post('/server/api/posts', body, httpOptions);
  }
}
