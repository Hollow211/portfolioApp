import { Component, ElementRef, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ShortcutComponent } from '../shortcut/shortcut.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NoteHeaderComponent } from '../note-header/note-header.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { DirectoryComponent } from '../directory-components/directory/directory.component';
import Typed from 'typed.js';
import { ImageComparisonComponent } from '../image-comparison/image-comparison.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,ShortcutComponent,
    DragDropModule, NoteHeaderComponent,
    NgOptimizedImage, DirectoryComponent,
    CommonModule, ImageComparisonComponent,ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  codingTexts = [
    "function helloWorld() { console.log('Hello, World!'); } const array = [1, 2, 3, 4, 5]; z = x + y; console(i); { return y; }",
    "const array = [1, 2, 3, 4, 5]; console.log(abc123); const x = 456; function foo() { return; } try { riskyOperation(); }",
    "let x = 10; let y = 20; let z = x + y; if (condition) { return; } else { console.log(def456); } console.log(zab234); const k = 789;",
    "class MyClass { constructor() { this.name = 'Example'; } } try { riskyOperation(); } catch (error) { console.error(error); }",
    "for (let i = 0; i < 10; i++) { console.log(i); } const arr = [1, 2, 3]; function bar() { return; }",
    "if (x > y) { return x; } else { return y; } console.log(ghi789); const z = 123; try { riskyOperation(); } catch (error) { console.error(error); }",
    "const myPromise = new Promise((resolve, reject) => { resolve('Success!'); }); console.log(jkl012); const a = 456; function baz() { return; }",
    "document.querySelector('.my-class').addEventListener('click', () => { alert('Clicked!'); }); console.log(mno345); const b = 789; if (condition) { return; }",
    "npm install express console.log(pqr678); const c = 123; function qux() { return; } try { riskyOperation(); } catch (error) { console.error(error); }",
    "git commit -m 'Initial commit' console.log(stu901); const d = 456; if (condition) { return; } else { console.log(vwx234); }",
    "const fs = require('fs'); console.log(yza567); const e = 789; function quux() { return; } try { riskyOperation(); } catch (error) { console.error(error); }",
    "import React from 'react'; console.log(bcd890); const f = 123; if (condition) { return; } else { console.log(efg123); }",
    "console.error('Error occurred!'); console.log(hij456); const g = 456; function corge() { return; } try { riskyOperation(); } catch (error) { console.error(error); }",
    "const myMap = new Map(); console.log(klm789); const h = 789; if (condition) { return; } else { console.log(nop012); }",
    "async function fetchData() { const response = await fetch('https://api.example.com'); } console.log(qrs345); const i = 123; function grault() { return; }",
    "const mySet = new Set([1, 2, 3]); console.log(tuv678); const j = 456; if (condition) { return; } else { console.log(wxy901); }",
    "try { riskyOperation(); } catch (error) { console.error(error); } console.log(zab234); const k = 789; function garply() { return; }",
    "const myRegex = /[A-Z]/g; console.log(cde567); const l = 123; if (condition) { return; } else { console.log(fgh890); }",
    "const myObject = { key: 'value' }; console.log(ijk123); const m = 456; function waldo() { return; } try { riskyOperation(); } catch (error) { console.error(error); }",
    "const myArray = Array.from({ length: 10 }, (_, i) => i + 1); console.log(lmn456); const n = 789; if (condition) { return; } else { console.log(opq789); }"
  ];
  desktopShortcuts = {
    shortcut1: {
      title: "Projects",
      imgPath: "assets/icons/monitor.png",
    },
    shortcut2: {
      title: "About Me",
      imgPath: "assets/icons/warning.png",
    },
    shortcut3: {
      title: "Contacts",
      imgPath: "assets/icons/letter.png"
    },
    shortcut4: {
      title: "Education",
      imgPath: "assets/icons/book.png"
    },
    shortcut5: {
      title: "Experience",
      imgPath: "assets/icons/work.png"
    }
  }
  shortcutsArray = Object.values(this.desktopShortcuts);

  onCloseEvent(ref: HTMLDivElement) {
    // get the element ref
    ref.classList.toggle('HiddenPopUp');
  }

  //#region Project and directory/folder stuff
  projectKeys = ['Gpu Instance','Filtered DoG','Finding Donors ML','Explicit words detector'
    ,'Asynch message system','Portfolio','Flow-Based Bilaterial Filter','NQueen Solver'
  ];

  // show/hide certain project
  showProject(projectName: string) {
    this.folderMap.set(projectName,true);
  }
  hideProject(projectName: string) {
    this.folderMap.set(projectName,false);
  }
  //#endregion

  // Show/hide directory
  showDirectory = false;

  onShortCutOpen(title: string) {
    console.log(title);
    this.shortCutMap.set(title,true);
  }
  onShortCutClose(title: string) {
    this.shortCutMap.set(title,false);
  }

  folderMap = new Map();
  shortCutMap = new Map();

  ngOnInit(): void {

    // Shortcut map
    const desktopTitles = Object.values(this.desktopShortcuts).map(x => x.title);
    this.shortCutMap = new Map(desktopTitles.map(key => [key,false]));

    // folder Map
    this.folderMap = new Map(this.projectKeys.map(key => [key,false]));


    // Intro text
    var typed = new Typed(".readtext1",{
      strings:["Hey! I'm Mohamed Saied! An inspiring junior Full-Stack Developer that..-well, loves what he does!"],
      typeSpeed: 10,
      showCursor:false,
    });

    var typed2 = new Typed(".readtext2",{
      strings:["I have a thriving passion towards learning and coding, combined with a vast curiosity for exploring new technologies and solving complex problems."],
      typeSpeed:20,
      showCursor:false,
    })
  }
  

  

}
