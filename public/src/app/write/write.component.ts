import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})
export class WriteComponent implements OnInit {
  author: {name: string}
  quotes: {quotes:string}[]
  quote: {quote:string}
  votes: number
  author_to_update:{name:string}
  quoteError: string
  errors: any
  
  constructor(
    private _http: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.showOne()
    this.author={name:''}
    this.author_to_update={name:''}
    this.quote = {quote:''}
    this.quotes= []
    this.quoteError= ''
    this.errors=''
  }

  showOne(){
    this._route.params.subscribe((params: Params)=>{
      this._http.showOne(params['id']).subscribe((data:any)=>{
        this.author = data
      })
    })
  }

  addQuote(){
    this.author_to_update = this.author
    this._http.addQuote(this.author_to_update, this.quote)
      .subscribe((data:any)=>{
        if (data.errors){
          console.log(data)
          this.quoteError = data.errors.message
        }
        else { 
          this._router.navigate(['/'])
        }
      })
    }

}
