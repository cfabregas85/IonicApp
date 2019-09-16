import { Component } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public taskService:TasksService, 
              private router :Router,             
              private alertCtrl:AlertController) { }

  async AddProject(){
   
   const alert =  await this.alertCtrl.create({
    header: 'New Project',
    inputs: [
      {
        name: 'Title',
        type: 'text',
        placeholder: 'Title'
      }
    ],
    buttons: [
      {
        text:'Cancelar',
        role:'Cancel',
        handler:()=>{
          console.log('Cancelar');
        }
      },
      {
        text:'Add',        
        handler:(data)=>{
          console.log(data);
          if (data.Title.length === 0) {
            return;
          }
        const projectId = this.taskService.AddProject(data.Title);        
        this.router.navigateByUrl(`/tabs/tab1/add/${projectId}`);      
        }
      }
    ]
  });

    alert.present();
  }

}
