import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule,RequestOptions, XHRBackend} from '@angular/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes, DefaultUrlSerializer, UrlTree} from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination'; 
import {FlexLayoutModule} from "@angular/flex-layout";

//Angular 2 ui notification
import {ToastyModule} from 'ng2-toasty';

//Angular Material components
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule,MdInputModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';


import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { AboutComponent } from './components/about/about.component';

import {DataService} from './services/data-services.service';
import {HttpService} from './AuthProviders/http.service';
import {AuthService} from './AuthProviders/auth.service';
import {LoginComponent } from './components/login/login.component'
import {AuthGuard} from './AuthProviders/auth-guard.service';
import { NavbarComponent } from './Theme/navbar/navbar.component';
import { SidebarComponent } from './Theme/sidebar/sidebar.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { CustomPageComponent } from './Theme/custom-page/custom-page.component';
import {FilterPipe} from './Filter_Services/filter.pipe';

export class LowerCaseUrlSerializer extends DefaultUrlSerializer {
  parse(url: string): UrlTree {
      return super.parse(url.toLowerCase());
  }
}

export function httpFactory(backend: XHRBackend, defaultOptions: RequestOptions) {
  return new HttpService(backend, defaultOptions);
  }

const appRoutes: Routes=[
  {path:'', component:LoginComponent},
  {path:'posts', component:UserComponent},
  {path:'about', component:AboutComponent,canActivate: [AuthGuard]},
  {path:'login', component:LoginComponent},
  {path:'employee', component:EmployeeComponent,canActivate: [AuthGuard]},
  { path: '**', redirectTo: '/login' }
]


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    LoginComponent,
    NavbarComponent,
    SidebarComponent,
    EmployeeComponent,
    CustomPageComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdInputModule,
    ReactiveFormsModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    CommonModule,
    FlexLayoutModule,
    NgxPaginationModule,
    RouterModule.forRoot(appRoutes),
    ToastyModule.forRoot()
  ],
  providers: [DataService,AuthService,AuthGuard,{
    provide: DefaultUrlSerializer,
    useClass: LowerCaseUrlSerializer
  },
  {
    provide: HttpService,
    useFactory: httpFactory,
    deps: [XHRBackend, RequestOptions]
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
