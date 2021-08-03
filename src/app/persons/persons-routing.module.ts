import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { PersonComponent } from './components/person/person.component';

const routes: Routes = [ {
  path: '',
  component: HeaderComponent,
  children: [
    {
      path: '',
      component: HomeComponent,
    },
    {
      path: 'person/:id',
      component: PersonComponent,
    },
  ],
},]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonsRoutingModule { }
