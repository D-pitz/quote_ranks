import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() settings
  author: {name:string}
  authorError: string
  errors:any
  constructor(
    private _http: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.author= {name:''}
  }
  createOne(author){
    this._http.createOne(this.author)
    .subscribe((data:any)=>{
      if (data.errors){
        console.log(data)
        this.authorError = data.errors.name.message
      }
      else { 
        this._router.navigate(['/'])
      }
    })
  }
}
