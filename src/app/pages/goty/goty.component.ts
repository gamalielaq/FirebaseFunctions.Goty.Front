import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/interfaces/interfaces';
import { GameService } from 'src/app/services/game.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.scss']
})
export class GotyComponent implements OnInit {


  juegos: Game[] = [];

  constructor(
    private _gameServie: GameService
  ) { }

  ngOnInit(): void {
    this._gameServie.getNominados().subscribe(resp => {
      this.juegos = resp;
    })
  }

  votar(juego: Game) {
    this._gameServie.votarJuego(juego.id).subscribe((resp: any) => {
      if (resp.ok) {
        Swal.fire('Gracias', resp.msg, 'success');
      } else {
        Swal.fire('Opps', resp.msg, 'error');
      }
    });
  }
}
