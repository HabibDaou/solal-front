import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '../../../@fuse/animations';
import { Entrepriseservice } from '../../shared/services/entreprise.service';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class mapObject {
  type: string;
  query: [];
  features: [];
  attribution: string;
}
export class EntrepriseComponent implements OnInit {
  user: any;
entreprise:any;
  constructor(private userService: UserService,  private entreprisService: Entrepriseservice, private http: HttpClient) { }

  ngOnInit(): void {
  }
  public getConnected() {
    var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
    mapboxgl.accessToken = 'pk.eyJ1IjoiaGFiaWJkYW91IiwiYSI6ImNqb3l3YjNjcTAwanUzcm5qbWZ5ZmhvMmoifQ.rMS3RRmvsY09yDIF-vXe8w';
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
    });

    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"
    const token = "pk.eyJ1IjoiaGFiaWJkYW91IiwiYSI6ImNqb3l3YjNjcTAwanUzcm5qbWZ5ZmhvMmoifQ.rMS3RRmvsY09yDIF-vXe8w&autocomplete=true&types=country";
    var Datatank: [any];
    this.userService.getuser().subscribe(data => {
      this.user = data;
      this.entreprisService.getentrepriseByid(data._id).subscribe(result => {
        this.entreprise = result;

        this.entreprise.forEach(entreprise => {

          this.http.get(url + entreprise.adresse + ".json?types=country&access_token=" + token).subscribe((res: mapObject) => {
            res.features.forEach((geo: any) => {
              new mapboxgl.Marker()
                .setLngLat(geo.geometry.coordinates)
                .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
                  .setHTML('<h3>' + "title" + '</h3><p>' + "Popup MArker" + '</p>'))
                .addTo(map);
            })
          })
        })
      });

    });
  }
  search_Word(word: string): any {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"
    const token = "pk.eyJ1IjoiaGFiaWJkYW91IiwiYSI6ImNqb3l3YjNjcTAwanUzcm5qbWZ5ZmhvMmoifQ.rMS3RRmvsY09yDIF-vXe8w";
    this.http.get(url + word + ".json?types=country&access_token=" + token).subscribe((res: mapObject) => {

      res.features.forEach((geo: any) => {
        return geo.geometry.coordinates;
      })
    })
  }
}
