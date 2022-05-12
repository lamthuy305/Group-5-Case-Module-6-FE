import {Component, OnInit} from '@angular/core';
import {ShareJSService} from '../../service/share/share-js.service';
import {HouseService} from '../../service/house/house.service';
import {Router} from '@angular/router';
import {House} from '../../model/house';
import {NotificationService} from '../../service/notification/notification.service';

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit {
  houses: House[] = [];

  constructor(private shareJSService: ShareJSService,
              private router: Router,
              private notificationService: NotificationService,
              private houseService: HouseService) {
  }

  ngOnInit() {
    // this.shareJSService.shareJS();
    this.getAllHouse();
  }

  getAllHouse() {
    this.houseService.getAll().subscribe((Houses_BE) => {
      this.houses = Houses_BE;
      this.shareJSService.shareJS();
    });
  }

  delete(id) {
    Swal.fire({
      title: 'Bạn có muốn xóa?',
      text: 'You wont be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
          this.houseService.deleteHouse(id).subscribe(() => {
              this.getAllHouse();
              this.notificationService.showMessage('success', 'Delete!', 'Xóa thành công');
            }, error =>
              this.notificationService.showMessage('erros', 'Delete!', 'Xóa lỗi')
          );
        }
      }
    );
  }

}
