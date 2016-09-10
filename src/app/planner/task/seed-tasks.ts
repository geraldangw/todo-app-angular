import { Task } from './task.component';


//exporting seed tasks to mock data
export const TASK: Task[] = [
      new Task(1, 'Do a To Do App', "Gerald", new Date, false, false, false),
      new Task(2, 'Sleep', "Gerald", new Date("2016-09-6"), false, true, false),
      new Task(3, 'Eat', "John", new Date, false, false, false),
      new Task(4, 'Talk', "Tom", new Date("2016-09-9"), false, false, false),
      new Task(5, 'Rinse', "Ming", new Date("2016-09-6"), false, false, false),
      new Task(6, 'Go to US', "Tyler", new Date("2016-09-8"), false, true, false),
      new Task(7, 'Buy my Ticket', "Gerald", new Date, false, false, false),
      new Task(8, 'Repeat', "Gerald", new Date, false, false, false),
      new Task(9, 'Apply for Visa', "Gerald", new Date("2016-09-8"), true, false, false),
      new Task(10, 'Wake up early', "Gerald", new Date("2016-09-8"), true, false, true),
      new Task(11, 'Drink Beer', "Jack", new Date("2016-09-9"), false, true, false),
      new Task(12, 'Find Places', "Tom", new Date("2016-09-8"), false, false, false),
      new Task(13, 'Buy Groceries', "Ming", new Date("2016-09-10"), false, false, true),
      new Task(14, 'Find a house', "Tyler", new Date("2016-09-10"), false, false, false),
      new Task(15, 'Buy a turntable', "Gerald", new Date("2016-09-5"), true, true, false),
      new Task(16, 'Win at the horses', "Gerald", new Date("2016-09-6"), false, false, false),
      new Task(17, 'Bring out the thrash', "Gerald", new Date, true, false, false),
      new Task(18, 'Sleep more', "Gerald", new Date, false, false, false),
      new Task(19, 'Drink more', "Jack", new Date, false, true, false)
];