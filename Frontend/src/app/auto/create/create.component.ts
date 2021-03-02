import { Component, OnInit } from '@angular/core';
import { AutoService } from '../auto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private router: Router, private auto: AutoService) { }

  ngOnInit(): void {
  }

  nuevoAuto = {
    marca: "",
    modelo: 0,
    color: "",
    precio: 0
  }

  registrar() {
    console.log(this.nuevoAuto);
    this.auto.create(this.nuevoAuto).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['autos/list']);
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
