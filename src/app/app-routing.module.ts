import { AccordionPageComponent } from './accordion/accordion.component';
import { ButtonPageComponent } from './button/button.component';
import { ButtonTogglePageComponent } from './button-toggle/button-toggle.component';
import { CalendarPageComponent } from './calendar/calendar.component';
import { CheckboxPageComponent } from './checkbox/checkbox.component';
import { CheckboxListPageComponent } from './checkbox-list/checkbox-list.component';
import { CollapsiblePageComponent } from './collapsible/collapsible.component';
import { DrawerPageComponent } from './drawer/drawer.component';
import { DropdownPageComponent } from './dropdown/dropdown.component';
import { IconPageComponent } from './icon/icon.component';
import { InputPageComponent } from './input/input.component';
import { LabelPageComponent } from './label/label.component';
import { ListPageComponent } from './list/list.component';
import { ModalPageComponent } from './modal/modal.component';
import { NavbarPageComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { RadioPageComponent } from './radio/radio.component';
import { RouterModule, Routes } from '@angular/router';
import { RipplePageComponent } from './ripple/ripple.component';
import { SelectPageComponent } from './select/select.component';
import { SliderPageComponent } from './slider/slider.component';
import { SwitchPageComponent } from './switch/switch.component';
import { TabPageComponent } from './tab/tab.component';
import { TablePageComponent } from './table/table.component';
import { TextAreaPageComponent } from './textarea/textarea.component';
import { TooltipPageComponent } from './tooltip/tooltip.component';

const appRoutes: Routes = [{
  path: 'home',
  children: [{
    path: '',
    pathMatch: 'full',
    redirectTo: 'checkbox'
  }, {
    component: AccordionPageComponent,
    path: 'accordion'
  }, {
    component: ButtonPageComponent,
    path: 'button'
  }, {
    component: ButtonTogglePageComponent,
    path: 'button-toggle'
  }, {
    component: CheckboxListPageComponent,
    path: 'checkbox-list'
  }, {
    component: CalendarPageComponent,
    path: 'calendar'
  }, {
    component: CollapsiblePageComponent,
    path: 'collapsible'
  }, {
    component: CheckboxPageComponent,
    path: 'checkbox'
  }, {
    component: DrawerPageComponent,
    path: 'drawer'
  }, {
    component: DropdownPageComponent,
    path: 'dropdown'
  }, {
    component: IconPageComponent,
    path: 'icon'
  }, {
    component: InputPageComponent,
    path: 'input'
  }, {
    component: LabelPageComponent,
    path: 'label'
  }, {
    component: ListPageComponent,
    path: 'list'
  }, {
    component: ModalPageComponent,
    path: 'modal'
  }, {
    component: NavbarPageComponent,
    path: 'navbar'
  }, {
    component: RadioPageComponent,
    path: 'radio'
  }, {
    component: RipplePageComponent,
    path: 'ripple'
  }, {
    component: SelectPageComponent,
    path: 'select'
  }, {
    component: SliderPageComponent,
    path: 'slider'
  }, {
    component: SwitchPageComponent,
    path: 'switch'
  }, {
    component: TabPageComponent,
    path: 'tab'
  }, {
    component: TablePageComponent,
    path: 'table'
  }, {
    component: TextAreaPageComponent,
    path: 'textarea'
  }, {
    component: TooltipPageComponent,
    path: 'tooltip'
  }]
}, {
  path: '',
  pathMatch: 'full',
  redirectTo: 'home'
}];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(appRoutes)]
})

export class AppRoutingModule {}
