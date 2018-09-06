import { Component, OnInit } from '@angular/core';
import {Transaction} from "../core/model/Transaction"

@Component({
  selector: 'app-transactions-row',
  templateUrl: './transactions-row.component.html',
  styleUrls: ['./transactions-row.component.css']
})
export class TransactionsRowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
