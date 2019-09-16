import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../models/project.model';

@Pipe({
  name: 'filterdone',
  pure:false
})
export class FilterdonePipe implements PipeTransform {

  transform(projects: Project[], Done: boolean=true): Project[] {
    
    return projects.filter(list=> list.done == Done );
  }

}
