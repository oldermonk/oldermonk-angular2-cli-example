import {HomeComponent} from "./components/example/home/home.component";
import {RouterModule, Routes} from "@angular/router";
import {HeaderComponent} from "./components/example/header/header.component";
import {BodyComponent} from "./components/example/list/body.component";
import {NewComponent} from "./components/example/new/new.component";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {
        path: 'user',
        component: HeaderComponent,
        children: [
            {
                path: 'list',
                component: BodyComponent
            },
            {
                path: 'add',
                component: NewComponent
            }
        ]
    }
]

export default RouterModule.forRoot(routes);