import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
}



export interface AccessStatus {
  __typename?: 'AccessStatus';
  battery: Scalars['String'];
  timestamp: Scalars['DateTime'];
}

export interface AccessStatusWhereArgs {
  battery?: Maybe<OperatorBase>;
  timestamp?: Maybe<OperatorBase>;
}

export interface Archive {
  __typename?: 'Archive';
  dewPointF: Scalars['Float'];
  feelsF?: Maybe<Scalars['Float']>;
  light?: Maybe<Scalars['Int']>;
  lightSeconds?: Maybe<Scalars['Int']>;
  lightning?: Maybe<Scalars['Int']>;
  pressureinHg: Scalars['Float'];
  rainIn: Scalars['Float'];
  relH: Scalars['Int'];
  tempF: Scalars['Float'];
  timestamp: Scalars['DateTime'];
  totalRainIn: Scalars['Float'];
  uvIndex?: Maybe<Scalars['Int']>;
  windDeg: Scalars['Int'];
  windGustDeg?: Maybe<Scalars['Int']>;
  windGustMph?: Maybe<Scalars['Int']>;
  windSpeedMph: Scalars['Float'];
  windSpeedMphAvg?: Maybe<Scalars['Float']>;
}

export interface ArchiveWhereArgs {
  dewPointF?: Maybe<OperatorBase>;
  feelsF?: Maybe<OperatorBase>;
  light?: Maybe<OperatorBase>;
  lightSeconds?: Maybe<OperatorBase>;
  lightning?: Maybe<OperatorBase>;
  pressureinHg?: Maybe<OperatorBase>;
  rainIn?: Maybe<OperatorBase>;
  relH?: Maybe<OperatorBase>;
  tempF?: Maybe<OperatorBase>;
  timestamp?: Maybe<OperatorBase>;
  totalRainIn?: Maybe<OperatorBase>;
  uvIndex?: Maybe<OperatorBase>;
  windDeg?: Maybe<OperatorBase>;
  windGustDeg?: Maybe<OperatorBase>;
  windGustMph?: Maybe<OperatorBase>;
  windSpeedMph?: Maybe<OperatorBase>;
  windSpeedMphAvg?: Maybe<OperatorBase>;
}

export interface AtlasLightning {
  __typename?: 'AtlasLightning';
  currentStrikes: Scalars['Int'];
  dailyStrikes: Scalars['Int'];
  date: Scalars['DateTime'];
  timestamp: Scalars['DateTime'];
}

export interface AtlasLightningWhereArgs {
  currentStrikes?: Maybe<OperatorBase>;
  dailyStrikes?: Maybe<OperatorBase>;
  date?: Maybe<OperatorBase>;
  timestamp?: Maybe<OperatorBase>;
}

export interface AtlasStatus {
  __typename?: 'AtlasStatus';
  battery: Scalars['String'];
  rssi: Scalars['Boolean'];
  timestamp: Scalars['DateTime'];
}

export interface AtlasStatusWhereArgs {
  battery?: Maybe<OperatorBase>;
  rssi?: Maybe<OperatorBase>;
  timestamp?: Maybe<OperatorBase>;
}

export interface DailyRain {
  __typename?: 'DailyRain';
  dailyRainIn: Scalars['Float'];
  date: Scalars['DateTime'];
  device: Scalars['String'];
  source: Scalars['String'];
  timestamp?: Maybe<Scalars['DateTime']>;
}

export interface DailyRainWhereArgs {
  dailyRainIn?: Maybe<OperatorBase>;
  date?: Maybe<OperatorBase>;
  device?: Maybe<OperatorBase>;
  source?: Maybe<OperatorBase>;
  timestamp?: Maybe<OperatorBase>;
}


export interface Humidity {
  __typename?: 'Humidity';
  device: Scalars['String'];
  relative: Scalars['Int'];
  source: Scalars['String'];
  timestamp: Scalars['DateTime'];
}

export interface HumidityWhereArgs {
  device?: Maybe<OperatorBase>;
  relative?: Maybe<OperatorBase>;
  source?: Maybe<OperatorBase>;
  timestamp?: Maybe<OperatorBase>;
}

export interface IrisStatus {
  __typename?: 'IrisStatus';
  battery: Scalars['String'];
  device: Scalars['String'];
  rssi: Scalars['Boolean'];
  timestamp: Scalars['DateTime'];
}

export interface IrisStatusWhereArgs {
  battery?: Maybe<OperatorBase>;
  device?: Maybe<OperatorBase>;
  rssi?: Maybe<OperatorBase>;
  timestamp?: Maybe<OperatorBase>;
}


export interface Light {
  __typename?: 'Light';
  intensity: Scalars['Int'];
  seconds: Scalars['Int'];
  timestamp?: Maybe<Scalars['DateTime']>;
}

