import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-image-cover',
    templateUrl: './image-cover.component.html',
    styleUrls: ['./image-cover.component.scss']
})
export class ImageCoverComponent implements OnInit {
    @Input() text: string;
    @Input() isOptional = false;
    imageSrc;

    constructor() { }

    ngOnInit() {
    }

    onSelectImg(event: Event): void {
        // if (event.target.files && event.target.files[0]) {
        //     const file = event.target.files[0];

        //     const reader = new FileReader();
        //     reader.onload = e => this.imageSrc = reader.result;

        //     reader.readAsDataURL(file);
        // }
    }

}
