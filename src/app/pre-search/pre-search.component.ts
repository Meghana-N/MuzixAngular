import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pre-search',
  templateUrl: './pre-search.component.html',
  styleUrls: ['./pre-search.component.css']
})
export class PreSearchComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }
 
  ngOnInit() {
    console.log("pre")
  }
  searchTrack(value){
    this.router.navigate(['/search',value])
  }
}
