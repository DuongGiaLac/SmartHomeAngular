import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {InfoDisplayComponent} from './main/module-view/info-display/info-display.component';
import {InfoButtonComponent} from './main/module-view/info-button/info-button.component';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ChartsComponent} from './charts/charts.component';
import {DetailInfoComponent} from './detail-info/detail-info.component';
import {MatDialogModule} from '@angular/material/dialog';
import {ChartsModule} from 'ng2-charts';
import {DialogMonitorButtonComponent} from './dialog-monitor-button/dialog-monitor-button.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatTabsModule} from '@angular/material/tabs';
import {LoginComponent} from './login/login.component';
import {MainComponent} from './main/main.component';
import {MatInputModule} from '@angular/material/input';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {ModuleViewComponent} from './main/module-view/module-view.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from 'src/environments/environment';
import {MatGridListModule} from '@angular/material/grid-list';
import {ConnectDialogComponent} from './connect-dialog/connect-dialog.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    DetailInfoComponent,
    DialogMonitorButtonComponent,
    LoginComponent,
    MainComponent,
    ModuleViewComponent,
    InfoDisplayComponent,
    InfoButtonComponent,
    ConnectDialogComponent
  ],
  entryComponents: [
    DetailInfoComponent, ConnectDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ChartsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatTabsModule,
    MatInputModule,
    MatTabsModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
