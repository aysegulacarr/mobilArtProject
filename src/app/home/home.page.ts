import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ArtfeedsService} from '../artfeeds.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { NavigationExtras } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
//


import { NavController } from "@ionic/angular";

import 'firebase/firestore'

import { AngularFirestore } from '@angular/fire/firestore';
import firebase from "firebase/app";
import { CanActivate, Router, ActivatedRoute, UrlTree } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {
  [x: string]: any;
  
  

  arts:any
  information : any;
 
  data:any
 
  
    
  result:Observable<any>;
  ngOnInit() { }
  constructor(private artservices:ArtfeedsService,private router:Router) {
   
    this.loadResim();
  
  
  }
  

  
  
    items: any;
    
  
    x:any;
    z:any;
  loadResim(){
   // this.http.get(url).map(res => res.json()).subscribe(res => {
    this.artservices.getExample("/image?").subscribe(r=>{

      this.x=r["records"];
     
      
      console.log("items",this.x);
      
    }

    
      
    );
   
  }
  getDetails (detay) {
    this.artservices.getExample(detay);
  } 
 
  k:any
  y:any;
  goToDetail(item){
    
      this.artservices.currentdata=item;
      this.k=item["imageid"];
     
     


      this.artservices.getData(this.k).subscribe(r=>{
           this.y=JSON.stringify(r)
      });
     
     this.router.navigate(['/details'],this.y);
  }
   
 ///exhibition?venue=HAM
 


}
