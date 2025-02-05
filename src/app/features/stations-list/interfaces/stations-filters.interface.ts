import { Station } from 'src/app/core/interfaces/station.interface';

export interface StationsFilters {
  stationName: string;
  someBikesAvailable: boolean;
  someFreeDocksAvailable: boolean;
  isNearMe: boolean;
}

export type StationsFilterer = (station: Station) => boolean;
