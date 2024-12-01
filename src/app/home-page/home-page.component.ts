import { NgIf } from '@angular/common';
import {
  Component,
  inject
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import * as AOS from 'aos';
import 'aos/dist/aos.css';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-home-page',
  imports: [ReactiveFormsModule, NgIf, CarouselModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  private readonly _NgxSpinnerervice = inject(NgxSpinnerService);
  Dark: boolean = false;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    autoplay: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 500,
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      450: {
        items: 2,
      },
      740: {
        items: 2,
      },
      940: {
        items: 3,
      },
    },
    nav: false,
  };

  ngOnInit(): void {
    AOS.init({
      duration: 1000, // مدة الحركة
      easing: 'ease-in-out', // نوع الحركة
      once: true,
    });
    this._NgxSpinnerervice.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this._NgxSpinnerervice.hide();
    }, 1000);
  }
  ngAfterViewInit(): void {
    AOS.refresh();
  }
  contactForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^01[0125][0-9]{8}$/),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
  });
  onSubmit() {
    alert('Hello');
    if (this.contactForm.valid) {
      console.log('Form Data:', this.contactForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

}
