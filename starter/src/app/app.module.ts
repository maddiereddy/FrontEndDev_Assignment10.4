import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { MySelectComponent } from './my-select.component'

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, MySelectComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }
