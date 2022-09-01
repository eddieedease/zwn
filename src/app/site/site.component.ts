import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {

  public speaker1 = false;
  public speaker2 = false;
  public speaker3 = false;
  public speaker4 = false;


  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
