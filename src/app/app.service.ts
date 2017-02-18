import {Injectable} from '@angular/core'
import {Task} from "./task";

@Injectable()
export class AppService{
    tasks: Task[] = [{
        date : '1 jan',
        title: 'first title',
        description: 'first description',
        priority: 'high'
    },{
        date : '2 jan',
        title: 'second title',
        description: 'second description',
        priority: 'medium'
    },{
        date : '3 jan',
        title: '3 title',
        description: '3 description',
        priority: 'medium'
    },{
        date : '4 jan',
        title: '4 title',
        description: '4 description',
        priority: 'medium'
    },{
        date : '5 jan',
        title: '5 title',
        description: '5 description',
        priority: 'high'
    }];

    add(date: string, title: string, description: string, priority: string){
        this.tasks.push(new Task(date, title, description, priority));
    }
    delete(index:any){
        this.tasks.splice(index, 1);
    }
    deleteSelected() {
        for(var i=(this.tasks.length -1); i > -1; i--) {
            // if(this.tasks[i].completed) {
                this.tasks.splice(i, 1);
            // }
        }
    }
}