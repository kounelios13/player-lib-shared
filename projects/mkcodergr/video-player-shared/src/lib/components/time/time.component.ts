import {Component, Input} from '@angular/core';

@Component({
  selector: 'lib-time',
  standalone: true,
  imports: [],
  templateUrl: './time.component.html',
  styleUrl: './time.component.css'
})
export class TimeComponent {
  @Input() duration = 0;
  @Input() currentProgress = 0;

  padZeros(value = 0, padding = 2) {
    return `${Math.floor(value)}`.padStart(padding, '0');
  }

  get durationMinutes() {
    return this.duration / 60;
  }

  get durationSeconds() {
    return this.duration - Math.floor(this.durationMinutes) * 60;
  }

  get currentMinutes() {
    return this.currentProgress / 60;
  }

  get currentSeconds() {
    return this.currentProgress - Math.floor(this.currentMinutes) * 60;
  }
}
