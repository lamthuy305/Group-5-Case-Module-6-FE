import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {ImageService} from '../../../service/image/image.service';
import {NotificationService} from '../../../service/notification/notification.service';

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-detail-house',
  templateUrl: './detail-house.component.html',
  styleUrls: ['./detail-house.component.css']
})
export class DetailHouseComponent implements OnInit {
  images: any[] = [];
  selectedFile: File[] = [];
  id: number;

  constructor(private imageService: ImageService,
              private activatedRoute: ActivatedRoute,
              private notificationService: NotificationService) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = +paramMap.get('id');
      this.getAllImagesByHouseId(id);
    });
  }

  imageForm: FormGroup = new FormGroup({
    images: new FormControl(),

  });

  ngOnInit() {
  }

  getAllImagesByHouseId(id) {
    this.id = id;
    this.imageService.getAllImageByHouseId(id).subscribe((listImages) => {
      this.images = listImages;
    });
  }

  changeFile($event) {
    this.selectedFile = $event.target.files;
  }

  deleteImage(id) {
    Swal.fire({
      title: 'Bạn có chắc chắn?',
      text: 'Bạn có muốn xóa ảnh này!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Đồng ý xóa!'
    }).then((result) => {
        if (result.isConfirmed) {
          this.imageService.deleteImage(id).subscribe(() => {
            this.notificationService.showMessage('success', 'Delete!!', 'Xóa thành công');
            this.getAllImagesByHouseId(this.id);
          }, error =>
            this.notificationService.showMessage('erros', 'Delete!','Xóa lỗi'));
        }
      }
    );
  }

  submitCreateImage() {
    const imageForm = new FormData();
    if (this.selectedFile.length > 0) {
      for (let i = 0; i < this.selectedFile.length; i++) {
        imageForm.append('images', this.selectedFile[i]);
      }
    }
    this.imageService.createImage(this.id,imageForm).subscribe(() => {
        $('#create-image').modal('hide');
        this.notificationService.showMessage('success', 'Create!!', 'Tạo mới thành công');
        this.getAllImagesByHouseId(this.id);
      }, error => this.notificationService.showMessage('error', 'Xảy ra lỗi!', 'Tạo mới lỗi')
    );

  }
}
