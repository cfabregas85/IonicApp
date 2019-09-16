import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../models/project.model';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  project: Project;
  taskName='';


  constructor( private taskService:TasksService,
               private router : ActivatedRoute ) {

     const id = this.router.snapshot.paramMap.get('projectId');
     this.project = this.taskService.GetProject(id);    
   }

  ngOnInit() {
  }

  AddTask(){
    if (this.taskName.length === 0) {
      return;
    }

    const task = new Task(this.taskName);
    this.project.items.push(task);
    this.taskName = '';
    this.taskService.SaveStorage();
  }

  ChangeCheck(item: Task){
    
    const pendingTask = this.project.items.filter( task => !task.status)
                        .length;


    if (pendingTask === 0) {
      this.project.endDate = new Date();
      this.project.done=true;
    }
    else{
      this.project.endDate = null;
      this.project.done=false;
    }
    this.taskService.SaveStorage() ;

    console.log(this.taskService.projectList);

  }

}
