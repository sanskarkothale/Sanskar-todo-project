import { Component } from '@angular/core';
import { TaskService } from '../task.service.service'; // Adjust the import path as necessary

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  tasks: any[] = [];
  assigneeName: string = '';
  snackBar: any;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.fetchTasks();
  }

  fetchTasks(): void {
    this.tasks = this.taskService.getTasks();
  }

  assignTask(): void {
    const newTask = {
      id: this.tasks.length + 1,
      name: 'New Task',
      assignee: this.assigneeName,
      assignDate: new Date().toLocaleDateString(),
      status: 'Assigned'
    };
    
    this.tasks.push(newTask);

    // Reset assigneeName after assignment
    this.assigneeName = '';
  }

  startTask(taskId: number): void {
    const taskIndex = this.tasks.findIndex(task => task.id === taskId);
  if (taskIndex !== -1) {
    this.tasks[taskIndex].status = 'In Progress';
    this.snackBar.open('Task started successfully!', 'Dismiss', {
      duration: 2000, // Duration in milliseconds
    });
  }
}

completeTask(taskId: number): void {
  // Find the task with the given taskId and update its status to "Done"
  const taskIndex = this.tasks.findIndex(task => task.id === taskId);
  if (taskIndex !== -1) {
    this.tasks[taskIndex].status = 'done';
 
    this.snackBar.open('Task completed successfully!', 'Dismiss', {
      duration: 2000, // Duration in milliseconds
    });
    
  }
}

  deleteTask(taskId: number): void {
    this.tasks = this.tasks.filter(task => task.id !== taskId);

    this.snackBar.open('Task deleted successfully!', 'Dismiss', {
      duration: 2000, // Duration in milliseconds
    });
  }
}
