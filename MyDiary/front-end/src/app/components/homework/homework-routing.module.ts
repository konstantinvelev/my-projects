import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/helpers/canActivateAuthGuard";
import { AllComponent } from "./all/all.component";
import { CreateComponent } from "./create/create.component";
import { DetailsComponent } from "./details/details.component";

const routes: Routes = [
    {
        path: 'homework',
        canLoad: [AuthGuard],
        children:[
            {
                path: 'create',
                component: CreateComponent
            },
            {
                path: 'all',
                component: AllComponent
            },
            {
                path: 'details/:id',
                component: DetailsComponent
            },
            // {
            //     path: 'edit/:id',
            //     component: EditComponent,
            //     data:{
            //         isLogged: true,
            //         title: 'Edit Post Page'
            //     }
            // },
            // {
            //     path: 'delete/:id',
            //     component: DeleteComponent,
            //     data:{
            //         isLogged: true,
            //         title: 'Delete Post Page'
            //     }
            // },
        ]
    }
]

export const HomeworkRoutingModule = RouterModule.forChild(routes);