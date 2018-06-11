import { Component } from '@angular/core';
import { routerTransition } from './routerTransition';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class AppComponent {
  title = 'shopping site';
  tests=[
    {
      'name':'some name',
      'desc':'some desc'
    },
    {
      'name':'some name',
      'desc':'some desc'
    },
    {
      'name':'some name',
      'desc':'some desc'
    },
    {
      'name':'some name',
      'desc':'some desc'
    },
    {
      'name':'some name',
      'desc':'some desc'
    },
    {
      'name':'some name',
      'desc':'some desc'
    },
    {
      'name':'some name',
      'desc':'some desc'
    }
  ];
}
