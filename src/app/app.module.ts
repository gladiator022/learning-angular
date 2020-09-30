import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvcomponentComponent } from './cvcomponent/cvcomponent.component';
import { ListCvcomponentComponent } from './list-cvcomponent/list-cvcomponent.component';
import { CvItemComponentComponent } from './cv-item-component/cv-item-component.component';
import { DetailCvComponentComponent } from './detail-cv-component/detail-cv-component.component';
import { StyleComponent } from './directives/style/style.component';
import { ClassComponent } from "./directives/class/ClassComponent";
import { HighlightDirective } from './directives/highlight.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import { EmployComponentComponent } from './employ-component/employ-component.component';
import { ROUTING } from './app-routing';
import { HeaderComponent } from './header/header.component';
import { AddCvComponent } from './add-cv/add-cv.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CvcomponentComponent,
    ListCvcomponentComponent,
    CvItemComponentComponent,
    DetailCvComponentComponent,
    StyleComponent,
    ClassComponent,
    HighlightDirective,
    RainbowDirective,
    EmployComponentComponent,
    HeaderComponent,
    AddCvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
