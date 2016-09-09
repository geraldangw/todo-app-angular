import { Component, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'ga-dailygoal',
  templateUrl: 'dailygoal.component.html',
  styleUrls: ['dailygoal.component.css'],
  outputs: ['dailyGoalsChanged']
})
export class DailygoalComponent {
  showdailygoal: boolean;

  constructor() {
    this.showdailygoal = false;
  }

  dailyGoalsChanged = new EventEmitter();

  onChange(value: string) {
    this.dailyGoalsChanged.emit(value);
  }

  showDailyGoal(): any {
    this.showdailygoal = true;
  }

  hideDailyGoal(): any {
    this.showdailygoal = false;
  }
}


