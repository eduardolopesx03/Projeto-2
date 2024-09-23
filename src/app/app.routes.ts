import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MenupageComponent } from './pages/menupage/menupage.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'menu',component:MenuComponent},
    {path:'about',component:AboutComponent},
    {path:'menu/:id',component:MenupageComponent},
    {path:'contact',component:ContactComponent},
];
