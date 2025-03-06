import { NgOptimizedImage } from '@angular/common';
import { Component, Input, output } from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop'

@Component({
  selector: 'app-shortcut',
  standalone: true,
  imports: [NgOptimizedImage,DragDropModule],
  templateUrl: './shortcut.component.html',
  styleUrl: './shortcut.component.css'
})
export class ShortcutComponent {

  @Input() title = "";
  @Input() imgPath = "";

  shortcutClicked = output<string>();

  canClick = true;

  private startX = 0;
  private startY = 0;
  private isDragging = false;

  onMouseDown(event: MouseEvent) {
    this.startX = event.clientX;
    this.startY = event.clientY;
    this.isDragging = false;
  }

  onMouseUp(event: MouseEvent) {
    const deltaX = Math.abs(event.clientX - this.startX);
    const deltaY = Math.abs(event.clientY - this.startY);

    // If the mouse moved less than 5 pixels, consider it a click
    if (deltaX < 5 && deltaY < 5) {
      console.log('Element clicked!');
    } else {
      this.isDragging = true;
    }
  }

  onShortcutClick() {
    if (!this.isDragging) {
      console.log("CLICKED");
      this.shortcutClicked.emit(this.title);
    }
  }
}
