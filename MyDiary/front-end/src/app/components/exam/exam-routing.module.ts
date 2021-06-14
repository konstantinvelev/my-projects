import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/helpers/canActivateAuthGuard";
import { AllComponent } from "../exam/all/all.component";
import { CreateComponent } from "./create/create.component";
import { DetailsComponent } from "./details/details.component";

const routes: Routes = [
    {
        path: 'exam',
        canLoad: [AuthGuard],
        children:[
            {
                path: 'create',
                component: CreateComponent,
                data:{
                    title: 'Create Exam Page'
                }
            },
            {
                path: 'all',
                component: AllComponent,
                data:{
                    title: 'All Exams Page'
                }
            },
            {
                path: 'details/:id',
                component: DetailsComponent,
                data:{
                    title: 'Details Exam Page'
                }
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

export const ExamRoutingModule = RouterModule.forChild(routes);