import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, ActivatedRoute, Router} from '@angular/router';
import {Institution} from '../institution';



@Component({
    selector: 'institution-list',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: '../view/institution-list.html'
})
export class InstitutionListComponent {

    institutions: Institution[];
    selectedInstitution: Institution;

    constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.institutions = [new Institution(1, 'Cora Institute')];
    }

    selectInstitution(institution: Institution) {
        this.selectedInstitution = institution;
    }
}