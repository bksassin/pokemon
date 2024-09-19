import { Component } from '@angular/core';

interface LeaderboardEntry {
  username: string;
  score: number;
}

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent {
  leaderboardEntries: LeaderboardEntry[] = [
    { username: 'Ash123', score: 1500 },
    { username: 'MistyWater', score: 1450 },
    { username: 'BrockRock', score: 1400 },
    { username: 'GaryOak', score: 1350 },
    { username: 'MayBlaze', score: 1300 },
    { username: 'Dawn789', score: 1250 },
    { username: 'SerenaXY', score: 1200 },
    { username: 'Clem_Dedenne', score: 1150 },
    { username: 'IrisAxew', score: 1100 },
    { username: 'Goh_Catch', score: 1050 }
  ];
}
