import { Component, Input } from '@angular/core';

@Component({
  selector: 'player-btn',
  standalone: true,
  imports: [],
  templateUrl: './player-btn.component.html',
  styleUrl: './player-btn.component.css'
})
export class PlayerBtnComponent {
  @Input() icon = 'Play';
	@Input() title = 'play_arrow';
}
