import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';

import { HomeComponent} from './home/home.component';
import { AutoComponent} from './auto/auto.component';
import { ListComponent} from './auto/list/list.component';
import { EditComponent} from './auto/edit/edit.component';
import { CreateComponent} from './auto/create/create.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'autos', component: AutoComponent },
  { path: 'autos/list', component: ListComponent },
  { path: 'autos/edit/:id', component: EditComponent },
  { path: 'autos/create', component: CreateComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
