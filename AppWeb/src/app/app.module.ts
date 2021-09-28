import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './componentes/home-page/home-page.component';
import { SecretRouteComponent } from './componentes/secret-route/secret-route.component';
import { RegisterPageComponent } from './componentes/register-page/register-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SecretRouteComponent,
    RegisterPageComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
