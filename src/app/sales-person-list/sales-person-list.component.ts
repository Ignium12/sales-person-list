import {
  Component,
  OnInit
} from '@angular/core';
import {
  SalesPerson
} from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // create an array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Anup", "Kumer", "anup@luvecode.com", 5000),
    new SalesPerson("John", "Doe", "john.doe@luvecode.com", 4000),
    new SalesPerson("Claire", "Murphy", "clair.murphy@luvecode.com", 5001230)
  ];
  constructor() {}

  ngOnInit(): void {}

}
