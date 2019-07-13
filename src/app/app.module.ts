import { AccordionPageComponent } from './accordion/accordion.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonPageComponent } from './button/button.component';
import { ButtonTogglePageComponent } from './button-toggle/button-toggle.component';
import { CalendarPageComponent } from './calendar/calendar.component';
import { CheckboxPageComponent } from './checkbox/checkbox.component';
import { CheckboxListPageComponent } from './checkbox-list/checkbox-list.component';
import { CollapsiblePageComponent } from './collapsible/collapsible.component';
import { DrawerPageComponent } from './drawer/drawer.component';
import { DropdownPageComponent } from './dropdown/dropdown.component';
import { InputPageComponent } from './input/input.component';
import { LabelPageComponent } from './label/label.component';
import { ListPageComponent } from './list/list.component';
import { IconPageComponent } from './icon/icon.component';
import { MaterializeComponentsModule } from 'materialize-angular';
import { ModalPageComponent } from './modal/modal.component';
import { NavbarPageComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { RadioPageComponent } from './radio/radio.component';
import { RipplePageComponent } from './ripple/ripple.component';
import { RouterModule } from '@angular/router';
import { SelectPageComponent } from './select/select.component';
import { SliderPageComponent } from './slider/slider.component';
import { SwitchPageComponent } from './switch/switch.component';
import { TabPageComponent } from './tab/tab.component';
import { TablePageComponent } from './table/table.component';
import { TextAreaPageComponent } from './textarea/textarea.component';
import { TooltipPageComponent } from './tooltip/tooltip.component';

@NgModule({
  declarations: [
    AccordionPageComponent,
    AppComponent,
    ButtonPageComponent,
    ButtonTogglePageComponent,
    CalendarPageComponent,
    CheckboxPageComponent,
    CheckboxListPageComponent,
    CollapsiblePageComponent,
    DropdownPageComponent,
    DrawerPageComponent,
    IconPageComponent,
    InputPageComponent,
    LabelPageComponent,
    ListPageComponent,
    ModalPageComponent,
    NavbarPageComponent,
    RadioPageComponent,
    RipplePageComponent,
    SelectPageComponent,
    SliderPageComponent,
    SwitchPageComponent,
    TabPageComponent,
    TablePageComponent,
    TextAreaPageComponent,
    TooltipPageComponent
  ],
  exports: [
    RouterModule
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MaterializeComponentsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
