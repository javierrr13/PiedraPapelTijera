import { Component } from '@angular/core';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent {
  userChoice: string | null = null;
  computerChoice: string | null = null;
  winner: string | null = null;
  isComputing: boolean = false;

  selectOption(option: string): void {
    this.userChoice = option;
    this.startComputing();
    setTimeout(() => {
      this.computerChoice = ['piedra', 'papel', 'tijera'][Math.floor(Math.random() * 3)];
      this.determineWinner();
      this.isComputing = false;
    }, 2000);
  }

  resetGame(): void {
    this.userChoice = null;
    this.computerChoice = null;
    this.winner = null;
  }

  private determineWinner(): void {
  
    if (
      (this.userChoice === 'piedra' && this.computerChoice === 'tijera') ||
      (this.userChoice === 'papel' && this.computerChoice === 'piedra') ||
      (this.userChoice === 'tijera' && this.computerChoice === 'papel')
    ) {
      this.winner = 'Ganas';
    } else if (this.userChoice === this.computerChoice) {
      this.winner = 'Empatas';
    } else {
      this.winner = 'Pierdes';
    }
  }

  private startComputing(): void {
    this.isComputing = true;
  }
}
