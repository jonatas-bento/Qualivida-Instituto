import { CommonModule } from '@angular/common';
import { cardInformation } from './../../models/cardInformation';

import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RippleModule } from 'primeng/ripple';
import {StyleClassModule} from 'primeng/styleclass';
import { CardsComponent } from '../../shared/cards/cards.component';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css'],
  imports: [ButtonModule, RippleModule, StyleClassModule, CardModule, CardsComponent, CommonModule],
  standalone: true
})
export class ComponentsComponent implements OnInit {

  projects!: cardInformation[];
  constructor() { 
   
  }

  ngOnInit() {
    this.projects = [
        { id: '1', title: 'Equoterapia', subtitle: 'Subtitle 1', description: 'Aqui tratamos as pessoas com carinho', image: 'https://www.primefaces.org/primeng/showcase/assets/showcase/images/demo/primeng-logo.svg', altImage: 'Primeng Logo' },
        { id: '2', title: 'Musicoterapia', subtitle: 'Subtitle 2', description: 'Description 2', image: 'https://www.primefaces.org/primeng/showcase/assets/showcase/images/demo/primeng-logo.svg', altImage: 'Primeng Logo' },
        { id: '3', title: 'Dracaroterapia', subtitle: 'Subtitle 3', description: 'Description 3', image: 'https://www.primefaces.org/primeng/showcase/assets/showcase/images/demo/primeng-logo.svg', altImage: 'Primeng Logo' },

  ]

  }

}
