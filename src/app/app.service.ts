import {Injectable} from '@angular/core'
import {Task} from "./task";

@Injectable()
export class AppService{
    tasks: Task[] = [];

    add(task:Task){
        if (this.tasks.indexOf(task) == -1) {
            this.tasks.push(task);
        }
    }
    delete(index:number){
        this.tasks.splice(index, 1);
    }
    update(index:number, task:Task){
        if (this.tasks.indexOf(task) == -1) {
            this.tasks[index] = task;
        }
    }

}