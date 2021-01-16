import { Injectable } from '@angular/core';
import { environment} from '../environments/environment';
import { HttpClient} from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//import { map, filter, switchMap } from 'rxjs/operators';



const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;
// const url =
//     `https://api.harvardartmuseums.org/person?apikey=${API_KEY}` +
//     `&q=personid:${id}` +
//     `&fields=${fields}`;
@Injectable({
  providedIn: 'root'
})

export class ArtfeedsService {

 

 // url= 'https://api.harvardartmuseums.org';
 // apiKey='18ffbb24-5dfd-439e-bc60-b98cff83402a';
  constructor(private http:HttpClient) { }
  ngOnInit() { }
  currentdata:any;
  yolla:any;
  getArt(url){
    return  this.http.get(`${API_URL}/person/${url}?apikey=${API_KEY}`);
                       
                   }
 



getExample(resim):Observable<any>{
  return this.http.get(`${API_URL}${resim}&apikey=${API_KEY}`);
    
    }


  getData(id){
    return this.http.get(`${API_URL}/object/${id}?apikey=${API_KEY}`);
    
  }
  
   
}









