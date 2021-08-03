import { Component, OnInit } from '@angular/core';
import { PersonsService } from '../../services/persons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  persons: any;
  constructor(private personsService: PersonsService) { }

  ngOnInit(): void {
    this.getPersons();
  }

  getPersons() {
    this.personsService.getPersons().subscribe(
      result => {
        console.log(result)
        this.persons = result;
      },
      error => {
        console.log('errror', error);
      }
    )
  }
}
