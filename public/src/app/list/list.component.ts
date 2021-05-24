import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  authors: {name:string}[]
  author:{name:string}

  constructor(
    private _http: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ) { 
      
    }

  ngOnInit() {
    this.authors= []
    this.showAll()
  }
  showAll(){
    this._http.showAll()
    .subscribe(data=>this.authors = data)
  }
  deleteOne(author){
    this._http.deleteOne(author)
      .subscribe(data=>{
        this.showAll()
      })
  }
}
