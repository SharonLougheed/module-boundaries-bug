import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LibB } from '../../../../libB/src/lib/componentB/libB';

// eslint should flag these, but the crash on the import above hides them
const unused = 42;
debugger;

@Component({
  selector: 'lib-lib-a',
  imports: [CommonModule, LibB],
  templateUrl: './LibA.html',
  styleUrl: './LibA.css',
})
export class LibA {}
