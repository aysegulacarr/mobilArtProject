import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
email;
pwd;
spin=false;

  constructor(public af:AngularFireAuth,public nav:NavController,private router:Router) { }
   //hangi id neybu yokki



  ngOnInit() {
  }


  login(){
    this.spin=true;
    
    this.af.signInWithEmailAndPassword(this.email,this.pwd).then((userData)=>{
      

       this.router.navigateByUrl('/home',{replaceUrl:true});
     // this.router.navigate(['/home']);
      // this.nav.navigateRoot("/home");
      this.router.navigate(['/home']);
      console.log("ne");
    }).catch(err=>{
      this.spin=false;
      alert(err.message);
    })
  }
 


}
