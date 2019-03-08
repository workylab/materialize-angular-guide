import { CheckboxesComponent } from './checkboxes/checkboxes.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SelectionControlsComponent } from './selection-controls.component';

@NgModule({
  declarations: [
    CheckboxesComponent,
    SelectionControlsComponent
  ],
  imports: [
    RouterModule,
  ]
})
export class SelectionControlsModule {
}
