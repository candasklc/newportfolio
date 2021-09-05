import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppKnowledgeRoutingModule } from 'src/app-knowledge/app-knowledge-routing.module';
import { AppKnowledgeComponent } from 'src/app-knowledge/app-knowledge.component';
import { KnowledgeHomeComponent } from 'src/app-knowledge/components/knowledge-home/knowledge-home.component';
import { ItemComponent } from 'src/app-knowledge/components/item/item.component';
import { CustomMaterialModule } from 'src/app/custom-material/custom-material.module';

@NgModule({
  declarations: [
    AppKnowledgeComponent,
    KnowledgeHomeComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppKnowledgeRoutingModule,
    CustomMaterialModule
  ],
  providers: [],
  bootstrap: [ AppKnowledgeComponent ]
})
export class AppKnowledgeModule { }
