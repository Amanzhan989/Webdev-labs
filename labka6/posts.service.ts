import { Injectable } from '@angular/core';
import { POSTS } from './fake-db';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }
  getPosts(){
    return POSTS;
  }
}
