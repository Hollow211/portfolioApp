import { Component, Input, input, OnInit, output } from '@angular/core';
import { FolderComponent } from '../folder/folder.component';
import { NoteHeaderComponent } from "../../note-header/note-header.component";

@Component({
  selector: 'app-directory',
  standalone: true,
  imports: [FolderComponent],
  templateUrl: './directory.component.html',
  styleUrl: './directory.component.css'
})
export class DirectoryComponent {
  
  folderChosen = output<string>();
  @Input() folderMap!: Array<string>;

  onFolderChosen(folderTitle: string) {
    this.folderChosen.emit(folderTitle);
  }
}
