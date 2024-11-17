import { Injectable } from '@angular/core';
import { VideoService } from '@mkcodergr/video-player-shared';
import { BehaviorSubject, Observable } from 'rxjs';
import { PlaylistItem } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class VideoPlaylistService {

  private list = new BehaviorSubject<PlaylistItem[]>([]);
	private currentVideo = new BehaviorSubject<string>('');
	private shouldPlayNext = new BehaviorSubject<boolean>(true);

  constructor(private videoService: VideoService) { }
  etShouldPlayNext(playNext: boolean): void {
		this.shouldPlayNext.next(playNext);
	}

	get shouldPlayNext$(): Observable<boolean> {
		return this.shouldPlayNext.asObservable();
	}

	get list$(): Observable<PlaylistItem[]> {
		return this.list.asObservable();
	}

	get currentVideo$(): Observable<string> {
		return this.currentVideo.asObservable();
	}

	setCurrentVideo(video: string): void {
		if (this.currentVideo.getValue() !== video) {
			this.currentVideo.next(video);
			this.videoService.pause();
		}
	}

	playNextVideo(): void {
		const activeIndex = this.list
			.getValue()
			.findIndex((video) => this.currentVideo.getValue() === video.url);
		this.setCurrentVideoByIndex(activeIndex + 1);
	}

	setCurrentVideoByIndex(index: number): void {
		this.setCurrentVideo(this.list.getValue()[index < this.list.getValue().length ? index : 0].url);
	}

	fetchList(endpoint: string): void {
		fetch(endpoint)
			.then((response) => response.json())
			.then((playlist: PlaylistItem[]) => {
				this.list.next(playlist);
				this.setCurrentVideo(playlist[0].url);
			});
	}

  fetchCustomList<T>(endpoint : string , responseMapper : (res : T) => PlaylistItem[]) : void{
    fetch(endpoint).then(res => res.json())
      .then((apiResponse: T) => {
        const playlist = responseMapper(apiResponse);
        this.list.next(playlist);
        this.setCurrentVideo(playlist[0].url);
      })
  }
}
