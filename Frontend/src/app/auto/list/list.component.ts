import { Component, OnInit } from '@angular/core';
import { AutoService } from '../auto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private router: Router, private auto: AutoService) { }

  autos: any[] = [];
  autoMarca = "";
  ngOnInit(): void {
    this.listarAutos();
  }

  filtrar(){
    if(this.autoMarca.length){
      this.autos = this.autos.filter((list: { marca: string | any[]; }) => list.marca.includes(this.autoMarca))
    }else{
      this.listarAutos();
    }
  }

  listarAutos(){
    this.auto.getAll().subscribe(
      (res) => {
        console.log(res);
        this.autos = [];
        this.autos = res;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  EliminarAuto(id:string){
    console.log('borrado', id);
    this.auto.delete(id).subscribe(
      (res) => {
        console.log(status);
       this.listarAutos();
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
