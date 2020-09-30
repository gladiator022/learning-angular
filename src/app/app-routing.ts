import { RouterModule, Routes} from '@angular/router';
import { AddCvComponent } from './add-cv/add-cv.component';
import { CvcomponentComponent } from './cvcomponent/cvcomponent.component';
import { ClassComponent } from './directives/class/ClassComponent';


const APP_ROUTING : Routes = [
    {path : 'cv', redirectTo : '/', pathMatch : 'full' },
    { path: '', component: CvcomponentComponent },
    {path : 'add/:default', component : AddCvComponent},
    {path : 'color/:default', component : ClassComponent }
];

export const ROUTING = RouterModule.forRoot(APP_ROUTING);