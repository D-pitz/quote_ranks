import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @Input() settings
  author: {name:string}
  author_to_update:{name:string}
  authorError: string
  errors:any
  
  constructor(
    private _http: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ) { 
      this.author= {name:''}
      this.author_to_update={name:''}
    }
    
    ngOnInit() {
    this.showOne()
  }
  showOne(){
    this._route.params.subscribe((params: Params)=>{
      this._http.showOne(params.id).subscribe((data:any)=>{
        this.author = data
      })
    })
  }
  updateOne(){
    this.author_to_update = this.author
    this._http.updateOne(this.author_to_update)
    .subscribe((data:any)=>{
      console.log(data, this.author_to_update)
      if (data.errors && data.errors.name){
        this.authorError = data.errors.name.message
      }else{ 
        this._router.navigate(['/'])
      }
    })
  }
}
