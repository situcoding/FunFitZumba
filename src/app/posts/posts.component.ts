import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  postsAPIURL: string = "https://jsonplaceholder.typicode.com/posts"

  constructor(private httpClient: HttpClient){
    this.httpClient.get(this.postsAPIURL)
              .subscribe(
                response => console.log(response)
              )
    }
}
