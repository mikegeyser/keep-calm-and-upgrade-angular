declare const angular: any;

import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MemeService } from '../../services/memes.service';

@Component({
    selector: 'edit-component',
    templateUrl: 'app/components/edit/edit.template.html'
})
export class EditComponent {
    meme: any;
    constructor(private router:Router, private route: ActivatedRoute, private memeService: MemeService) { 
        this.route.params.subscribe(params => {
            let id = params['id'];
            this.meme = this.memeService.memes.filter(function (item) {
                return item.id === id;
            })[0];
        });
    }

    // ngOnInit() {
        
    // }

    back(){
        this.router.navigate(['/']);
    }
}