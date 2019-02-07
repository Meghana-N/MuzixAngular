import { Component, OnInit } from '@angular/core';
import { SearchTrackService } from '../search-track.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  searchData;
  track:string;
  constructor(private search_track: SearchTrackService,
    private _route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
      // this.track = value;
    this.track = this._route.snapshot.paramMap.get('trackName');
    this.search_track.getTracks(this.track).subscribe((data)=>
    {
      console.log(data);
      this.searchData = data['results']['trackmatches']['track'];
    });
  }

  // searchTrack(value)
  // {
    // this.track = value;
    // this.search_track.getTracks(this.track).subscribe((data)=>
    // {
    //   console.log(data);
    //   this.searchData = data['results']['trackmatches']['track'];
    // });
  

  getImage(search){
    return search['image'][3]['#text'];
   }
}

