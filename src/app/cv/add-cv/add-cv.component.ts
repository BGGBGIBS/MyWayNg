import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecordService } from 'src/app/services/record/record.service';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.scss']
})
export class AddCvComponent {
  recordForm!: FormGroup;
  constructor(private fb: FormBuilder, private _userRecordsService: RecordService) {
    this.recordForm = this.fb.group({
      user_firstname: ['', Validators.required],
      user_lastname: ['', Validators.required],
      user_email: ['', [Validators.required, Validators.email]],
      user_birthdate: ['', Validators.required],
      user_address: ['', Validators.required],

      event_begin: ['', Validators.required],
      event_end: ['', Validators.required],
      event_type: ['', Validators.required],
      occupation_name: ['', Validators.required],
      institution_name: ['', Validators.required],

      skill_name: ['', Validators.required],
      skill_description: ['', Validators.required],
      skill_type: ['', Validators.required],

      grade_name: ['', Validators.required],
      grade_value: ['', Validators.required],
      scale_min: ['', Validators.required],
      scale_max: ['', Validators.required],
    });
  }


  ngOnInit(): void {}

  onSubmit(): void {
    if (this.recordForm.valid) {
      this._userRecordsService
        .addRecord(this.recordForm.value)
        .subscribe((record) => {
          console.log('Record ajouté avec succès !', record);
          // Ajoutez ici votre logique pour gérer l'ajout réussi d'un record
        });
    } else {
      console.log('Le formulaire est invalide.');
    }
  }
}
