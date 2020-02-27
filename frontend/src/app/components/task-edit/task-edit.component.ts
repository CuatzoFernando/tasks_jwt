import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { TaskService } from '../../services/task.service'
import { Router, ActivatedRoute } from '@angular/router'
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

  editForm: FormGroup;
  id:string = '';
  title:string = '';
  description:string = '';

  task = {}
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    console.log(this.route.snapshot.params['id'])
    this.getTask(this.route.snapshot.params['id'])
    this.editForm = this.formBuilder.group({
      'title' : [null, Validators.required],
      'description' : [null, Validators.required]
    });
  }

  editTask(id, task){
    this.taskService.editTasks(id,task).subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/tasks']);
        },
        err => console.log(err)
      )
  }

   getTask(id) {
    this.taskService.getTask(id).subscribe(data => {
      this.id = data._id;
      this.editForm.setValue({
        title: data.title,
        description: data.description
      });
    });
  }

}
