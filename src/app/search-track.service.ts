import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { track } from './track';

@Injectable({
  providedIn: 'root'
})
export class SearchTrackService {

  url;
  url1;
  url2;
  constructor(private http: HttpClient) { }

  getTracks(val:string)
  {
    this.url = "http://ws.audioscrobbler.com/2.0/?method=track.search&track=" +val+"&api_key=32e5e8719e5f77dc5996a922f7707373&format=json";
    return this.http.get(this.url);
  }
   
  getPlaylist()
  {
    return this.http.get<track[]>("http://localhost:8080/api/v1/tracks");
  }

  // updateComment(val,id){
  //   console.log(val);
  //   console.log(id);
  //   this.url2="http://localhost:8080/api/v1/track/"+id;
  //   return this.http.put(this.url2,{
  //     "trackComments":val
  //   });
  // }

  deleteTrack(id:string)
  {
    this.url1 = "http://localhost:8080/api/v1/track/"+id;
    return this.http.delete(this.url1)
  }
}
