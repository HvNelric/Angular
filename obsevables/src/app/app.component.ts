import {Component, OnInit} from '@angular/core';
import {Subject, Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {

    const subj = new Subject<number>();

    const sub1 = subj.subscribe( x => {
      console.log('sub1 : ', x);
    });

    const sub2 = subj.subscribe( x => {
        console.log('sub2 : ', x);
    });

    const sub3 = subj.subscribe( x => {
        console.log('sub3 : ', x);
    });

    subj.next(4);

    sub1.unsubscribe();

    subj.next(5);

  }


}
