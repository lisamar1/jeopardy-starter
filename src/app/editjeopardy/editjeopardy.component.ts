import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-editjeopardy',
  templateUrl: './editjeopardy.component.html',
  styleUrls: ['./editjeopardy.component.css']
})
export class EditJeopardyComponent implements OnInit {

  usersScore: number = 0;
  userAnswer: string;

  @Output() answerHasBeenScored = new EventEmitter();

  @Input() questionInfo;

  submitAnswer(): void {
    if (this.questionInfo.answer == this.userAnswer) {
      this.usersScore += this.questionInfo.value;

    }
    this.userAnswer = "";
    this.answerHasBeenScored.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}


