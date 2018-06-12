import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public users: any[] = [
      {
        name: 'Ohlala',
        id: 1
      },
      {
        name: 'Toto',
        id: 2
      },
      {
        name: 'Jean-Hubert',
        id: 3
      }
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  redi(name: string, id: number) {
    this.router.navigate(['/user', id],
        {queryParams: {
      name: name
    },
            fragment: 'salut'
    });
  }

}
