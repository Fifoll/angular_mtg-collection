import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardListComponent } from './card-list/card-list.component';
import { MyCollectionComponent } from './my-collection/my-collection.component';

const routes: Routes = [
    { path: '', component: MyCollectionComponent },
    { path: 'cards', component: CardListComponent},
    { path: 'collection', component: MyCollectionComponent }
];


@NgModule({

    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})

export class AppRoutingModule {  }