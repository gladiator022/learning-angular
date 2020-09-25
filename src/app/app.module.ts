import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvcomponentComponent } from './cvcomponent/cvcomponent.component';
import { ListCvcomponentComponent } from './list-cvcomponent/list-cvcomponent.component';
import { CvItemComponentComponent } from './cv-item-component/cv-item-component.component';
import { DetailCvComponentComponent } from './detail-cv-component/detail-cv-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CvcomponentComponent,
    ListCvcomponentComponent,
    CvItemComponentComponent,
    DetailCvComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
