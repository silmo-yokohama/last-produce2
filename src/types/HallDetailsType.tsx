interface HallDetail {
  name: string;
  address: string;
  tel: string;
  url: string;
  stations: Array<string>;
  mapOption: {
    lat: number;
    lng: number;
    zoom: number;
  }
}

export default HallDetail