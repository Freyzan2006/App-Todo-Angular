import { Category } from "../Category";
import { Priority } from "../Priority";
import { Task } from "../Task";

export  class TestData {
  static categories: Category[] = [
    {id: 1, title: 'Work'},
    {id: 2, title: 'Parents'},
    {id: 3, title: 'lesson'},
    {id: 4, title: 'Отдых'},
    {id: 5, title: 'sport'},
    {id: 6, title: 'foot'},
    {id: 7, title: 'money'},
    {id: 8, title: 'Гаджаты'},
    {id: 9, title: 'Здаровье'},
    {id: 10, title: 'car'}
  ]

  static priorities: Priority[] = [
    {id: 1, title: 'Низкий', color: '#e5e5e5'},
    {id: 2, title: 'Средний', color: '#85D1B2'},
    {id: 3, title: 'Высокий', color: '#F1828D'},
    {id: 4, title: 'Очень Высокий', color: '#F1828D'},
  ]

  static tasks: Task[] = [
    {
      id: 1,
      title: "Task 1",
      priority: TestData.priorities[2],
      completed: true,
      category: TestData.categories[9],
      date: new Date('2024-01-09')
    },
    {
      id: 2,
      title: "Task 2",
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[5],
      date: new Date('2024-01-15')
    },
    {
      id: 3,
      title: "Task 3",
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.categories[2],
      date: new Date('2024-01-12')
    },
    {
      id: 4,
      title: "Task 4",
      completed: false,
    }
  ]
}
