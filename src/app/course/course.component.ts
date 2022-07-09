import { CourseService } from './../course.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses:Array<string>;

  title = "no way"
  constructor() {
    let service = new CourseService;
    this.courses = service.getcourse();
   }

  ngOnInit(): void {
  }

}
