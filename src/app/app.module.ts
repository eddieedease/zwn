import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';

import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SiteComponent } from './site/site.component';
import { UnderconstructionComponent } from './underconstruction/underconstruction.component';


const appRoutes: Routes = [
  // { path: 'landing', component: LandingComponent },
  { path: 'site', component: SiteComponent },
  { path: 'underconstruction', component: UnderconstructionComponent },
  { path: '',
    redirectTo: 'underconstruction',
    pathMatch: 'full'
  },
  { path: '**', component: UnderconstructionComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SiteComponent,
    UnderconstructionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { useHash: false } // <-- debugging purposes only true
    ),
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
