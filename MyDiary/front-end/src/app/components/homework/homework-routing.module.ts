import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/helpers/canActivateAuthGuard";
import { AllComponent } from "./all/all.component";
import { CreateComponent } from "./create/create.component";

const routes: Routes = [
    {
        path: 'homework',
        canLoad: [AuthGuard],
        children:[
            {
                path: 'create',
                component: CreateComponent,
                data:{
                    title: 'Create Homework Page'
                }
            },
            {
                path: 'all',
                component: AllComponent,
                data:{
                    title: 'All Homework Page'
                }
            },
            // {
            //     path: 'details/:id',
            //     component: DetailsComponent,
            //     data:{
            //         isLogged: true,
            //         title: 'Details Post Page'
            //     }
            // },
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