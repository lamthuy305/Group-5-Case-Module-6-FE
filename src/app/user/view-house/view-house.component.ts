import {Component, OnInit} from '@angular/core';
import {ShareJSService} from '../../service/share/share-js.service';
import {HouseService} from '../../service/house/house.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {House} from '../../model/house';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {OrderService} from '../../service/order/order.service';
import {NotificationService} from '../../service/notification/notification.service';
import {ImageService} from '../../service/image/image.service';
import {ProfileService} from '../../service/profile/profile.service';
import {CommentService} from '../../service/comment/comment.service';

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-view-house',
  templateUrl: './view-house.component.html',
  styleUrls: ['./view-house.component.css']
})
export class ViewHouseComponent implements OnInit {
  house_current_id: any;
  houseFE: House = {};
  currentUser: any = {};
  images: any = [];
  comments: any[] = [];
  commentsAllCount: any[] = [];
  ishowEditForm: boolean = false;
  selectedFile: File[] = [];
  filePath: string = '';
  listPathImage: any[];
  replies: any;
  idComment: number = 0;
  imgForm: FormGroup = new FormGroup({
    img: new FormControl(''),
  });

  imageForm: FormGroup = new FormGroup({
    images: new FormControl(),

  });
  selectedFileImage: File[] = [];
  profile: any;

  orderForm: FormGroup = new FormGroup({
    house: new FormControl(),
    user: new FormControl(),
    checkIn: new FormControl([Validators.required]),
    checkOut: new FormControl([Validators.required]),
  });

  commentForm: FormGroup = new FormGroup({
    user: new FormControl(),
    text: new FormControl(),
    house: new FormControl(),
    profile: new FormControl(),
  });
  replyForm: FormGroup = new FormGroup({
    comment: new FormControl(),
    text: new FormControl(),
    user: new FormControl(),
    profile: new FormControl()
  });


