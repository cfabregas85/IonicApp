import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  projectList : Project[] = [];

  constructor() {    
    this.LoadStorage();        
   }

   AddProject( title:string){
      const project = new Project(title);
      this.projectList.push(project);
      this.SaveStorage();
      return project.id;
   }

   GetProject( projectId:string | number){
      projectId = Number(projectId);
     return this.projectList.find( list=> list.id === projectId);     
   }

   SaveStorage(){
     localStorage.setItem('data', JSON.stringify(this.projectList));
   }

   LoadStorage(){
      if (localStorage.getItem('data')) {
        this.projectList = JSON.parse(localStorage.getItem('data'));      
      }else
      {
        this.projectList=[];
      }     
   }
}
