import { Component, OnInit, Input } from '@angular/core';
import {SearchBarComponent} from '../search-bar/search-bar.component';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  TrackName:string;
  @Input()
  TrackId:string;
  @Input()
  TrackArtist:string;
  @Input()
  TrackImage:string;
  http: any;

  constructor(http:HttpClient) {
    this.http=http;
  }

  ngOnInit() {
  }

save(id,name,comment,url)
{
this.http.post("http://localhost:8080/api/v1/track",
{
 "trackId": id,
 "trackName": name,
 "trackComments": comment,
 "trackUrl": url
})
.subscribe(
data  => {
console.log("POST Request is successful ", data);
},
error  => {
console.log("Error", error);
});
}
}
