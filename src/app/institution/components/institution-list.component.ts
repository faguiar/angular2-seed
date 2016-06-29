import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, ActivatedRoute, Router} from '@angular/router';
import {Institution} from './institution/institution';

@Component({
    selector: 'institution-list',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: './institution/view/institution-list.html'
})
export class InstitutionListComponent implements OnInit {

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


