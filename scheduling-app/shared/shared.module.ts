import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        // Shared components, directives, and pipes would go here
    ],
    imports: [ 
        CommonModule,
        FormsModule  // Imported here
    ],
    exports: [
        CommonModule,
        FormsModule  // Exported here, so that any module importing SharedModule gets FormsModule
        // Also, export shared components, directives, and pipes if any
    ]
})
export class SharedModule { }
