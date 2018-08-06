import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent} from './home/home.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { TechnicalComponent } from './technical/technical.component';

const routes: Routes = [
  {
   path: '', component: HomeComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'work', component: WorkComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'technical', component: TechnicalComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: [AboutComponent, HomeComponent, WorkComponent, ContactComponent, TechnicalComponent]
})
export class AppRoutingModule { }
