import { Component, OnInit, ReflectiveInjector } from '@angular/core';




/*
* The injectable service
*/
class MyService {
  getValue(): string {
    return 'a value';
  }
}

@Component({
  selector: 'app-di-sample',
  templateUrl: './di-sample.component.html',
  styleUrls: ['./di-sample.component.css']
})
export class DiSampleComponent implements OnInit {

  myService: MyService;
  constructor() {
    let injector: any = ReflectiveInjector.resolveAndCreate([MyService]);
    this.myService = injector.get(MyService);
    console.log('Same instance?', this.myService === injector.get(MyService));
  }
  invokeService(): void {
    console.log('MyService returned', this.myService.getValue());
  }

  ngOnInit() {
  }

}
