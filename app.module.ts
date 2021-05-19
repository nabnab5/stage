import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { OwlModule} from 'ngx-owl-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { headerComponent } from './header/header.component';
import { footerComponent } from './footer/footer.component';
import { header1Component } from './header/header1.component';
import { homeComponent } from './home/home.component';
import { contactComponent } from './contact_us/contact.component';
import { medecinComponent } from './home/medecin.component';



@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    footerComponent,
    header1Component,
    homeComponent,
    contactComponent,
    medecinComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    OwlModule,
    CarouselModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
