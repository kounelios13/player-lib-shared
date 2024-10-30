import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatSliderModule} from "@angular/material/slider";

@Component({
	selector: 'app-progress-bar',
	templateUrl: './progress-bar.component.html',
	styleUrls: ['./progress-bar.component.css'],
  standalone: true,
  imports: [MatSliderModule]
})
export class ProgressBarComponent {
	@Input() max = 0;
	@Input() value = 0;
	@Input() label = "";
	@Output() input = new EventEmitter<number>();
	@Output() change = new EventEmitter<number>();

	handleInput(e: Event): void{
		const target = e.target as HTMLInputElement;
		const value = target.valueAsNumber;
		if (!isFinite(value)) {
			return;
		}
		this.input.emit(value);
	}

	handleChange(e: number): void{
		if (!isFinite(e)) {
			return;
		}
		this.change.emit(e);
	}

}
