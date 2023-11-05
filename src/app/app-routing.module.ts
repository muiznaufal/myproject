import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HompageComponent } from './pages/hompage/hompage.component';
import { ServiceComponent } from './pages/service/service.component';
import { NewsComponent } from './pages/news/news.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path:'',component:HompageComponent},
  {path:'service',component:ServiceComponent},
  {path:'news',component:NewsComponent},
  {path:'contact',component:ContactComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
