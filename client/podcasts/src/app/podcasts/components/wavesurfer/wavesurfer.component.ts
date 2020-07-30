import { Component, OnInit, Input } from '@angular/core';

import * as WaveSurfer from 'wavesurfer.js';
import * as WaveSurferRegions from 'wavesurfer.js/dist/plugin/wavesurfer.regions.js';

// COMPONENT
@Component({
	selector: 'wavesurfer',
	templateUrl: 'wavesurfer.component.html',
	styleUrls: ['./wavesurfer.component.scss']
})

// CLASS
export class WaveSurferComponent implements OnInit {
  @Input() audio: string;
  @Input() play: boolean;

  wavesurfer: any;

  ngOnInit(){
    this._initWaveSurfer();
    
    if(this.play){
      this.wavesurfer.play();
    }
  }

  private _initWaveSurfer(){
		this.wavesurfer = WaveSurfer.create({
      container: document.querySelector('#waveform'),
      backend: 'MediaElement',
      height: 100,
      cursorColor: 'transparent'
    });

    this.wavesurfer.load(this.audio);
	}
}
