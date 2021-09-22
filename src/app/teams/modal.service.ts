import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private subject = new Subject<any>();

  show(input: any): any {
    this.setModal(input);
  }

  private setModal(input: any): any {
    const that = this;
    this.subject.next({
      header: input.header,
      teamName: input.teamName,
      save(teamName: string): any {
        that.subject.next({ closeModal: true });
        input.save(teamName);
      },
      cancel(teamName: string): any {
        that.subject.next({ closeModal: true });
        input.cancel(teamName);
      },
      closeModal: false,
    });

  }

  getModalConfig(): Observable<any> {
    return this.subject.asObservable();
  }
}
