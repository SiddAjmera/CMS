import { Routes } from '@angular/router';

import { BlogsComponent } from '../views/components/blogs/blogs.component';
import { HomeComponent } from '../views/components/home/home.component';
import { IntroComponent } from '../views/components/intro/intro.component';
import { LoginComponent } from '../views/components/login/login.component';

export const APP_ROUTES: Routes = [
    { path: 'blogs', component: BlogsComponent },
    { path: 'home', component: HomeComponent },
    { path: 'intro', component: IntroComponent },
    { path: '**', redirectTo: '/intro', pathMatch: 'full' }
];
