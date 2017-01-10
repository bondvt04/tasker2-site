import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';



import {
  RouterModule,
  Routes
} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {PathLocationStrategy, HashLocationStrategy, LocationStrategy} from "@angular/common";
import { SearchComponent } from './search/search.component';
import { ArtistComponent } from './artist/artist.component';
import { TrackComponent } from './track/track.component';
import { AlbumComponent } from './album/album.component';
import { LoginComponent } from './login/login.component';
import {AuthService} from "./auth.service";
import { ProtectedComponent } from './protected/protected.component';
import {LoggedInGuard} from "../guards/loggedIn.guard";
//import {ProductsComponent} from "./products/products.component";

import {
  routes as childRoutes,
  ProductsComponent,
  ByIdComponent,
  InterestComponent,
  MainComponent,
  SportifyComponent
} from './products/products.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contactus', redirectTo: 'contact' },


  { path: 'search', component: SearchComponent },
  { path: 'artists/:id', component: ArtistComponent },
  { path: 'tracks/:id', component: TrackComponent },
  { path: 'albums/:id', component: AlbumComponent },

  { path: 'login', component: LoginComponent },
  { path: 'protected', component: ProtectedComponent,
    canActivate: [LoggedInGuard]},

  { path: 'products', component: ProductsComponent,
    children: childRoutes }
];

// console.log(RouterModule.forRoot(routes));
// debugger;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    SearchComponent,
    ArtistComponent,
    TrackComponent,
    AlbumComponent,
    LoginComponent,
    ProtectedComponent,
    ProductsComponent,

    ByIdComponent,
    InterestComponent,
    MainComponent,
    SportifyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    // { provide: LocationStrategy, useClass: PathLocationStrategy }
    AuthService,
    LoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
