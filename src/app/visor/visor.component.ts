import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as xml2js from 'xml2js';

@Component({
  selector: 'app-visor',
  templateUrl: './visor.component.html',
  styleUrls: ['./visor.component.scss']
})
export class VisorComponent implements OnInit {

  mappings: Object[];
  name: String;
  parameters: Object;
  @Input() title: string;
  @Output() mappingsParsed = new EventEmitter<Object[]>();

  constructor() { }

  ngOnInit() {
  }

  file_change(event) {
    let file: File = event.target.files[0];
    let reader: FileReader = new FileReader();
    reader.onloadend = (e) => {
      let result = reader.result.trim();
      this.name = file.name;
      this.parse_mappings(result);
      this.mappingsParsed.emit(this.mappings);
    };
    reader.readAsText(file);
  }

  parse_mappings(xml) {
    let mappings = {};
    let num_mappings = 0;
    let parser = new xml2js.Parser();
    parser.parseString(xml, (err, result) => {
      console.log(result);
      let alignment = result['rdf:RDF'].Alignment[0];
      if (alignment['alext:parameters'] && alignment['alext:parameters'][0]) {
        this.parameters = JSON.stringify(JSON.parse(alignment['alext:parameters'][0].replace(/'/g, '"')), undefined, 2);
      }
      else {
        this.parameters = null;
      }
      let maps = alignment.map;
      for (let map of maps) {
        let cell = map.Cell[0];
        let id;
        if (cell.$ && cell.$['rdf:about']) {
          id = cell.$['rdf:about'];
          if (parseInt(id) > num_mappings) {
            num_mappings = parseInt(id) + 1;
          }
        } else {
          id = num_mappings++;
        }

        let mapping = {
          entity1: cell.entity1[0].$['rdf:resource'],
          entity2: cell.entity2[0].$['rdf:resource'],
          relation: cell.relation[0],
          measure: cell.measure[0]._,
        };
        mappings[id] = mapping;
      }
      this.mappings = Object.keys(mappings).map(key => mappings[key]);
    });
  }

}
