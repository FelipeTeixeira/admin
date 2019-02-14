import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-upload',
    templateUrl: './upload.component.html',
    styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
    @Input() text: string;
    @Input() fileSupport: string;
    @Input() sizeLimit: number;

    constructor() { }

    ngOnInit() {
    }

}
