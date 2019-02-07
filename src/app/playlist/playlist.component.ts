import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchTrackService } from '../search-track.service';


@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  allTracks:any[] = [];
  constructor(private service: SearchTrackService) {
  }
  ngOnInit() {
    this.service.getPlaylist().subscribe((data)=>{this.allTracks=data})
    console.log("fff "+ this.allTracks);
  }

  getTracks(){
    this.service.getPlaylist().subscribe((data)=>{this.allTracks=data})
    return this.allTracks;
  }

}
