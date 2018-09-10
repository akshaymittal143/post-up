import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/internal/operators';
import { Post } from '../model/post';
import { LoggerService } from '../shared/logger.service';

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

  private static handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      LoggerService.log(`${operation} failed: ${error.message}`);

      if (error.status >= 500) {
        throw error;
      }

      return of(result as T);
    };
  }
  getPosts() {
    return this.http.get('/server/api/posts');
  }

  getPost(id: number) {
    return this.http.get('/server/api/posts' + '/' + id);
  }

  createPost(newpost: Post) {
    console.log('Created Post is Started!!!');
    const body = JSON.stringify(newpost);
    return this.http.post('/server/api/posts', body, httpOptions).pipe(
      tap((postSaved: Post) => {
        LoggerService.log(`added hero w/ id=${postSaved.id}`);
      }),
      catchError(PostService.handleError<Post>('addPost'))
    );
  }
}
