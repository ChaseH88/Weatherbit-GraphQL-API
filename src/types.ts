export interface CityLocationResponse {
  rh: number
  pod: string
  lon: number
  pres: number
  timezone: string
  ob_time: string
  country_code: string
  clouds: number
  ts: number
  solar_rad: number
  state_code: string
  city_name: string
  wind_spd: number
  wind_cdir_full: string
  wind_cdir: string
  slp: number
  vis: number
  h_angle: number
  sunset: string
  dni: number
  dewpt: number
  snow: number
  uv: number
  precip: number
  wind_dir: number
  sunrise: string
  ghi: number
  dhi: number
  aqi: number
  lat: number
  weather: { icon: string, code: number, description: string },
  datetime: string
  temp: number
  station: string
  elev_angle: number
  app_temp: number
}

export interface SevereAlertsResponse {
  country_code: string;
  lon: number;
  timezone: string;
  lat: number;
  alerts?: (AlertsEntity)[] | null;
  city_name: string;
  state_code: string;
}
export interface AlertsEntity {
  regions?: (string)[] | null;
  ends_utc: string;
  effective_local: string;
  onset_utc: string;
  expires_local: string;
  expires_utc: string;
  ends_local: string;
  uri: string;
  onset_local: string;
  effective_utc: string;
  severity: string;
  title: string;
  description: string;
}
