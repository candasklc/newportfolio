import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppKnowledgeRoutingModule } from 'src/app-knowledge/app-knowledge-routing.module';
import { AppKnowledgeComponent } from 'src/app-knowledge/app-knowledge.component';
import { KnowledgeHomeComponent } from 'src/app-knowledge/components/knowledge-home/knowledge-home.component';

@NgModule({
  declarations: [
    AppKnowledgeComponent,
    KnowledgeHomeComponent
  ],
  imports: [
    BrowserModule,
    AppKnowledgeRoutingModule
  ],
  providers: [],
  bootstrap: [ AppKnowledgeComponent ]
})
export class AppKnowledgeModule { }
