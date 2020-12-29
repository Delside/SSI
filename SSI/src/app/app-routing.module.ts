import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { MainSiteComponent } from './components/main-site/main-site.component';

const routes: Routes = [
  {
    path: 'main-site',
    component: MainSiteComponent
  },
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: '*',
    redirectTo: 'main-site'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
