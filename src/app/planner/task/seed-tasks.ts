import { Task } from './task.component';


//exporting seed tasks to mock data
export const TASK: Task[] = [
      new Task(1, 'Do a To Do App', "Try to learn angular building a site that takes into account the user interactions necessary for an efficient To Do App", new Date, false, false, false),
      new Task(2, 'Sleep', "Its been a long while since I slept for 8 hours straight! I hope i can do that this weekend!", new Date("2016-09-6"), false, true, false),
      new Task(3, 'Eat Durian', "It's durian season so lets eat durians!", new Date, false, false, false),
      new Task(4, 'Buy Groceries', "Buy groceries for dinner gathering tonight!", new Date("2016-09-12"), false, false, false),
      new Task(5, 'Rinse clothes', "Rinse my discolored clothes overnight.", new Date("2016-09-11"), false, false, false),
      new Task(6, 'Go to US', "Book flights and accomodation after getting a visa.", new Date("2016-09-10"), false, true, false),
      new Task(7, 'Buy my Ticket', "Buy my ticket for a movie today", new Date, false, false, false),
      new Task(8, 'Buy clothes', "Buy more shirts to wear as I have been wearing the same thing every week.", new Date, false, false, false),
      new Task(9, 'Register company', "Get started with registering a company (ACRA)", new Date("2016-09-9"), true, false, false),
      new Task(10, 'Wake up early', "Try to wake up earlier to go for a run.", new Date("2016-09-9"), true, false, true),
      new Task(11, 'Stock up on beer', "Stock up on beer (Asahi, Tiger, Heineken).", new Date("2016-09-11"), false, true, false),
      new Task(12, 'Find Places', "Research and find some place to host friends.", new Date("2016-09-13"), false, false, false),
      new Task(13, 'Pay my bills', "Pay my pending bills (credit card, mobile).", new Date("2016-09-11"), false, false, true),
      new Task(14, 'Find a house', "Find an air bnb apartment for my friend coming for a short trip.", new Date("2016-09-11"), false, false, false),
      new Task(15, 'Buy a turntable', "Learn to be a DeeeeeeeeeeJayyyyyyy!", new Date("2016-09-5"), true, true, false),
      new Task(16, 'Collect winnings', "Collect the 4D winnings and then deposit it into my bank account.", new Date("2016-09-16"), false, false, false),
      new Task(17, 'Bring out thrash', "A lot of thrash left over now. Clean it up!!", new Date, true, false, false),
      new Task(18, 'Receipts', "Compile my work reciepts for claims for the last 3 months.", new Date, false, false, false),
      new Task(19, 'Eat my meds', "Eat my medicine every night to feel better!", new Date, false, true, false)
];