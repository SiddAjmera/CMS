import { BlogsComponent } from './../components/blogs/blogs.component';
import { MainComponent } from './../components/main/main.component';
import { Routes } from '@angular/router';

import { IntroComponent } from './../components/intro/intro.component';
import { LoginComponent } from '../components/login/login.component';

export const APP_ROUTES: Routes = [
    { path: 'intro', component: IntroComponent },
    { path: 'blogs', component: BlogsComponent },
    { path: 'main', component: MainComponent },
    { path: '**', redirectTo: '/intro', pathMatch: 'full' }
];
