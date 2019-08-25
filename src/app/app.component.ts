import { Component } from '@angular/core';
import { DrawerTranslation } from './app.model';
import { translations } from './../translations/en';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'materialize-angular-guide';

  public translations: DrawerTranslation = translations.drawer;
  public drawerItems: Array<any>;

  constructor() {
    this.drawerItems = [{
      text: translations.drawer.home.title,
      link: '/home'
    }, {
      text: translations.drawer.about.title,
      link: '/about'
    }, {
      text: translations.drawer.getStarted.title,
      link: '/getting-started'
    }, {
      text: translations.drawer.components.title,
      link: '/components',
      children: [{
        text: translations.drawer.components.children.accordion,
        link: '/accordion'
      }, {
        text: translations.drawer.components.children.button,
        link: '/button'
      // }, {
      //   text: translations.drawer.components.children.calendar,
      //   link: '/calendar'
      }, {
        text: translations.drawer.components.children.collapsible,
        link: '/collapsible'
      }, {
      //   text: translations.drawer.components.children.dropdown,
      //   link: '/dropdown'
      // }, {
      //   text: translations.drawer.components.children.list,
      //   link: '/list'
      // }, {
        text: translations.drawer.components.children.modal,
        link: '/modal'
      // }, {
      //   text: translations.drawer.components.children.table,
      //   link: '/table'
      // }, {
      //   text: translations.drawer.components.children.tooltip,
      //   link: '/tooltip'
      }]
    }, {
      text: translations.drawer.forms.title,
      link: '/forms',
      children: [{
        text: translations.drawer.forms.children.buttonToggle,
        link: '/button-toggle'
      }, {
        text: translations.drawer.forms.children.checkbox,
        link: '/checkbox'
      // }, {
      //   text: translations.drawer.forms.children.checkboxList,
      //   link: '/checkbox-list'
      // }, {
      //   text: translations.drawer.forms.children.datePicker,
      //   link: '/date-picker'
      }, {
        text: translations.drawer.forms.children.input,
        link: '/input'
      }, {
        text: translations.drawer.forms.children.label,
        link: '/label'
      }, {
        text: translations.drawer.forms.children.radio,
        link: '/radio'
      }, {
        text: translations.drawer.forms.children.select,
        link: '/select'
      }, {
        text: translations.drawer.forms.children.slider,
        link: '/slider'
      }, {
        text: translations.drawer.forms.children.switch,
        link: '/switch'
      }, {
        text: translations.drawer.forms.children.textarea,
        link: '/textarea'
      }]
    }, {
      text: translations.drawer.css.title,
      link: '/css',
      children: [{
        text: translations.drawer.css.children.card,
        link: '/card'
      }, {
      //   text: translations.drawer.css.children.divider,
      //   link: '/divider'
      // }, {
        text: translations.drawer.css.children.icon,
        link: '/icon'
      }, {
        text: translations.drawer.css.children.ripple,
        link: '/ripple'
      }]
    }, {
      text: translations.drawer.layout.title,
      link: '/layout',
      children: [{
        text: translations.drawer.layout.children.drawer,
        link: '/drawer'
      }, {
        text: translations.drawer.layout.children.navbar,
        link: '/navbar'
      }, {
        text: translations.drawer.layout.children.tab,
        link: '/tab'
      }]
    }, {
      text: translations.drawer.themes.title,
      link: '/themes'
    }];
  }
}
