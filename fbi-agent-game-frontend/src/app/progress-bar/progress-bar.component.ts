import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  template: `
    <div class="progress-bar">
      <div
        class="progress"
        [ngStyle]="{ width: value + '%' }"
        [ngClass]="{ 'low': value < 30, 'medium': value >= 30 && value < 70, 'high': value >= 70 }"
      >
        {{ value }}%
      </div>
    </div>
  `,
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent {
  @Input() value: number = 0;
}
