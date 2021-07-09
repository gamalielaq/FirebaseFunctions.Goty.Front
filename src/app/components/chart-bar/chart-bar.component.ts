import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-bar',
  templateUrl: './chart-bar.component.html',
  styleUrls: ['./chart-bar.component.scss']
})
export class ChartBarComponent implements OnDestroy {

  @Input() results: any[] = [];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights'


  // intervalo: any;

  constructor() {

    const newResults = [...this.results]

    // this.intervalo = setInterval( () => {
    //   console.log('tick');

    //   for (let i in newResults) {
    //     newResults[i].value = Math.round(Math.random() * 500);
    //   }
    //   this.results = [...newResults];
    // }, 1500)

    

  }
  ngOnDestroy(): void {
    // clearInterval( this.intervalo );
  }

  onSelect( event: any ) {
    console.log(event);
  }

}
