import {Component, OnInit, Input, EventEmitter} from '@angular/core';
import { Article } from './article.model.ts';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  host: {
    class: 'row'
  },
  outputs: [
    'sayHo'
  ]
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;
  sayHo : EventEmitter<string>;

  constructor() {
    this.sayHo = new EventEmitter();
    // console.log(this.sayHo);
    this.article = new Article(
      'Angular 2',
      'http://angular.io',
      10
    );
  }

  voteUp() {
    this.sayHo.emit('Ho ho ho');
    this.article.voteUp();
    return false;
  }
  voteDown() {
    this.article.voteDown();
    return false;
  }
  ngOnInit() {
  }
}
