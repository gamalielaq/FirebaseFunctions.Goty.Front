import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Game } from '../../interfaces/interfaces';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {


  juegos: any[] = [];

  constructor(
    private db: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.db.collection<any>('goty').valueChanges()
      .pipe(
        //1° forma
        map((resp: Game[]) => resp.map(({ name, votos }) => ({ name, value: votos })))
      )
      .subscribe(resp => this.juegos = resp );
  }


  //2° forma
  // return this.juegos.map(juego => {
  //   return {
  //     name: juego.name,
  //     value: juego.votos,
  //   }
  // })
}


