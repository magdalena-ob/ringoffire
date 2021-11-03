import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.scss']
})
export class EditPlayerComponent implements OnInit {
  
  allProfilePictures = ['woman1.png', 'woman2.png', 'woman3.png', 'man1.png', 'man2.png', 'man3.png', 'monkey.png', 'hamster.png', 'fox.png', 'deer.png', 'owl.png'];

  constructor(public dialogRef: MatDialogRef<EditPlayerComponent>,) { }

  ngOnInit(): void {
  }

}
