import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';  
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button'; 
import {MatLegacyTableModule as MatTableModule} from '@angular/material/legacy-table'; 
import {MatLegacyInputModule as MatInputModule} from '@angular/material/legacy-input'; 



@NgModule({
  declarations: [],
  imports: [],
exports : [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatTableModule,
  MatInputModule
  
]

})
export class MaterialModule { }
