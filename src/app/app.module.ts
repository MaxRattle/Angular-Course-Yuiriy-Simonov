import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipesExamplePipe } from './pipes/pipes-example.pipe';
import { SortDataPipe } from './pipes/sort-data.pipe';
import { ChildComponent } from './components/child/child.component';

@NgModule({
  declarations: [AppComponent, PipesExamplePipe, SortDataPipe, ChildComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
