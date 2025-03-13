import { ProjetosComponent } from './components/projetos/projetos.component';
import { HomeComponent } from './home/home.component';
import { ComponentsComponent } from './components/components.component';
import { Routes } from '@angular/router';
import { SobreComponent } from './components/sobre/sobre.component';

export const routes: Routes = [
    {
        path: '', component: ComponentsComponent
    },
    { path: 'sobre', component: SobreComponent},
    { path: 'project/:projectId', component: ProjetosComponent}
];
