import {Component, Output} from '@angular/core';
import {ROUTER_DIRECTIVES, ActivatedRoute, Router} from '@angular/router';


@Component({
    selector: 'institution-edit',   
    directives: [ROUTER_DIRECTIVES]/*,
    templateUrl: '../view/institution-edit.html'*/    
})
export class InstitutionEditComponent {
    
    
    constructor(private router: Router, private route: ActivatedRoute) {}
        
}
