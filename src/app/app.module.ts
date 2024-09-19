import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZoneManagerComponent } from './zone-manager/zone-manager.component';
import { PointsFormatPipe } from './pipes/points_format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ZoneManagerComponent,
    PointsFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
