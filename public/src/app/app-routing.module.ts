import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './edit/edit.component';

import { FormComponent } from './form/form.component'
import { ListComponent } from './list/list.component';
import { QuotesComponent } from './quotes/quotes.component';
import { WriteComponent } from './write/write.component';


const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'new', component: FormComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'quotes/:id', component: QuotesComponent},
  {path: 'write/:id', component: WriteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
