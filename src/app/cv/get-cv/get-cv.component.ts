import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cv } from 'src/app/models/cv.model';
import { CvService } from 'src/app/services/cv/cv.service';

@Component({
  selector: 'app-get-cv',
  templateUrl: './get-cv.component.html',
  styleUrls: ['./get-cv.component.scss']
})
export class GetCvComponent {
  records!: Cv[];
  constructor(private _cvService: CvService, private _router: Router){}
  ngOnInit(){
    const user_id : number = parseInt(localStorage.getItem('user_id')!,10);
    this._cvService.getCvByUser(user_id).subscribe({
      next: (res) => {
        console.log("NEXT", res);
        this.records = res.results;
        // console.log(this.records);
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
