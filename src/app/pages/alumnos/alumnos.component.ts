import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent implements OnInit {

  type: string;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
    });

    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params);
    });

    this.activatedRoute.data.subscribe(data => {
      console.log(data['type']);
      this.type = data['type'];
    });
  }


}
