import {Component, OnInit, ElementRef} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private currentTab: string = 'List';

  constructor(private el: ElementRef) { }

  ngOnInit() {
  }

  onClick(e) {
    this.currentTab = e.target.value;
    console.log(this.currentTab, e.target)
  }

}
