import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { map, Observable, switchMap, tap } from 'rxjs';
import { Album } from '../../models/album.model';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-album-detail',
  imports: [AsyncPipe, FormsModule, RouterLink],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css',
})
export class AlbumDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly albumService = inject(AlbumService);

  protected editedTitle = '';
  protected readonly album$: Observable<Album> = this.route.paramMap.pipe(
    map((params) => Number(params.get('id'))),
    switchMap((id) => this.albumService.getAlbum(id)),
    tap(( album) => {
      this.editedTitle = album.title;
    }),
  );

  protected saveAlbum(album: Album): void {
    const updatedAlbum: Album = {
      ...album,
      title: this.editedTitle.trim() || album.title,
    };

    this.albumService.updateAlbum(updatedAlbum).subscribe((response) => {
      this.editedTitle = response.title;
    });
  }

  protected deleteAlbum(id: number): void {
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.router.navigate(['/albums']);
    });
  }
}
