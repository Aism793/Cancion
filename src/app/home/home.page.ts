import { Component } from '@angular/core';
import { CancionService } from '../service/cancion.service';
import { Data } from '../interface/data';
import { Tracks } from '../interface/tracks';
import { Task } from '../interface/task';
import { Track } from '../interface/track';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  task: Task ;

  tracks: any;
  track=[];
  imageUrl: 'https://png.pngtree.com/png-clipart/20190611/original/pngtree-blue-musical-symbol-png-image_2131415.jpg';
  constructor(private cancionService: CancionService, private router : Router) {}

  ngOnInit(){
    //this.cancionService.getAllTask().subscribe(task => this.task = task);
    this.cancionService.getAll().subscribe(
      (data) => {
          this.tracks = data["tracks"];
          this.track = this.tracks["track"];
      }
    );
  }

  
}
