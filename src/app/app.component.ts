import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  asdf: Promise<number>;

  ngOnInit() {
    this.asdf = new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve(20);
      }, 5000);
    });
  }
}
