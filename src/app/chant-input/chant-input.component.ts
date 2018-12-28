import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chant-input',
  templateUrl: './chant-input.component.html',
  styleUrls: ['./chant-input.component.scss']
})
export class ChantInputComponent implements OnInit {

  staff = [
    {
      name: 'k',
      type: 'space'
    },
    {
      name: 'j',
      type: 'line'
    },
    {
      name: 'i',
      type: 'space'
    },
    {
      name: 'h',
      type: 'line'
    },
    {
      name: 'g',
      type: 'space'
    },
    {
      name: 'f',
      type: 'line'
    },
    {
      name: 'e',
      type: 'space'
    },
    {
      name: 'd',
      type: 'line'
    },
    {
      name: 'c',
      type: 'space'
    },
    {
      name: 'b',
      type: 'pseudo-line'
    },
    {
      name: 'a',
      type: 'pseudo-space'
    }
  ]

  noteCount = 0;

  addNote() {
    this.noteCount += 1;
  }

  constructor() { }

  ngOnInit() {
  }

}
