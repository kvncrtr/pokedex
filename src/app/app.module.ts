import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

/* Features */ 
import { HomeModule } from './components/home/home.module';
import { CustomTeamsModule } from './components/custom-teams/custom-teams.module';

/* Materials */ 
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

/* Components */ 
import { AppComponent } from './app.component';
import { LoadingComponent } from './components/loading/loading.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Store */ 
import { StoreModule } from '@ngrx/store';
import { userReducer } from './shared/store/reducers/user.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    CustomTeamsModule,
    HomeModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    StoreModule.forRoot({user: userReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: true})
  ],
  declarations: [    
    AppComponent, 
    LoginComponent,
    LoadingComponent,
    SignupComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
