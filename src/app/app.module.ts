import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZoneManagerComponent } from './zone-manager/zone-manager.component';
import { PointsFormatPipe } from './pipes/points_format.pipe';
import { ZoneNameDialogComponent } from './zone-name-dialog/zone-name-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';  // <-- Import MatDialogModule
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ZoneManagerComponent,
    PointsFormatPipe,
    ZoneNameDialogComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
