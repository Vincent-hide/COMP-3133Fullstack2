export interface Mission {
  crew: any;
  details: string;
  flight_number: number;
  is_tentative: boolean;
  launch_date_local: string;
  launch_date_unix: number;
  launch_date_utc: string;
  launch_failure_details: any;
  launch_site: any;
  launch_success: boolean;
  launch_window: number;
  launch_year: string;
  links: any;
  mission_id: any;
  mission_name: string;
  rocket: any;
  ships: any;
  static_fire_date_unix: number;
  static_fire_date_utc: string;
  tbd: boolean;
  telemetry: any;
  tentative_max_precision: string;
  timeline: any;
  upcoming: boolean;
}
