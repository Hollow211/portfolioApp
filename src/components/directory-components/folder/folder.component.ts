import { NgOptimizedImage } from '@angular/common';
import { Component, Input, output } from '@angular/core';

@Component({
  selector: 'app-folder',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './folder.component.html',
  styleUrl: './folder.component.css'
})
export class FolderComponent {
  @Input() title = "";

  folderClicked = output<string>();

  onFolderClick() {
    this.folderClicked.emit(this.title);
  }
}
