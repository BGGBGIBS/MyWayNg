import { Component, Input } from '@angular/core';
import { Cv } from "../../models/cv.model";
import { CvService } from 'src/app/services/cv/cv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent {
  records!: Cv[];
  constructor(private _cvService: CvService, private _router: Router){}
  ngOnInit(){
    const user_id : number = parseInt(localStorage.getItem('user_id')!,10);
    this._cvService.getCvByUser(user_id).subscribe({
      next: (res) => {
        console.log("NEXT", res);
        this.records = res.results;
        console.log(this.records);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log("COMPLETE");
      }
    });
  }
}