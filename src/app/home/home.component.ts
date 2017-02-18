import {Component} from '@angular/core'
import {Router} from '@angular/router'

@Component({
    selector: 'home',
    templateUrl: './app/home/home.component.html',
    styleUrls: ['']
})
export class HomeComponent {
    constructor(private router: Router) {}

    goToDo() {
        this.router.navigate(['todos'])
    }

    createTask(){

        this.router.navigate(['create'])
    }

    showTask(){

        this.router.navigate(['show'])
    }
    sendRouteParams() {
        // this.router.navigate(['details',1])
    }
}
