import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ArtfeedsService } from '../artfeeds.service';
import { PersonPage } from '../person/person.page';


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

   datax:any;
   datay:any;
   temp:any;
   temp1:any;
   person:any;
   temp2:any;
   constructor(private activatedRoute: ActivatedRoute,private artServices:ArtfeedsService,private router:Router,public nav: NavController){
      
  //  constructor(private activatedRoute: ActivatedRoute,private router:Routerprivate artServices:ArtfeedsService) {
    this.activatedRoute.queryParams.subscribe(params=>{
      console.log("params:",params);
      this.datay=JSON.parse(JSON.stringify(params));
      console.log(this.datay);
    });
  //  }}
    
    } 

    getPerson(prn){
      this.artServices.yolla=prn;
      console.log(prn,"yeter ")
      this.artServices.getArt(prn).subscribe(r=>{
        this.temp1=JSON.parse(JSON.stringify(r));

        console.log(this.temp1,"hadi be")
       });
      let navigationExtras:NavigationExtras={
           state:{
             special:JSON.stringify(this.temp1)
           }
      }
      this.temp2=this.temp1["url"];
      console.log(this.temp2);
      window.open(this.temp2,'_system', 'location=yes');
     
    
    }
    
  ngOnInit() {
   // console.log(this.artServices.currentdata);
    this.datax=this.artServices.currentdata;
    this.temp=this.datax["imageid"]
    console.log(this.temp,"buseferolcak")
     this.datay=this.artServices.getData(this.datax["imageid"]).subscribe(r=>{
     this.datay=JSON.parse(JSON.stringify(r))
     //this.router.navigate(['/person']);
    })
    
  

}
}