import { RouterModule, Routes } from '@angular/router';
import { CheckboxesComponent } from './selection-controls/checkboxes/checkboxes.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { SelectionControlsComponent } from './selection-controls/selection-controls.component';

const appRoutes: Routes = [{
  children: [{
    children: [{
      component: CheckboxesComponent,
      path: 'checkboxes'
    }, {
      path: '',
      pathMatch: 'full',
      redirectTo: 'checkboxes'
    }],
    component: SelectionControlsComponent,
    path: 'selection-controls'
  }, {
    path: '',
    pathMatch: 'full',
    redirectTo: 'selection-controls'
  }],
  component: AppComponent,
  path: 'guide'
}, {
  path: '',
  pathMatch: 'full',
  redirectTo: 'guide'
}];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(appRoutes)]
})

export class AppRoutingModule {}
