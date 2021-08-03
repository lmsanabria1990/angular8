import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Event, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showBack = false;
  constructor(private router: Router) {
    this.routerChange();
  }

  routerChange() {
    this.router.events.pipe(
      filter((e: Event): e is RouterEvent => e instanceof RouterEvent)
    ).subscribe((e: RouterEvent) => {
      this.showBack = e.url !== '/';
    });
  }
}
