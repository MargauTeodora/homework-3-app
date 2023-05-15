import { Component } from '@angular/core';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styles:[`
    .bigParagraph{
        color:white
    }
    `]
})
export class ParagraphComponent {

  paragraphVisibility : boolean = true;
  noClick = 0;
  clickName = "Click no.";
  clicks : String[] = [];

  switchVisibility(){
    this.paragraphVisibility = !this.paragraphVisibility;
    this.noClick = this.noClick + 1;
    console.log(this.noClick);
    this.clicks.push(this.clickName+this.noClick)
  }

  getColor(index: number){
    return this.paragraphGT5(index) ? "blue" : "white";
  }

  paragraphGT5(index: number){
      return index >= 4;
  }
}
