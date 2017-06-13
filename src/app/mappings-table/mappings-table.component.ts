import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mappings-table',
  templateUrl: './mappings-table.component.html',
  styleUrls: ['./mappings-table.component.scss']
})
export class MappingsTableComponent implements OnInit {

  @Input() mappings: Object[];

  constructor() { }

  ngOnInit() {
  }

}
