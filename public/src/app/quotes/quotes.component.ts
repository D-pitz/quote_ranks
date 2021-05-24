import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  author: any
  quotes: {quote:string}[]
  author_to_update:{name:string}
  votes: number

  constructor(
    private _http: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.showOne()
    this.author={}
    this.author_to_update={name:''}
    this.votes= this.votes
  }

  showOne(){
    this._route.params.subscribe((params: Params)=>{
      this._http.showOne(params['id']).subscribe((data:any)=>{
        this.author = data
      })
    })
  }
  
  upVote(i){
    this.author.votes[i]++
    this._http.Vote(this.author).subscribe((data:any)=>{
      console.log(data)
    })
  }
  downVote(i){
    this.author.votes[i]--
    this._http.Vote(this.author).subscribe((data:any)=>{
      console.log(data)
    })
  }
  removeOne(i){
    this._http.removeOne(i, this.author).subscribe((data:any)=>{
      this.showOne()
    })
  }
}
