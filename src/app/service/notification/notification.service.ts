import {Injectable} from '@angular/core';

declare var $: any;
declare var Swal: any;

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() {
  }

  showMessage(icon, title, text) {
    $(function() {
      Swal.fire({
        showConfirmButton: false,
        timer: 2000,
        icon: icon,
        title: title,
        text: text
      });
    });
  }
}
