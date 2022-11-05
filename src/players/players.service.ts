import { Injectable } from '@nestjs/common';

@Injectable()
export class PlayersService {
  private players = [
    {
      name: 'Cole Fortner',
      state: 'GA',
      goals: 5,
    },
    {
      name: 'John Doe',
      state: 'MO',
      goals: 4,
    },
    {
      name: 'Todd Smith',
      state: 'VT',
      goals: 11,
    },
    {
      name: 'Jeff Hayes',
      state: 'IA',
      goals: 3,
    },
  ];

  getPlayers() {
    return this.players;
  }
}
