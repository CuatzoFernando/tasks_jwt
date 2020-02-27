import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private URL = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  getTasks() {
    return this.http.get<any>(this.URL + '/tasks');
  }

  getTask(id) {
    return this.http.get<any>(this.URL + '/task/'+id);
  }

	addTasks(task){
	  	return this.http.post<any>(this.URL + '/tasks', task);
	}

  editTasks(id,task){
    return this.http.put(this.URL+'/tasks/'+ id, task)
  }

  deleteTask(id){
    return this.http.delete(this.URL+'/tasks/'+ id)
  }
}
