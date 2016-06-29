import { provideRouter, RouterConfig } from '@angular/router';

import {About} from './components/about/about';
import {Home} from './components/home/home';
import {RepoBrowser} from './components/repo-browser/repo-browser';
import {RepoList} from './components/repo-list/repo-list';
import {RepoDetail} from './components/repo-detail/repo-detail';

import {InstitutionListComponent} from './institution/components/institution-list.component';
import {InstitutionEditComponent} from './institution/components/institution-edit.component';

const routes: RouterConfig = [
  { path: '', redirectTo: 'home', terminal: true },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'github', component: RepoBrowser, children: [
    { path: ':org', component: RepoList, children: [
      { path: ':repo', component: RepoDetail },
      { path: '', component: RepoDetail }
    ]},
    { path: '', component: RepoList}
  ]},
  {path: 'institution-list', component: InstitutionListComponent, children:[
    {path: ':edit', component: InstitutionEditComponent}
   ]}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
