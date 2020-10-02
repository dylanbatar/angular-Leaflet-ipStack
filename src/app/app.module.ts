import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { InfoContainerComponent } from './components/info-container/info-container.component';
import { InfoItemComponent } from './components/info-item/info-item.component';
import { MapContainerComponent } from './components/map-container/map-container.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    InfoContainerComponent,
    InfoItemComponent,
    MapContainerComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
