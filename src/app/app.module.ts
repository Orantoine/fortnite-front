import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppareilService} from './service/appareil.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilComponentComponent } from './appareil-component/appareil-component.component';
import { FormsModule} from '@angular/forms';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import {RouterModule, Routes} from '@angular/router';
import { AppareilAuthComponent } from './appareil-auth/appareil-auth.component';
import {AuthService} from './service/auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';


const appRoutes : Routes = [
  { path:'appareils', component: AppareilViewComponent},
  {path:'appareils/:id', component:SingleAppareilComponent},
  { path:'auth', component:AppareilAuthComponent},
  {path:'',component:AppareilViewComponent}
  ];
@NgModule({
  declarations: [
    AppComponent,
    AppareilComponentComponent,
    AppareilViewComponent,
    AppareilAuthComponent,
    SingleAppareilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [AppareilService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
