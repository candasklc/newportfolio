import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KnowledgeHomeComponent } from 'src/app-knowledge/components/knowledge-home/knowledge-home.component';


const routes: Routes = [
  { path: 'home', component: KnowledgeHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppKnowledgeRoutingModule { }
