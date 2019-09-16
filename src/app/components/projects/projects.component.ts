import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Project } from '../../models/project.model';
import { Router } from "@angular/router";
import { TasksService } from '../../services/tasks.service';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {

  @ViewChild( IonList , {static: false}) p: IonList;  

  @Input() done = true;

  constructor(private router:Router,
              public taskService: TasksService,
            private alertCtrl:AlertController) { }

  ngOnInit() {}

  SelectProject(project:Project){
    if (this.done) {
      this.router.navigateByUrl(`/tabs/tab2/add/${project.id}`);
    }else{
    this.router.navigateByUrl(`/tabs/tab1/add/${project.id}`);    
  }
 }

 RemoveProject(project:Project){
   this.taskService.RemoveProject(project.id);    
 }

 async EditProject(project:Project){   
   
    const alert =  await this.alertCtrl.create({
     header: 'Change Title',
     inputs: [
       {
         name: 'Title',
         type: 'text',
         value: project.title,
         placeholder: 'Title'
       }
     ],
     buttons: [
       {
         text:'Cancelar',
         role:'Cancel',
         handler:()=>{
          this.p.closeSlidingItems();
         }
       },
       {
         text:'Ok',        
         handler:(data)=>{           
           if (data.Title.length === 0) {
             return;
           }
           project.title = data.Title;
           this.taskService.SaveStorage();
           this.p.closeSlidingItems();                              
         }
       }
     ]
   });
     alert.present();
   } 

}
