import { AccordionPageComponent } from './components/accordion/accordion.component';
import { ButtonPageComponent } from './components/button/button.component';
import { ButtonTogglePageComponent } from './forms/button-toggle/button-toggle.component';
import { CalendarPageComponent } from './components/calendar/calendar.component';
import { CheckboxPageComponent } from './forms/checkbox/checkbox.component';
import { CheckboxListPageComponent } from './forms/checkbox-list/checkbox-list.component';
import { CollapsiblePageComponent } from './components/collapsible/collapsible.component';
import { DrawerPageComponent } from './layout/drawer/drawer.component';
import { DropdownPageComponent } from './components/dropdown/dropdown.component';
import { GlossaryPageComponent } from './components/glossary/glossary.component';
import { HTMLVisualizerPageComponent } from './components/html-visualizer/html-visualizer.component';
import { IconPageComponent } from './css/icon/icon.component';
import { InputPageComponent } from './forms/input/input.component';
import { LabelPageComponent } from './forms/label/label.component';
import { ListPageComponent } from './components/list/list.component';
import { ListItemPageComponent } from './components/list-item/list-item.component';
import { MessagePageComponent } from './forms/message/message.component';
import { ModalPageComponent } from './components/modal/modal.component';
import { NavbarPageComponent } from './layout/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { RadioPageComponent } from './forms/radio/radio.component';
import { RouterModule, Routes } from '@angular/router';
import { RipplePageComponent } from './css/ripple/ripple.component';
import { ScrollSpyPageComponent } from './components/scroll-spy/scroll-spy.component';
import { SelectPageComponent } from './forms/select/select.component';
import { SliderPageComponent } from './forms/slider/slider.component';
import { SwitchPageComponent } from './forms/switch/switch.component';
import { TabPageComponent } from './layout/tab/tab.component';
import { TablePageComponent } from './components/table/table.component';
import { TextAreaPageComponent } from './forms/textarea/textarea.component';
import { TooltipPageComponent } from './components/tooltip/tooltip.component';
import { ComponentsPageComponent } from './components/components.component';
import { FormsPageComponent } from './forms/forms.component';
import { LayoutPageComponent } from './layout/layout.component';
import { CSSPageComponent } from './css/css.component';
import { HomePageComponent } from './home/home.component';
import { ThemePageComponent } from './themes/theme.component';
import { DatePickerPageComponent } from './forms/date-picker/date-picker.component';
import { CardPageComponent } from './css/card/card.component';
import { DividerPageComponent } from './css/divider/divider.component';
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
          component: CollapsiblePageComponent,
          path: 'collapsible'
        },
        {
          component: DropdownPageComponent,
          path: 'dropdown'
        },
        {
          component: GlossaryPageComponent,
          path: 'glossary'
        },
        {
          component: HTMLVisualizerPageComponent,
          path: 'html-visualizer'
        },
        {
          component: ListPageComponent,
          path: 'list'
        },
        {
          component: ListItemPageComponent,
          path: 'list-item'
        },
        {
          component: ModalPageComponent,
          path: 'modal'
        },
        {
          component: ScrollSpyPageComponent,
          path: 'scroll-spy'
        },
        {
          component: TablePageComponent,
          path: 'table'
        },
        {
          component: TooltipPageComponent,
          path: 'tooltip'
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
          component: CheckboxListPageComponent,
          path: 'checkbox-list'
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
      path: 'css',
      component: CSSPageComponent,
      children: [
        {
          component: CardPageComponent,
          path: 'card'
        },
        {
          component: DividerPageComponent,
          path: 'divider'
        },
        {
          component: IconPageComponent,
          path: 'icon'
        },
        {
          component: RipplePageComponent,
          path: 'ripple'
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
