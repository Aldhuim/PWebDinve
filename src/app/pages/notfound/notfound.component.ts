import { Component, OnInit } from '@angular/core';
<<<<<<< Updated upstream
=======
import { Location } from '@angular/common';
>>>>>>> Stashed changes

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

<<<<<<< Updated upstream
  constructor() { }

  ngOnInit(): void {
  }

=======
  constructor(private location: Location) { }

  ngOnInit(): void {

  }

  backClicked() {
    this.location.back();
  }


>>>>>>> Stashed changes
}
