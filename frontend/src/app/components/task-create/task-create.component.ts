import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { TaskService } from '../../services/task.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {

  task = {}
  constructor(
    private authService: AuthService,
    private taskService: TaskService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  addTask(){
    this.taskService.addTasks(this.task).subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/tasks']);
        },
        err => console.log(err)
      )
  }

}
