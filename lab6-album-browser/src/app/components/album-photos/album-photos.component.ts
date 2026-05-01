import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { Photo } from '../../models/photo.model';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-album-photos',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css',
})
export class AlbumPhotosComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly albumService = inject(AlbumService);

  protected readonly albumId$: Observable<number> = this.route.paramMap.pipe(
    map((params) => Number(params.get('id'))),
  );
  protected readonly photos$: Observable<Photo[]> = this.albumId$.pipe(
    switchMap((id) => this.albumService.getAlbumPhotos(id)),
    map((photos) => photos.slice(0, 12)),
  );
}
