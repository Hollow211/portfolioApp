import { NgOptimizedImage } from '@angular/common';
import { Component, Input, output } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  @Input() imgPath = "";
  @Input() text = "";

  copiedEvent = output<void>();

  async copyToClipboard() {
    try {
      await navigator.clipboard.writeText(this.text);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  }
}
