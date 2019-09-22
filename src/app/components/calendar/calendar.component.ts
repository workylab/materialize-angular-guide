import { Component } from '@angular/core';

@Component({
  templateUrl: './calendar.component.html'
})
export class CalendarPageComponent {
  private date = new Date(2018, 11, 25);
}
