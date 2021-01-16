import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
//
import {HttpClientModule} from '@angular/common/http'
import {HttpClient} from '@angular/common/http'
//
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
//import {HttpClientModule,HttpClient} from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import {AngularFirestoreModule} from '@angular/fire/firestore';


import {environment} from '../environments/environment';
import firebase from "firebase/app";
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import 'firebase/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';


import {AngularFireModule} from '@angular/fire';

import { HttpRequest, HttpResponse, HttpInterceptor, HttpHandler, HttpEvent } from '@angular/common/http'
HttpClientModule
//K


firebase.initializeApp(environment.firebaseConfig);
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,FormsModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpClientModule,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClient,
    HttpClientModule,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
//

// firebase.initializeApp(environment.firebaseConfig);

// //
// @NgModule({
//   declarations: [AppComponent],
//   entryComponents: [],
//   imports: [BrowserModule,FormsModule, IonicModule.forRoot(), AppRoutingModule,
//     AngularFireModule.initializeApp(environment.firebaseConfig),
//     AngularFireAuthModule,
//     AngularFirestoreModule,
//     HttpClient,
//     HttpClientModule,
//     //IonicModule.forRoot(),
    
   
    
//   ],
//   providers: [
//     StatusBar,
//     SplashScreen,
//     HttpClient,
    
    
//     { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule {}
// //ne idsiamk dur