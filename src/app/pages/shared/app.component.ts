import { Component } from '@angular/core';

import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  items: NbMenuItem[] = [
    {
      title: 'Home',
      icon: 'person-outline'
    },
    {
      title: 'Systems',
      children: [
        {
          title: 'Masaniello',
        }
      ],
    },
    {
      title: 'Shopping Bag',
    },
    {
      title: 'Orders',
    },
  ];
}
