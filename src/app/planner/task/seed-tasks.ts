import { Task } from './task.component';


//exporting seed tasks to mock data
export const TASK: Task[] = [
      new Task('Do a To Do App', "Gerald", new Date, false, false, false),
      new Task('Sleep', "Gerald", new Date("2016-09-6"), false, true, false),
      new Task('Eat', "John", new Date, false, false, false),
      new Task('Talk', "Tom", new Date("2016-09-9"), false, false, false),
      new Task('Rinse', "Ming", new Date("2016-09-6"), false, false, false),
      new Task('Go to US', "Tyler", new Date("2016-09-8"), false, true, false),
      new Task('Buy my Ticket', "Gerald", new Date, false, false, false),
      new Task('Repeat', "Gerald", new Date, false, false, false),
      new Task('Apply for Visa', "Gerald", new Date("2016-09-8"), true, false, false),
      new Task('Wake up early', "Gerald", new Date("2016-09-8"), true, false, true),
      new Task('Drink Beer', "Jack", new Date("2016-09-9"), false, true, false),
      new Task('Find Places', "Tom", new Date("2016-09-8"), false, false, false),
      new Task('Buy Groceries', "Ming", new Date("2016-09-10"), false, false, true),
      new Task('Find a house', "Tyler", new Date("2016-09-10"), false, false, false),
      new Task('Buy a turntable', "Gerald", new Date("2016-09-5"), true, true, false),
      new Task('Win at the horses', "Gerald", new Date("2016-09-6"), false, false, false),
      new Task('Bring out the thrash', "Gerald", new Date, true, false, false),
      new Task('Sleep more', "Gerald", new Date, false, false, false),
      new Task('Drink more', "Jack", new Date, false, true, false)
];