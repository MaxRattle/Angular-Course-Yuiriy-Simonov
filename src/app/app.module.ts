import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipesExamplePipe } from './pipes/pipes-example.pipe';
import { SortDataPipe } from './pipes/sort-data.pipe';

@NgModule({
  declarations: [AppComponent, PipesExamplePipe, SortDataPipe],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
