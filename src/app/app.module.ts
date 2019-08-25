import { AccordionPageComponent } from './components/accordion/accordion.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonPageComponent } from './components/button/button.component';
import { ButtonTogglePageComponent } from './forms/button-toggle/button-toggle.component';
import { CalendarPageComponent } from './components/calendar/calendar.component';
import { CheckboxPageComponent } from './forms/checkbox/checkbox.component';
import { CheckboxListPageComponent } from './forms/checkbox-list/checkbox-list.component';
import { CollapsiblePageComponent } from './components/collapsible/collapsible.component';
import { DrawerPageComponent } from './layout/drawer/drawer.component';
import { DropdownPageComponent } from './components/dropdown/dropdown.component';
import { InputPageComponent } from './forms/input/input.component';
import { LabelPageComponent } from './forms/label/label.component';
import { ListPageComponent } from './components/list/list.component';
import { IconPageComponent } from './css/icon/icon.component';
import {
  MaterializeAccordionModule,
  MaterializeButtonModule,
  MaterializeButtonToggleGroupModule,
  MaterializeCardModule,
  MaterializeCheckboxModule,
  MaterializeCollapsibleModule,
  MaterializeCommonModule,
  MaterializeDrawerModule,
  MaterializeGlossaryModule,
  MaterializeHTMLVisualizerModule,
  MaterializeInputModule,
  MaterializeNavbarModule,
  MaterializeScrollSpyModule,
  MaterializeTabGroupModule,
  MaterializeIconModule,
  MaterializeLabelModule,
  MaterializeModalModule,
  MaterializeRadioGroupModule,
  MaterializeSelectModule,
  MaterializeTextAreaModule,
  MaterializeSwitchModule,
  MaterializeSliderModule
} from 'materialize-angular';
import { ModalPageComponent } from './components/modal/modal.component';
import { NavbarPageComponent } from './layout/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { RadioPageComponent } from './forms/radio/radio.component';
import { RipplePageComponent } from './css/ripple/ripple.component';
import { RouterModule } from '@angular/router';
import { SelectPageComponent } from './forms/select/select.component';
import { SliderPageComponent } from './forms/slider/slider.component';
import { SwitchPageComponent } from './forms/switch/switch.component';
import { TabPageComponent } from './layout/tab/tab.component';
import { TablePageComponent } from './components/table/table.component';
import { TextAreaPageComponent } from './forms/textarea/textarea.component';
import { TooltipPageComponent } from './components/tooltip/tooltip.component';
import { ComponentsPageComponent } from './components/components.component';
import { CSSPageComponent } from './css/css.component';
import { FormsPageComponent } from './forms/forms.component';
import { HomePageComponent } from './home/home.component';
import { LayoutPageComponent } from './layout/layout.component';
import { ThemePageComponent } from './themes/theme.component';
import { DatePickerPageComponent } from './forms/date-picker/date-picker.component';
import { CardPageComponent } from './css/card/card.component';
import { DividerPageComponent } from './css/divider/divider.component';
import { AboutPageComponent } from './about/about.component';
import { GettingStartedPageComponent } from './getting-started/getting-started.component';

@NgModule({
  declarations: [
    AboutPageComponent,
    AccordionPageComponent,
    AppComponent,
    ButtonPageComponent,
    ButtonTogglePageComponent,
    CalendarPageComponent,
    CardPageComponent,
    CheckboxPageComponent,
    CheckboxListPageComponent,
    CollapsiblePageComponent,
    ComponentsPageComponent,
    CSSPageComponent,
    DatePickerPageComponent,
    DividerPageComponent,
    DropdownPageComponent,
    DrawerPageComponent,
    FormsPageComponent,
    GettingStartedPageComponent,
    HomePageComponent,
    IconPageComponent,
    InputPageComponent,
    LabelPageComponent,
    LayoutPageComponent,
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
    ThemePageComponent,
    TooltipPageComponent
  ],
  exports: [
    RouterModule
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MaterializeAccordionModule,
    MaterializeButtonModule,
    MaterializeButtonToggleGroupModule,
    MaterializeCardModule,
    MaterializeCheckboxModule,
    MaterializeCollapsibleModule,
    MaterializeCommonModule,
    MaterializeDrawerModule,
    MaterializeGlossaryModule,
    MaterializeHTMLVisualizerModule,
    MaterializeIconModule,
    MaterializeInputModule,
    MaterializeLabelModule,
    MaterializeModalModule,
    MaterializeNavbarModule,
    MaterializeRadioGroupModule,
    MaterializeScrollSpyModule,
    MaterializeSelectModule,
    MaterializeTabGroupModule,
    MaterializeTextAreaModule,
    MaterializeSliderModule,
    MaterializeSwitchModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
