import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToDoFormComponent } from './components/to-do-form/to-do-form.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ToDoFormComponent, ToDoListComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
