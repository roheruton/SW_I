import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './componentes/home-page/home-page.component';
import { RegisterPageComponent } from './componentes/register-page/register-page.component';
import { SecretRouteComponent } from './componentes/secret-route/secret-route.component';

const routes: Routes = [
  {path: 'Inicio', component:HomePageComponent},
  {path: 'Principal', component:SecretRouteComponent},
  {path: 'Registro',component: RegisterPageComponent},
  {path: '', redirectTo:'/Inicio', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
