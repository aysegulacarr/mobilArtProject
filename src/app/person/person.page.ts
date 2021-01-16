import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { from } from 'rxjs';

import { ArtfeedsService } from '../artfeeds.service';
import {DetailsPage} from '../details/details.page'

//import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
@Component({
  selector: 'app-person',
  templateUrl: './person.page.html',
  styleUrls: ['./person.page.scss'],
})
export class PersonPage implements OnInit {
  person:any;
  temp2:any;
  //person1:DetailsPage["temp1"];
  temp1:any;
  constructor(private activatedRoute: ActivatedRoute,private artServices:ArtfeedsService,private router:Router,public nav:NavController) {
         // this.person=this.activatedRoute.snapshot.paramMap.get("id");
         // console.log(this.person);
      }
      // getPerson(prn){
      //   this.artServices.yolla=prn;
      //   console.log(prn,"yeter ")
      //   this.artServices.getArt(prn).subscribe(r=>{
      //     this.temp1=JSON.parse(JSON.stringify(r));
  
      //     console.log(this.temp1,"hadi be")
      //    });
       
      //   this.temp2=this.temp1["url"];
      //   console.log(this.temp2);
      //   this.router.navigate(['/person']);
      //   }
    // this.activatedRoute.queryParams.subscribe(params=>{
    //       if(params && params.special){
    //         this.person=JSON.parse(params.special);
    //       }
    // });
    

    // loadNew(){
    //   let title =this.nav.navigateBack("person");
    //   console.log(title)
    // }
    
    
   
    //this.person=this.temp1;
    
   // this.router.navigate(['/person'],navigationExtras);
  
//  person:any;
  ngOnInit() {
   // this.person = this.activatedRoute.snapshot.paramMap.get('id');
    // this.person=this.activatedRoute.snapshot.params;
 //  this.person=this.artServices.
  //  console.log(this.person["displayname"])
   // this.person=JSON.parse(JSON.stringify(dataRecv))
    //console.log(this.person)
   // window.open = cordova.InAppBrowser.open;
   //const browser = this.iab.create(this.person);
  

  // Opening a URL and returning an InAppBrowserObject
 // const browser = this.iab.create(this.person, '_self');

   //window.open = cordova.InAppBrowser.open;
 
   
  //window.open(this.person,'_system', 'location=yes');
    //const browser = this.iab.create(this.person);
    //browser.show();
    //console.log('this.router.url', this.router.url);
   // this.router.navigateByUrl(this.person);

}
}
