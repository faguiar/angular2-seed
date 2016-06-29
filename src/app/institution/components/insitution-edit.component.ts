import {Component, Output} from '@angular/core';
import {ROUTER_DIRECTIVES, ActivatedRoute, Router} from '@angular/router';
import {Institution} from './institution/institution';

@Component({
    selector: 'institution-edit',   
    directives: [ROUTER_DIRECTIVES],
    templateUrl: './institution/view/institution-edit.html',    
})
export class InstitutionEditComponent {
    
    @Output('selectdInstitution') institution: Institution;
    
    constructor(private router: Router, private route: ActivatedRoute) {}
        
}


