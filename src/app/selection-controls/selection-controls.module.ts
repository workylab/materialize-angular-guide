import { CheckboxesComponent } from './checkboxes/checkboxes.component';
import { MaterializeComponentsModule } from 'materialize-angular';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SelectionControlsComponent } from './selection-controls.component';

@NgModule({
  declarations: [
    CheckboxesComponent,
    SelectionControlsComponent
  ],
  imports: [
    MaterializeComponentsModule,
    RouterModule
  ]
})
export class SelectionControlsModule {
}
