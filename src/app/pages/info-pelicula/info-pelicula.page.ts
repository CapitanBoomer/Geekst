import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-info-pelicula',
  templateUrl: './info-pelicula.page.html',
  styleUrls: ['./info-pelicula.page.scss'],
})
export class InfoPeliculaPage implements OnInit {

  constructor(private infopelicula: ActivatedRoute) { }
  public mensaje: string = '';
  public titulo: string = '';
  public foto: string = '';



  ngOnInit() {
  }

  ionViewWillEnter() {
    this.infopelicula.params.subscribe(res => { this.titulo = res['titulo'] });
    this.infopelicula.queryParams.subscribe(respt => {
      this.titulo = respt['nombre'] || '',
      this.foto = respt['foto']
    })
  }
}
