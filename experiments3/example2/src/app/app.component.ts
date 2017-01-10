import { Component } from '@angular/core';
import {Article} from "./article/article.model";
import {Promise} from "es6-promise";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Angular 2', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 1),
    ];
  }

  getSortedArticles() {
    return this.articles.sort((art1, art2) => art1.votes - art2.votes);
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    // console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    // console.log(title);
    // return false;

    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }

  getStr() {
    console.log('qwer');
    // return new Promise((resolve, reject) => {
    //   resolve('asdf');
    // });
  }

  onSayHo(event) {
    console.log(event);
  }

  public onButtonHover(e) {
    console.log('hover', e);
  }
}
