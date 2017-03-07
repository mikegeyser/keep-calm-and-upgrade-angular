import { Component } from '@angular/core';
import { MemeService } from '../../services/memes.service';
import { Router } from '@angular/router';

@Component({
    selector: 'HomeComponent',
    templateUrl: 'app/components/home/home.template.html'
})
export class HomeComponent {
    memes = [];

    constructor(memeService: MemeService, private router: Router) {
        this.memes = memeService.memes;
    }

    edit(id: any) {
        this.router.navigate(['edit', id]);
    }
}