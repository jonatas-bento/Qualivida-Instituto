import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cardInformation } from '../../models/cardInformation';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() cardInformation!: cardInformation;

  constructor(private router: Router) { }

  

  ngOnInit() {
  }

  navigateToDetails(): void {
    this.router.navigate(['/project', this.cardInformation.id]); // Assuming `id` is a property of `cardInformation`
  }

  

}

