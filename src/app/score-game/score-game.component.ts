import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-score-game',
  templateUrl: './score-game.component.html',
  styleUrls: ['./score-game.component.css']
})
export class ScoreGameComponent implements OnInit {

  //scoring
  usersScore: number = 0;
  userAnswer: string;

  //let the parent know things have happened in the childs world
  @Output() answerHasBeenScored = new EventEmitter();

  @Input() questionInfo;

   //scoring
   submitAnswer(): void {
    if(this.questionInfo.answer.toLowerCase() == this.userAnswer.toLocaleLowerCase()){
      this.usersScore += this.questionInfo.value;
    }
    this.userAnswer = "";
    this.answerHasBeenScored.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
