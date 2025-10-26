import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie.model';
import { SeriesService } from '../series.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.html',
  standalone: false,
  styleUrls: ['./series-list.css']
})
export class SeriesList implements OnInit {
  series: Serie[] = [];
  averageSeasons = 0;
  selectedSerie: Serie | null = null;


  constructor(private seriesService: SeriesService) {}

  ngOnInit(): void {
    this.seriesService.getSeries().subscribe({
      next: (data) => {
        this.series = Array.isArray(data) ? data : [];
        this.calculateAverage();
      },
      error: (err) => {
        console.error('Error cargando series:', err);
      }
    });
  }

  private calculateAverage(): void {
    const total = this.series.reduce((acc, s) => acc + (s.seasons ?? 0), 0);
    this.averageSeasons = this.series.length ? total / this.series.length : 0;
  }
}
