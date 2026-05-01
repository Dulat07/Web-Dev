import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Album } from '../models/album.model';
import { Photo } from '../models/photo.model';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  private readonly apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private readonly http: HttpClient) {}

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.apiUrl}/albums`);
  }

  getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.apiUrl}/albums/${id}`);
  }

  getAlbumPhotos(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.apiUrl}/albums/${id}/photos`).pipe(
      map((photos) =>
        photos.map((photo) => ({
          ...photo,
          url: `https://picsum.photos/seed/album-photo-${photo.id}/900/600`,
          thumbnailUrl: `https://picsum.photos/seed/album-photo-${photo.id}/400/280`,
        })),
      ),
    );
  }

  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(`${this.apiUrl}/albums/${album.id}`, album);
  }

  deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/albums/${id}`);
  }
}
