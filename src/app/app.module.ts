import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {LoginComponent} from './login/login.component';
import {MainComponent} from './main/main.component';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {ModuleViewComponent} from './main/module-view/module-view.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from 'src/environments/environment';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material';
import {InfoDisplayComponent} from './main/module-view/info-display/info-display.component';
import {InfoButtonComponent} from './main/module-view/info-button/info-button.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    ModuleViewComponent,
    InfoDisplayComponent,
    InfoButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
