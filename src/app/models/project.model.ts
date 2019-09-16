import { Task } from './task.model';


export class Project{
    id:number;
    title:string;
    startDate:Date;
    endDate:Date;
    done:boolean;
    items: Task[];

    constructor(title:string){

       this.id = new Date().getTime();
       this.title = title;
       this.startDate = new Date();
       this.done = false;
       this.items = [];
    }
       
}