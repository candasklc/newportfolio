import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { AppKnowledgeModule } from 'src/app-knowledge/app-knowledge.module';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppKnowledgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