export interface LightWhereArgs {
  intensity?: Maybe<OperatorBase>;
  seconds?: Maybe<OperatorBase>;
  timestamp?: Maybe<OperatorBase>;
}

export interface LightningDatum {
  __typename?: 'LightningDatum';
  interference: Scalars['Boolean'];
  lastStrikeDistance?: Maybe<Scalars['Int']>;
  lastStrikeTimeStamp?: Maybe<Scalars['DateTime']>;
  source: Scalars['String'];
  strikes: Scalars['Int'];
}

export interface LightningDatumWhereArgs {
  interference?: Maybe<OperatorBase>;
  lastStrikeDistance?: Maybe<OperatorBase>;
  lastStrikeTimeStamp?: Maybe<OperatorBase>;
  source?: Maybe<OperatorBase>;
  strikes?: Maybe<OperatorBase>;
}

export interface OperatorBase {
  /** A single number, boolean, or string value */
  Equal?: Maybe<Scalars['JSON']>;
  /** Not Case Sensitive, Contains a single number, boolean, or string value */
  ILike?: Maybe<Scalars['JSON']>;
  /** An ARRAY of strings or numbers */
  In?: Maybe<Scalars['JSON']>;
  /** Pass true or false to this operator to return if column value is null or not */
  IsNull?: Maybe<Scalars['JSON']>;
  /** Comparison between two numbers or dates, if one is less than the other */
  LessThan?: Maybe<Scalars['JSON']>;
  /** Comparison between two numbers or dates, if one is less than or equal to the other */
  LessThanOrEqualTo?: Maybe<Scalars['JSON']>;
  /** Case Sensitive, Contains a single number, boolean, or string value */
  Like?: Maybe<Scalars['JSON']>;
  /** Comparison between two numbers or dates, if one is greater than the other */
  MoreThan?: Maybe<Scalars['JSON']>;
  /** Comparison between two numbers or dates, if one is greater than or equal to the other */
  MoreThanOrEqualTo?: Maybe<Scalars['JSON']>;
  /** A single number, boolean, or string value */
  Not?: Maybe<Scalars['JSON']>;
  /** Not Case Sensitive, Does not contain a single number, boolean, or string value */
  NotILike?: Maybe<Scalars['JSON']>;
}

export interface Pressure {
  __typename?: 'Pressure';
  device: Scalars['String'];
  inchesOfHg: Scalars['Float'];
  source: Scalars['String'];
  timestamp: Scalars['DateTime'];
}

export interface PressureWhereArgs {
  device?: Maybe<OperatorBase>;
  inchesOfHg?: Maybe<OperatorBase>;
  source?: Maybe<OperatorBase>;
  timestamp?: Maybe<OperatorBase>;
}

export interface Query {
  __typename?: 'Query';
  accessStatuses: Array<AccessStatus>;
  archives: Array<Archive>;
  atlasLightnings: Array<AtlasLightning>;
  atlasStatuses: Array<AtlasStatus>;
  dailyRains: Array<DailyRain>;
  humidities: Array<Humidity>;
  irisStatuses: Array<IrisStatus>;
  lightningData: Array<LightningDatum>;
  lights: Array<Light>;
  pressures: Array<Pressure>;
  rain: Array<Rain>;
  temperatures: Array<Temperature>;
  uvIndexes: Array<UvIndex>;
  windDirections: Array<WindDirection>;
  windSpeeds: Array<WindSpeed>;
}


export interface QueryAccessStatusesArgs {
  where?: Maybe<Array<AccessStatusWhereArgs>>;
}


export interface QueryArchivesArgs {
  where?: Maybe<Array<ArchiveWhereArgs>>;
}


export interface QueryAtlasLightningsArgs {
  where?: Maybe<Array<AtlasLightningWhereArgs>>;
}


export interface QueryAtlasStatusesArgs {
  where?: Maybe<Array<AtlasStatusWhereArgs>>;
}


export interface QueryDailyRainsArgs {
  where?: Maybe<Array<DailyRainWhereArgs>>;
}


export interface QueryHumiditiesArgs {
  where?: Maybe<Array<HumidityWhereArgs>>;
}


export interface QueryIrisStatusesArgs {
  where?: Maybe<Array<IrisStatusWhereArgs>>;
}


export interface QueryLightningDataArgs {
  where?: Maybe<Array<LightningDatumWhereArgs>>;
}


export interface QueryLightsArgs {
  where?: Maybe<Array<LightWhereArgs>>;
}


export interface QueryPressuresArgs {
  where?: Maybe<Array<PressureWhereArgs>>;
}


export interface QueryRainArgs {
  where?: Maybe<Array<RainWhereArgs>>;
}


export interface QueryTemperaturesArgs {
  where?: Maybe<Array<TemperatureWhereArgs>>;
}


