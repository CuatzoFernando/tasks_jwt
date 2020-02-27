import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../services/task.service'
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks = [];
  task = {};
  constructor(
    private authService: AuthService,
    private taskService: TaskService,
    private router: Router
    ) { }

  ngOnInit() {
    this.taskService.getTasks()
      .subscribe(
        res => {
          this.tasks = res;
          console.log(this.tasks)
        },
        err => console.log(err)
      )
  }

  getTask(id) {
    this.taskService.getTask(id).subscribe(res=>{
      this.task = res;
    })
  }

  editTask(id,task){

    this.taskService.addTasks(task).subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/tasks']);
        },
        err => console.log(err)
      )
  }

  deleteTask(id, index) {
    if(window.confirm('Confirma si deseas eliminar la tarea')) {
        this.taskService.deleteTask(id).subscribe(
        res => {
          console.log(res);
          this.tasks.splice(index, 1);
          this.router.navigate(['/tasks']);
        },
        err => console.log(err)
      )    
    }
  }

}
