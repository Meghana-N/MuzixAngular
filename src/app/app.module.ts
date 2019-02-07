import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import{MatCardModule} from '@angular/material/card'
import { SearchTrackService } from './search-track.service';
import { PlaylistComponent } from './playlist/playlist.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { PreSearchComponent } from './pre-search/pre-search.component';
import { PlaylistCardComponent } from './playlist-card/playlist-card.component';
import { UpdateTrackComponent } from './update-track/update-track.component';
const appRoutes:Routes = [
  {path:'search/:trackName', component:SearchBarComponent},
  {path:'playlist', component:PlaylistComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    CardComponent,
    PlaylistComponent,
    NavbarComponent,
    PreSearchComponent,
    PlaylistCardComponent,
    UpdateTrackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SearchTrackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
