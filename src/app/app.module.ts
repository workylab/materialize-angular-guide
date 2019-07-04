import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { MaterializeComponentsModule } from 'materialize-angular';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SelectionControlsModule } from './selection-controls/selection-controls.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  exports: [
    RouterModule
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MaterializeComponentsModule,
    RouterModule,
    SelectionControlsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
