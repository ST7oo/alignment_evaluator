import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {

  constructor(public dialogRef: MdDialogRef<InfoComponent>) {}

}
