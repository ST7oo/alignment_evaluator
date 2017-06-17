import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'Alignment Evaluator';
	mappings1 = [];
	mappings2 = [];
	not_mappings1 = [];
	not_mappings2 = [];
	true_positives: number;
	false_positives: number;
	false_negatives: number;
	precision: number;
	recall: number;
	f_measure: number;

	set_mappings1(mappings: any) {
		this.mappings1 = mappings;
	}
	set_mappings2(mappings: any) {
		this.mappings2 = mappings;
	}

	evaluate() {
		this.not_mappings1 = [];
		this.not_mappings2 = [];
		this.true_positives = 0;
		this.false_positives = this.mappings2.length;
		this.false_negatives = 0;
		let found: boolean;
		for (let mapping1 of this.mappings1) {
			let entity1_1 = mapping1.entity1;
			let entity2_1 = mapping1.entity2;
			found = false;
			for (let mapping2 of this.mappings2) {
				let entity1_2 = mapping2.entity1;
				let entity2_2 = mapping2.entity2;
				if (entity1_1 == entity1_2 && entity2_1 == entity2_2) {
					this.true_positives++;
					found = true;
					break;
				}
			}
			if (!found) {
				this.false_negatives++;
				this.not_mappings1.push(mapping1);
			}
		}
		this.false_positives -= this.true_positives;

		this.precision = Math.min(Math.round(this.true_positives * 1000 / (this.true_positives + this.false_positives)) / 1000, 1);
		this.recall = Math.min(Math.round(this.true_positives * 1000 / (this.true_positives + this.false_negatives)) / 1000, 1);
		this.f_measure = Math.round((2000 * this.precision * this.recall) / (this.precision + this.recall)) / 1000;

		for (let mapping2 of this.mappings2) {
			let entity1_2 = mapping2.entity1;
			let entity2_2 = mapping2.entity2;
			found = false;
			for (let mapping1 of this.mappings1) {
				let entity1_1 = mapping1.entity1;
				let entity2_1 = mapping1.entity2;
				if (entity1_1 == entity1_2 && entity2_1 == entity2_2) {
					found = true;
					break;
				}
			}
			if (!found) {
				this.not_mappings2.push(mapping2);
			}
		}
	}

}
