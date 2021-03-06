import { AccordionPageComponent } from './components/accordion/accordion.component';
import { ButtonPageComponent } from './components/button/button.component';
import { ButtonTogglePageComponent } from './forms/button-toggle/button-toggle.component';
import { CalendarPageComponent } from './components/calendar/calendar.component';
import { CheckboxPageComponent } from './forms/checkbox/checkbox.component';
import { CollapsiblePageComponent } from './components/collapsible/collapsible.component';
import { DrawerPageComponent } from './layout/drawer/drawer.component';
import { IconPageComponent } from './components/icon/icon.component';
import { InputPageComponent } from './forms/input/input.component';
import { LabelPageComponent } from './forms/label/label.component';
import { MessagePageComponent } from './forms/message/message.component';
import { ModalPageComponent } from './components/modal/modal.component';
import { NavbarPageComponent } from './layout/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { RadioPageComponent } from './forms/radio/radio.component';
import { RouterModule, Routes } from '@angular/router';
import { RipplePageComponent } from './components/ripple/ripple.component';
import { SelectPageComponent } from './forms/select/select.component';
import { SliderPageComponent } from './forms/slider/slider.component';
import { SwitchPageComponent } from './forms/switch/switch.component';
import { TabPageComponent } from './layout/tab/tab.component';
import { TextAreaPageComponent } from './forms/textarea/textarea.component';
import { ComponentsPageComponent } from './components/components.component';
import { FormsPageComponent } from './forms/forms.component';
import { LayoutPageComponent } from './layout/layout.component';
import { HomePageComponent } from './home/home.component';
import { ThemePageComponent } from './themes/theme.component';
import { DatePickerPageComponent } from './forms/date-picker/date-picker.component';
import { CardPageComponent } from './components/card/card.component';
import { AboutPageComponent } from './about/about.component';
import { GettingStartedPageComponent } from './getting-started/getting-started.component';
import { BaseLayoutComponent } from './base-layout/base-layout.component';

const appRoutes: Routes = [
{
  path: '',
  pathMatch: 'full',
  redirectTo: 'home'
},
{
  path: 'home',
  component: HomePageComponent
},
{
  path: 'guide',
  component: BaseLayoutComponent,
  children: [
    {
      path: 'about',
      component: AboutPageComponent
    },
    {
      path: 'get-started',
      component: GettingStartedPageComponent
    },
    {
      path: 'components',
      component: ComponentsPageComponent,
      children: [
        {
          component: AccordionPageComponent,
          path: 'accordion'
        },
        {
          component: ButtonPageComponent,
          path: 'button'
        },
        {
          component: CalendarPageComponent,
          path: 'calendar'
        },
        {
          component: CardPageComponent,
          path: 'card'
        },
        {
          component: CollapsiblePageComponent,
          path: 'collapsible'
        },
        {
          component: IconPageComponent,
          path: 'icon'
        },
        {
          component: ModalPageComponent,
          path: 'modal'
        },
        {
          component: RipplePageComponent,
          path: 'ripple'
        }
      ]
    },
    {
      path: 'forms',
      component: FormsPageComponent,
      children: [
        {
          component: ButtonTogglePageComponent,
          path: 'button-toggle'
        },
        {
          component: CheckboxPageComponent,
          path: 'checkbox'
        },
        {
          component: DatePickerPageComponent,
          path: 'date-picker'
        },
        {
          component: InputPageComponent,
          path: 'input'
        },
        {
          component: LabelPageComponent,
          path: 'label'
        },
        {
          component: MessagePageComponent,
          path: 'message'
        },
        {
          component: RadioPageComponent,
          path: 'radio'
        },
        {
          component: SelectPageComponent,
          path: 'select'
        },
        {
          component: SliderPageComponent,
          path: 'slider'
        },
        {
          component: SwitchPageComponent,
          path: 'switch'
        },
        {
          component: TextAreaPageComponent,
          path: 'textarea'
        }
      ]
    },
    {
      path: 'layout',
      component: LayoutPageComponent,
      children: [
        {
          component: DrawerPageComponent,
          path: 'drawer'
        },
        {
          component: NavbarPageComponent,
          path: 'navbar'
        },
        {
          component: TabPageComponent,
          path: 'tab'
        }
      ]
    },
    {
      path: 'theme',
      component: ThemePageComponent
    }
  ]
}];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(appRoutes)
  ]
})

export class AppRoutingModule {}
