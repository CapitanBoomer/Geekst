import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-info-pelicula',
  templateUrl: './info-pelicula.page.html',
  styleUrls: ['./info-pelicula.page.scss'],
})
export class InfoPeliculaPage implements OnInit {

  constructor(private infopelicula:ActivatedRoute) { }
  public foto: string = '';
  public titulo: string = '';
  ngOnInit() {
  }

  ionViewWillEnter(){
  this.foto = this.infopelicula.snapshot.paramMap.get('foto')||'',
  this.titulo = this.infopelicula.snapshot.paramMap.get('titulo')||''
  }
}
