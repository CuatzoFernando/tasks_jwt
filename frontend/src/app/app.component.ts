import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { TaskService } from './services/task.service' ;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private authService: AuthService, TaskService: TaskService) {}

  title = 'TASK';
}
