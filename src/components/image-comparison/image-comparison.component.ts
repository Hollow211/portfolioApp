import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-image-comparison',
  standalone: true,
  imports: [NgOptimizedImage,DragDropModule],
  templateUrl: './image-comparison.component.html',
  styleUrl: './image-comparison.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ImageComparisonComponent {
  @Input() img1 = "";
  @Input() img2 = "";

  @Input() height = "";
  @Input() width = "";

}
