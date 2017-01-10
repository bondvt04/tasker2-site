import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title1 = '111';
  title2 = '222';
  title3 = '333';
  title4 = '444';

  check() {
    console.log(this.title2);
    setTimeout(() => {
      this.check();
    }, 500);
  }

  ngOnInit() {
    this.check();
  }
}
