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

	sort(event: any) {
		let sortBy = event.sortBy;
		let sortType = event.sortType;
		this.mappings.sort((a, b) => {
			switch (sortType) {
				case 0:
				case 1:
					return typeof (a[sortBy]) === 'number' ?
						a[sortBy] - b[sortBy] :
						String.prototype.localeCompare.call(a[sortBy], b[sortBy]);
				case 2:
					return typeof (a[sortBy]) === 'number' ?
						b[sortBy] - a[sortBy] :
						String.prototype.localeCompare.call(b[sortBy], a[sortBy]);
			}
		})
	}

}
