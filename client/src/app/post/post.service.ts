import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { Observable, of } from 'rxjs';
import { catchError, combineAll, tap } from 'rxjs/internal/operators';
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
    return this.http.get('/server/api/posts').pipe(
      tap(() => LoggerService.log('fetched all posts!!')),
      catchError(PostService.handleError<Post>('fetchAllPosts'))
    );
  }

  getPost(id: number) {
    return this.http.get('/server/api/posts' + '/' + id).pipe(
      tap(() => LoggerService.log('fetch post by id: ' + id)),
      catchError(PostService.handleError<Post>('fetchById'))
    );
  }

  createPost(newpost: Post) {
    console.log('Created Post is Started!!!');
    const body = JSON.stringify(newpost);
    return this.http.post('/server/api/posts', body, httpOptions).pipe(
      tap((postSaved: Post) => {
        LoggerService.log(`added post w/ id=${postSaved.id}`);
      }),
      catchError(PostService.handleError<Post>('addPost'))
    );
  }

  updatePost(updatedPost: Post) {
    const body = JSON.stringify(updatedPost);
    console.log(body);
    console.log('/server/api/posts/' + updatedPost.id);
    return this.http
      .put('/server/api/posts/' + updatedPost.id, body, httpOptions)
      .subscribe(
        () => console.log('successfully updated the post by id:' + updatedPost.id),
        catchError(PostService.handleError<Post>('updated Post!!'))
      );
  }

  deletePost(id: number) {
    return this.http
      .delete('/server/api/posts/' + id, httpOptions)
      .subscribe(() => console.log('successfully deleted the post: ' + id), err => console.log(err));
  }
}
