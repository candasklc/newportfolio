import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppKnowledgeComponent } from 'src/app-knowledge/app-knowledge.component';
import { KnowledgeHomeComponent } from 'src/app-knowledge/components/knowledge-home/knowledge-home.component';
import { HomepageComponent } from 'src/app/components/homepage/homepage.component';
import { NotFoundComponent } from 'src/app/components/not-found/not-found.component';

const routes: Routes = [
{ path: 'home', component: HomepageComponent },
{ path: 'knowledge', component: AppKnowledgeComponent, children: [
  { path: 'knowledge-home', component: KnowledgeHomeComponent }
] },
{ path: '',   redirectTo: '/home', pathMatch: 'full' },
{ path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
