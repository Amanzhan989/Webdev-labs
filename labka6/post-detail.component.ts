import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { POSTS } from '../fake-db';
import {Post} from '../models';
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post!: Post;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +console.log(this.route.snapshot.paramMap.get('id'));
    //this.post = POSTS.find((x)=>x.id===id); 
    //this.route.paramMap.subscribe( next: (params)=>{
      //const id = +params.get('id');
    //});
  }
  goBack(){

  }

}
