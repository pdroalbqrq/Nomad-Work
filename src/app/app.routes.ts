import { Routes } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { PrincipalComponent } from './principal/principal.component'

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'principal', component: PrincipalComponent }
]