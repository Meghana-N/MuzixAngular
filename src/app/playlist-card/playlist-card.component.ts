import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchTrackService } from '../search-track.service';
import { PlaylistComponent } from '../playlist/playlist.component';

@Component({
  selector: 'app-playlist-card',
  templateUrl: './playlist-card.component.html',
  styleUrls: ['./playlist-card.component.css']
})
export class PlaylistCardComponent implements OnInit {
  @Input()
  TrackName:string;
  @Input()
  TrackId:string;
  @Input()
  TrackArtist:string;
  @Input()
  TrackImage:string;
  
  ngOnInit() {
  }

  constructor(private service: SearchTrackService,private show: PlaylistComponent,private _route: ActivatedRoute, private router: Router) 
  { }

  delete(){
    this.service.deleteTrack(this.TrackId).subscribe(
      data => {
        console.log("POST Request is successful ", data);
      },
      error => {
 
        console.log("Error", error);
      }
 
    );
    this.show.getTracks();
  }

}
