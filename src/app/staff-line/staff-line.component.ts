import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'staff-line',
  templateUrl: './staff-line.component.html',
  styleUrls: ['./staff-line.component.scss']
})

export class StaffLineComponent implements OnInit {
  @Input() notePosition: number;
  @Input() type: string;
  @Input() letterValue: string;
 
  //array of all notes' positions on this line
  notes = [];
  //hide and show the ghost note on hover
  showGhost = false;

  addNote() {
    this.notes.push(
      {
        position: this.notePosition,
        line: this.letterValue
      }
    );
  }

  calcNotePosition(note) {
    var noteCount = this.notePosition;
    var setNotePos = note.position;
    var position = (this.notePosition - setNotePos) * 50;
    return { 
      "right":position+"px"
    };
  }

  constructor() { }

  ngOnInit() {
  }

}
