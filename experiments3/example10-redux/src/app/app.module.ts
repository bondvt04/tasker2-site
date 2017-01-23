import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {
  createStore,
  Store,
  StoreEnhancer
} from 'redux';
import {AppState} from "./app-state";
import { counterReducer } from './counter-reducer';

import { OpaqueToken } from '@angular/core';
import { CounterComponent } from './counter/counter.component';

export const AppStore = new OpaqueToken('App.store');


//let store: Store<AppState> = createStore<AppState>(counterReducer);



let devtools: StoreEnhancer<AppState> =
  window['devToolsExtension'] ?
  window['devToolsExtension']() : f => f;

let store: Store<AppState> = createStore<AppState>(
  counterReducer,
  devtools
);


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    {provide: AppStore, useValue: store }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
