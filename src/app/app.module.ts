import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { AppComponent } from './app.component';
import { ZoneManagerComponent } from './zone-manager/zone-manager.component';
import { ZoneNameDialogComponent } from './dialogs/zone-name-dialog/zone-name-dialog.component';
import { ZoneDeleteDialogComponent } from './dialogs/zone-delete-dialog/zone-delete-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    ZoneManagerComponent,
    ZoneNameDialogComponent,
    ZoneDeleteDialogComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
  ],
  providers: [provideHttpClient(), provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
