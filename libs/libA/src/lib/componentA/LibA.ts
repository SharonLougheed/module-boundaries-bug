import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibB } from '../../../../libB/src/lib/componentB/libB';

@Component({
  selector: 'lib-lib-a',
  imports: [CommonModule, LibB],
  templateUrl: './LibA.html',
  styleUrl: './LibA.css',
})
export class LibA {}
