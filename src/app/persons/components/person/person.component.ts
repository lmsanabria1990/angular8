import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonsService } from '../../services/persons.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  person: any;
  constructor(private personsService: PersonsService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getPersonDetails(params['id']);
    });
  }

  getPersonDetails(personId: number) {
    this.personsService.getPersonDetails(personId).subscribe(
      result => {
        console.log(result);
        this.person = result;
      },
      error => {
        console.log('error', error);
      }
    )
  }

}
