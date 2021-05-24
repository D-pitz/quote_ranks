import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) { }

    showAll(){
      return this._http.get<{name:string}[]>('/authors')
    }
    createOne(author){
      return this._http.post('/new/author', author)
    }
    showOne(id:string){
      return this._http.get(`show/${id}`)
    }
    updateOne(author_to_update:any){
      return this._http.put(`update/${author_to_update._id}`, author_to_update)
    }
    deleteOne(author){
      return this._http.delete(`delete/${author._id}`)
    }
    addQuote(author_to_update:any, quote){
      return this._http.post(`/add/quote/${author_to_update._id}`, quote)
    }
    showQuotes(author){
      return this._http.get<{quotes:string[]}>(`/show/quotes/${author}`)
    }
    Vote(author){
      return this._http.put(`upvote/${author._id}`, author)
    }
    removeOne(index, author){
      return this._http.delete(`remove/quote/${index}/${author._id}`, index)
    }

}
