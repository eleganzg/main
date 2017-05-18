import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Angular2FontAwesomeModule } from 'angular2-font-awesome';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header';
import { FooterComponent } from './footer';
import { HomeComponent } from './home';
import { AboutUsComponent } from './about-us';
import { ServicesComponent } from './services';
import { ContactComponent } from './contact';

import { ContactService } from './contact';
import { LoginComponent } from './login';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        AboutUsComponent,
        ServicesComponent,
        ContactComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        Angular2FontAwesomeModule
    ],
    providers: [
        ContactService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
