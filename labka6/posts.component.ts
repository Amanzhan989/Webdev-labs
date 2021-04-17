import { Component, OnInit } from '@angular/core';
import { POSTS } from '../fake-db';
import {Post} from '../models';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts!: Post[];
  constructor() { }

  ngOnInit(): void {
    this.posts = POSTS;
  }

}
