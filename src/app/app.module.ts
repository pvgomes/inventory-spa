import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes , RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComputersComponent } from './computers/computers.component';
import { ItemComponent } from './computers/item/item.component';
import { CockpitComponent } from './computers/cockpit/cockpit.component';
import { OthersComponent } from './others/others.component';
import { ComputersService } from './computers/computers.service';

const appRoutes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'computers', component: ComputersComponent },
    { path: 'others', component: OthersComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ComputersComponent,
    OthersComponent,
    CockpitComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [ComputersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
