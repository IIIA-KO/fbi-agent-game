import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AgentService } from '../agent.service';

@Component({
  selector: 'app-game',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent implements OnInit, OnDestroy{
  gameState: any = null;
  private updateInterval: any;

   constructor(private agentService: AgentService) {}

    ngOnInit() {
      this.updateStatus();
      this.updateInterval = setInterval(() => this.updateStatus(), 2000);
    }

    ngOnDestroy() {
      if (this.updateInterval) {
        clearInterval(this.updateInterval);
      }
    }

    updateStatus() {
      this.agentService.getStatus().subscribe(
        (data) => {
          this.gameState = data;
        },
        (error) => {
          console.error('Error fetching status:', error);
        }
      );
    }

    performAction(action: string) {
      this.agentService.performAction(action).subscribe(
        (data) => {
          this.gameState = data;
        },
        (error) => {
          console.error('Error performing action:', error);
        }
      );
    }

    resetGame() {
      this.agentService.resetGame().subscribe(
        (data) => {
          this.gameState = data;
        },
        (error) => {
          console.error('Error resetting game:', error);
        }
      );
    }
}
