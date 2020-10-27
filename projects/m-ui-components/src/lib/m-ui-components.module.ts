import { NgModule } from '@angular/core';
import { MUiComponentsComponent } from './m-ui-components.component';
import { MCardComponent } from './components/m-card/m-card.component';
import { FloatListComponent } from './components/float-list/float-list.component';



@NgModule({
  declarations: [
    MUiComponentsComponent,
    MCardComponent,
    FloatListComponent
  ],
  imports: [
  ],
  exports: [
    MUiComponentsComponent,
    MCardComponent,
    FloatListComponent
  ]
})
export class MUiComponentsModule { }
