import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/teams/modal.service';

@Component({
  selector: 'app-edit-teams',
  templateUrl: './edit-teams.component.html',
  styleUrls: ['./edit-teams.component.css']
})
export class EditTeamsComponent implements OnInit {

  @ViewChild('myModal', { static: true }) modal: ElementRef = new ElementRef('myModal');

  modalInfo: any;
  form: FormGroup;

  constructor(private modalService: ModalService, private fb: FormBuilder) {
    this.form = this.fb.group({
      teamName: ['', [Validators.required]]
    });
   }

  ngOnInit(): void {
    this.modalService.getModalConfig().subscribe(input => {
      this.modalInfo = input;
      if (input.closeModal) {
        this.hide();
      } else {
        this.setForm(input.teamName);
        this.show();
      }
    });
  }

  setForm(input = '') {
    this.form.patchValue({ teamName: input });
  }

  hide() {
    this.modal.nativeElement.style.display = 'none';
  }

  show() {
    this.modal.nativeElement.style.display = 'block';
  }

}
