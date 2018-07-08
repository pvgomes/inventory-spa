import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes , RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { CockpitComponent } from './cockpit/cockpit.component';

const appRoutes: Routes = [
    { path: '', component: AppComponent },
    { path: 'computers', component: ItemComponent },
    { path: 'others', component: ItemComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    CockpitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