  constructor(private shareJSService: ShareJSService,
              private houseService: HouseService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private orderService: OrderService,
              private imageService: ImageService,
              private notificationService: NotificationService,
              private profileService: ProfileService,
              private commentService: CommentService) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = +paramMap.get('id');
      this.getHouseById(id);
      this.getAllImageByHouseId(id);
      this.getAllCommentUseCount(id);
      this.get5CommentByHouseId(id);
    });
  }


  ngOnInit() {
    this.getCurrentUser();
    this.getDateTimePicker();
    this.getProfile();
  }

  getProfile() {
    this.profileService.getProfileByUserId(this.currentUser.id).subscribe(profileBE => {
      this.profile = profileBE;
    });
  }

  showEditForm(id) {
    if (id == this.currentUser.id) {
      this.ishowEditForm = true;
    }
  }

  getDateTimePicker() {
    $(function () {
      var now = new Date(),
        minDate = now.toISOString().substring(0, 10);
      $('#check-in').prop('min', minDate);
      $('#check-out').prop('min', minDate);
    });
  }

  private getHouseById(id) {
    this.houseService.getHouseById(id).subscribe(houseBE => {
      this.houseFE = houseBE;
      this.house_current_id = this.houseFE.id;
      this.showEditForm(this.houseFE.user.id);
    });
  }

  getCurrentUser() {
    this.currentUser = localStorage.getItem('currentUser');
    this.currentUser = JSON.parse(this.currentUser);
  }

  getAllImageByHouseId(id) {
    this.images = this.imageService.getAllImageByHouseId(id).subscribe(imagesBE => {
      this.images = imagesBE;
      this.shareJSService.shareJS();

    });
  }

  get5CommentByHouseId(id) {
    this.commentService.get5CommentByHouseId(id).subscribe((listCommentBE) => {
      this.comments = listCommentBE;
    });
  }

  getAllCommentUseCount(id) {
    this.commentService.getAll(id).subscribe((listCommentBE) => {
      this.commentsAllCount = listCommentBE;
    });
  }

  submitCreateOrder() {
    this.orderForm.value.house = {
      id: this.houseFE.id
    };
    this.orderForm.value.user = {
      id: this.currentUser.id
    };
    this.orderService.createOrder(this.orderForm.value).subscribe(() => {
      $(function () {
        $('#create-order').modal('hide');
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
      });
      this.router.navigateByUrl('/orderDetail');
      this.notificationService.showMessage('success', 'Book!', 'Đã gửi yêu cầu đặt homstay thành công, vui lòng chờ admin xác nhận');
    }, error => this.notificationService.showMessage('error', 'Book!', 'Đặt lỗi'));
  }

  changeImg($event) {
    this.selectedFile = $event.target.files;
    for (let i = 0; i < this.selectedFile.length; i++) {
    }
    const reader = new FileReader();
    reader.onload = () => {
      this.filePath = reader.result as string;
    };
    reader.readAsDataURL(this.selectedFile[0]);
  }

  changeFileImage($event) {
    this.selectedFileImage = $event.target.files;


    // const reader = new FileReader();
    // for (let i = 0; i < this.selectedFile.length; i++) {
    //
    // }
    // reader.onload = () => {
    //   this.filePath = reader.result as string;
    // };
    // reader.readAsDataURL(this.selectedFile[0]);
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
            this.notificationService.showMessage('success', 'Delete!!', 'Xóa thành công!!!!!!');
            this.getAllImageByHouseId(this.house_current_id);
          }, error =>
            this.notificationService.showMessage('error', 'Delete!', 'Xóa lỗi'));
        }
      }
    );
  }


  submitEditImg() {
    let formData = new FormData();
    formData.append('id', this.house_current_id);
    const files = (document.getElementById('img') as HTMLInputElement).files;
    if (files.length > 0) {
      formData.append('img', files[0]);
    }
    this.houseService.editImgHouse(formData).subscribe(() => {
      $(function () {
        $('#edit-img').modal('hide');
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
      });
      this.notificationService.showMessage('success', 'Edit!', 'Chỉnh sửa thành công');
      this.getHouseById(this.house_current_id);
    }, error => this.notificationService.showMessage('error', 'Edit!', 'Chỉnh sửa lỗi'));
  }

  submitCreateImage() {
    const imageForm = new FormData();
    if (this.selectedFileImage.length > 0) {
      for (let i = 0; i < this.selectedFileImage.length; i++) {
        imageForm.append('images', this.selectedFileImage[i]);
      }
    }
    console.log(imageForm);
    this.imageService.createImage(this.house_current_id, imageForm).subscribe(() => {
        $(function () {
          $('#create-image').modal('hide');
          $('body').removeClass('modal-open');
          $('.modal-backdrop').remove();
        });
        this.notificationService.showMessage('success', 'Create!!', 'Tạo mới thành công');
        this.getAllImageByHouseId(this.house_current_id);
      }, error => this.notificationService.showMessage('error', 'Xảy ra lỗi!', 'Tạo mới lỗi')
    );
  }

  submitCreateComment() {
    this.commentForm.value.user = {
      id: this.currentUser.id
    };
    this.commentForm.value.house = {
      id: this.house_current_id
    };
    this.commentForm.value.profile = {
      id: this.profile.id
    };

    this.commentService.createComment(this.commentForm.value).subscribe(() => {
      this.get5CommentByHouseId(this.house_current_id);
      this.getAllCommentUseCount(this.house_current_id);
      this.commentForm.reset();
    },);
  }

  like(id) {
    this.commentService.likeComment(id, this.currentUser.id).subscribe(() => {
      this.get5CommentByHouseId(this.house_current_id);
    });
  }

  dislike(id) {
    this.commentService.dislikeComment(id, this.currentUser.id).subscribe(() => {
      this.get5CommentByHouseId(this.house_current_id);
    });
  }


  isShowFormReply(index, idComment) {
    $('#rep-form-' + index).toggle();
    this.idComment = idComment;
  }

  submitCreateReply(id) {
    this.replyForm.value.comment = {
      id: id
    };
      this.replyForm.value.user = {
        id: this.currentUser.id
      };
      this.replyForm.value.profile = {
        id: this.profile.id
      };

    this.commentService.createReply(this.replyForm.value).subscribe(() => {
      alert('thành công')
    }, error => {
      alert('thất bại')
    })

  }

  getAllReply() {
    this.commentService.getAllReplyByIdComment(this.idComment).subscribe(listReplyBE => {
      // this.replies = listReplyBE;
    })
  }
}