export interface QueryUvIndexesArgs {
  where?: Maybe<Array<UvIndexWhereArgs>>;
}


export interface QueryWindDirectionsArgs {
  where?: Maybe<Array<WindDirectionWhereArgs>>;
}


export interface QueryWindSpeedsArgs {
  where?: Maybe<Array<WindSpeedWhereArgs>>;
}

export interface Rain {
  __typename?: 'Rain';
  device: Scalars['String'];
  inches: Scalars['Float'];
  source: Scalars['String'];
  timestamp: Scalars['DateTime'];
}

export interface RainWhereArgs {
  device?: Maybe<OperatorBase>;
  inches?: Maybe<OperatorBase>;
  source?: Maybe<OperatorBase>;
  timestamp?: Maybe<OperatorBase>;
}

export interface Subscription {
  __typename?: 'Subscription';
  newAccessStatusAdded: AccessStatus;
  newArchiveAdded: Archive;
  newAtlasLightningAdded: AtlasLightning;
  newAtlasStatusAdded: AtlasStatus;
  newDailyRainAdded: DailyRain;
  newHumidityAdded: Humidity;
  newIrisStatusAdded: IrisStatus;
  newLightAdded: Light;
  newLightningDatumAdded: LightningDatum;
  newPressureAdded: Pressure;
  newRainAdded: Rain;
  newTemperatureAdded: Temperature;
  newUVIndexAdded: UvIndex;
  newWindDirectionAdded: WindDirection;
  newWindSpeedAdded: WindSpeed;
}

export interface Temperature {
  __typename?: 'Temperature';
  device: Scalars['String'];
  dewPoint?: Maybe<Scalars['Float']>;
  feelsLike?: Maybe<Scalars['Float']>;
  heatIndex?: Maybe<Scalars['Float']>;
  source: Scalars['String'];
  temp: Scalars['Float'];
  timestamp: Scalars['DateTime'];
  windChill?: Maybe<Scalars['Float']>;
}

export interface TemperatureWhereArgs {
  device?: Maybe<OperatorBase>;
  dewPoint?: Maybe<OperatorBase>;
  feelsLike?: Maybe<OperatorBase>;
  heatIndex?: Maybe<OperatorBase>;
  source?: Maybe<OperatorBase>;
  temp?: Maybe<OperatorBase>;
  timestamp?: Maybe<OperatorBase>;
  windChill?: Maybe<OperatorBase>;
}

export interface UvIndex {
  __typename?: 'UVIndex';
  timestamp: Scalars['DateTime'];
  value: Scalars['Int'];
}

export interface UvIndexWhereArgs {
  timestamp?: Maybe<OperatorBase>;
  value?: Maybe<OperatorBase>;
}

export interface WindDirection {
  __typename?: 'WindDirection';
  degrees: Scalars['Int'];
  device: Scalars['String'];
  gust?: Maybe<Scalars['Int']>;
  source: Scalars['String'];
  timestamp: Scalars['DateTime'];
}

export interface WindDirectionWhereArgs {
  degrees?: Maybe<OperatorBase>;
  device?: Maybe<OperatorBase>;
  gust?: Maybe<OperatorBase>;
  source?: Maybe<OperatorBase>;
  timestamp?: Maybe<OperatorBase>;
}

export interface WindSpeed {
  __typename?: 'WindSpeed';
  average?: Maybe<Scalars['Float']>;
  device: Scalars['String'];
  gust?: Maybe<Scalars['Float']>;
  source: Scalars['String'];
  speed: Scalars['Float'];
  timestamp: Scalars['DateTime'];
}

export interface WindSpeedWhereArgs {
  average?: Maybe<OperatorBase>;
  device?: Maybe<OperatorBase>;
  gust?: Maybe<OperatorBase>;
  source?: Maybe<OperatorBase>;
  speed?: Maybe<OperatorBase>;
  timestamp?: Maybe<OperatorBase>;
}

export type ArchivesLast24HoursQueryVariables = Exact<{ [key: string]: never; }>;


export type ArchivesLast24HoursQuery = (
  { __typename?: 'Query' }
  & { archives: Array<(
    { __typename?: 'Archive' }
    & Pick<Archive, 'dewPointF' | 'feelsF' | 'tempF'>
  )> }
);

export const ArchivesLast24HoursDocument = gql`
    query archivesLast24Hours {
  archives {
    dewPointF
    feelsF
    tempF
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ArchivesLast24HoursGQL extends Apollo.Query<ArchivesLast24HoursQuery, ArchivesLast24HoursQueryVariables> {
    document = ArchivesLast24HoursDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

export const ArchivesLast24Hours = gql`
    query archivesLast24Hours {
  archives {
    dewPointF
    feelsF
    tempF
  }
}
    `;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    