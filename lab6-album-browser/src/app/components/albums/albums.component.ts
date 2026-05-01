import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Album } from '../../models/album.model';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-albums',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css',
})
export class AlbumsComponent {
  private readonly albumService = inject(AlbumService);

  protected readonly albums$: Observable<Album[]> = this.albumService.getAlbums().pipe(
    map((albums) => albums.slice(0, 9)),
  );
}
