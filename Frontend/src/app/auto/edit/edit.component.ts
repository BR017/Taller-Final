import { Component, OnInit } from '@angular/core';
import { AutoService } from '../auto.service';
import { Router, ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private router: Router, private auto: AutoService, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.consultarAuto();
  }

  editauto: any = {
    marca: "",
    modelo: 0,
    color: "",
    precio: 0
  }

  consultarAuto(){
    let id = this.route.snapshot.params.id;
    this.auto.get(id).subscribe(
      (res) => {
        console.log(res);
        this.editauto = res;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  actualizarAuto(){
    console.log(this.editauto);
    this.auto.update(this.editauto).subscribe(
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
