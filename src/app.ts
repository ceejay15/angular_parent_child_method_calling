import {Component, NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {AppComponent} from './app.component';
import {myChildComponent} from './myChild.component';


@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent,myChildComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
