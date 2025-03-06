import { NgOptimizedImage } from '@angular/common';
import { Component, ElementRef, Input, output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-note-header',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './note-header.component.html',
  styleUrl: './note-header.component.css'
})
export class NoteHeaderComponent {
  
  constructor(elementRef: ElementRef) {}

  @Input() title = "";

  closeEvent = output<void>();

  onCloseClick() {
    this.closeEvent.emit();
  }

}
