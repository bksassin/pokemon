import { Component } from '@angular/core';

@Component({
  selector: 'app-prizes',
  templateUrl: './prizes.component.html',
  styleUrls: ['./prizes.component.scss']
})
export class PrizesComponent {
  deadline: string = 'September 30, 2025 at 3:00 PM';
  message: string = 'Top 3 players win exciting Pokémon prizes!';
  prizes = [
    {
      place: '1st',
      title: 'Pokémon Booster Box',
      description: 'A sealed booster box of the latest Pokémon TCG set.',
      imageUrl: 'https://via.placeholder.com/300x200.png?text=Booster+Box'
    },
    {
      place: '2nd',
      title: 'Graded Pokémon Card',
      description: 'A PSA 9 graded holographic rare from a classic set.',
      imageUrl: 'https://via.placeholder.com/300x200.png?text=Graded+Card'
    },
    {
      place: '3rd',
      title: 'Pokémon Plush Toy',
      description: 'An official, high-quality plush of a fan-favorite Pokémon.',
      imageUrl: 'https://via.placeholder.com/300x200.png?text=Plush+Toy'
    }
  ];
}
