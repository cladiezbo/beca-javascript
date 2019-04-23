import{ RouterModule, Router, Routes} from '@angular/router';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { FormComponent } from './form/form.component';

const APP_ROUTERS: Routes = [
    {path: '', component: ListaTareasComponent},
    {path: 'nueva-tarea', component: FormComponent},
    {path: 'editar-tarea/:idTarea', component: FormComponent}
];

export const Router = RouterModule.forRoot(APP_ROUTERS);