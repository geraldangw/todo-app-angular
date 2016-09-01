import { Component, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'ga-dailygoal',
  templateUrl: 'dailygoal.component.html',
  styleUrls: ['dailygoal.component.css'],
  outputs: ['dailyGoalsChanged']
})
export class DailygoalComponent {

  dailyGoalsChanged = new EventEmitter();

  onChange(value: string) {
    this.dailyGoalsChanged.emit(value);
  }
}

