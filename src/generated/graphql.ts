import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
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
  temperaturesForLast24Hours: Array<Temperature>;
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

export type TemperaturesForLast24HoursQueryVariables = Exact<{ [key: string]: never; }>;


export type TemperaturesForLast24HoursQuery = (
  { __typename?: 'Query' }
  & { temperaturesForLast24Hours: Array<(
    { __typename?: 'Temperature' }
    & Pick<Temperature, 'device' | 'dewPoint' | 'feelsLike' | 'heatIndex' | 'source' | 'temp' | 'timestamp' | 'windChill'>
  )> }
);

export type NewTemperatureAddedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type NewTemperatureAddedSubscription = (
  { __typename?: 'Subscription' }
  & { newTemperatureAdded: (
    { __typename?: 'Temperature' }
    & Pick<Temperature, 'device' | 'dewPoint' | 'feelsLike' | 'heatIndex' | 'source' | 'temp' | 'timestamp' | 'windChill'>
  ) }
);



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AccessStatus: ResolverTypeWrapper<AccessStatus>;
  String: ResolverTypeWrapper<Scalars['String']>;
  AccessStatusWhereArgs: AccessStatusWhereArgs;
  Archive: ResolverTypeWrapper<Archive>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  ArchiveWhereArgs: ArchiveWhereArgs;
  AtlasLightning: ResolverTypeWrapper<AtlasLightning>;
  AtlasLightningWhereArgs: AtlasLightningWhereArgs;
  AtlasStatus: ResolverTypeWrapper<AtlasStatus>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  AtlasStatusWhereArgs: AtlasStatusWhereArgs;
  DailyRain: ResolverTypeWrapper<DailyRain>;
  DailyRainWhereArgs: DailyRainWhereArgs;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Humidity: ResolverTypeWrapper<Humidity>;
  HumidityWhereArgs: HumidityWhereArgs;
  IrisStatus: ResolverTypeWrapper<IrisStatus>;
  IrisStatusWhereArgs: IrisStatusWhereArgs;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  Light: ResolverTypeWrapper<Light>;
  LightWhereArgs: LightWhereArgs;
  LightningDatum: ResolverTypeWrapper<LightningDatum>;
  LightningDatumWhereArgs: LightningDatumWhereArgs;
  OperatorBase: OperatorBase;
  Pressure: ResolverTypeWrapper<Pressure>;
  PressureWhereArgs: PressureWhereArgs;
  Query: ResolverTypeWrapper<{}>;
  Rain: ResolverTypeWrapper<Rain>;
  RainWhereArgs: RainWhereArgs;
  Subscription: ResolverTypeWrapper<{}>;
  Temperature: ResolverTypeWrapper<Temperature>;
  UVIndex: ResolverTypeWrapper<UvIndex>;
  UVIndexWhereArgs: UvIndexWhereArgs;
  WindDirection: ResolverTypeWrapper<WindDirection>;
  WindDirectionWhereArgs: WindDirectionWhereArgs;
  WindSpeed: ResolverTypeWrapper<WindSpeed>;
  WindSpeedWhereArgs: WindSpeedWhereArgs;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AccessStatus: AccessStatus;
  String: Scalars['String'];
  AccessStatusWhereArgs: AccessStatusWhereArgs;
  Archive: Archive;
  Float: Scalars['Float'];
  Int: Scalars['Int'];
  ArchiveWhereArgs: ArchiveWhereArgs;
  AtlasLightning: AtlasLightning;
  AtlasLightningWhereArgs: AtlasLightningWhereArgs;
  AtlasStatus: AtlasStatus;
  Boolean: Scalars['Boolean'];
  AtlasStatusWhereArgs: AtlasStatusWhereArgs;
  DailyRain: DailyRain;
  DailyRainWhereArgs: DailyRainWhereArgs;
  DateTime: Scalars['DateTime'];
  Humidity: Humidity;
  HumidityWhereArgs: HumidityWhereArgs;
  IrisStatus: IrisStatus;
  IrisStatusWhereArgs: IrisStatusWhereArgs;
  JSON: Scalars['JSON'];
  Light: Light;
  LightWhereArgs: LightWhereArgs;
  LightningDatum: LightningDatum;
  LightningDatumWhereArgs: LightningDatumWhereArgs;
  OperatorBase: OperatorBase;
  Pressure: Pressure;
  PressureWhereArgs: PressureWhereArgs;
  Query: {};
  Rain: Rain;
  RainWhereArgs: RainWhereArgs;
  Subscription: {};
  Temperature: Temperature;
  UVIndex: UvIndex;
  UVIndexWhereArgs: UvIndexWhereArgs;
  WindDirection: WindDirection;
  WindDirectionWhereArgs: WindDirectionWhereArgs;
  WindSpeed: WindSpeed;
  WindSpeedWhereArgs: WindSpeedWhereArgs;
};

export type NgModuleDirectiveArgs = {   module: Scalars['String']; };

export type NgModuleDirectiveResolver<Result, Parent, ContextType = any, Args = NgModuleDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type NamedClientDirectiveArgs = {   name: Scalars['String']; };

export type NamedClientDirectiveResolver<Result, Parent, ContextType = any, Args = NamedClientDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AccessStatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccessStatus'] = ResolversParentTypes['AccessStatus']> = {
  battery?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArchiveResolvers<ContextType = any, ParentType extends ResolversParentTypes['Archive'] = ResolversParentTypes['Archive']> = {
  dewPointF?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  feelsF?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  light?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  lightSeconds?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  lightning?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pressureinHg?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  rainIn?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  relH?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tempF?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  totalRainIn?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  uvIndex?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  windDeg?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  windGustDeg?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  windGustMph?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  windSpeedMph?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  windSpeedMphAvg?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AtlasLightningResolvers<ContextType = any, ParentType extends ResolversParentTypes['AtlasLightning'] = ResolversParentTypes['AtlasLightning']> = {
  currentStrikes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dailyStrikes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AtlasStatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['AtlasStatus'] = ResolversParentTypes['AtlasStatus']> = {
  battery?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rssi?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DailyRainResolvers<ContextType = any, ParentType extends ResolversParentTypes['DailyRain'] = ResolversParentTypes['DailyRain']> = {
  dailyRainIn?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  device?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  source?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type HumidityResolvers<ContextType = any, ParentType extends ResolversParentTypes['Humidity'] = ResolversParentTypes['Humidity']> = {
  device?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  relative?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  source?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IrisStatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['IrisStatus'] = ResolversParentTypes['IrisStatus']> = {
  battery?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  device?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rssi?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type LightResolvers<ContextType = any, ParentType extends ResolversParentTypes['Light'] = ResolversParentTypes['Light']> = {
  intensity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  seconds?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LightningDatumResolvers<ContextType = any, ParentType extends ResolversParentTypes['LightningDatum'] = ResolversParentTypes['LightningDatum']> = {
  interference?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  lastStrikeDistance?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  lastStrikeTimeStamp?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  source?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  strikes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PressureResolvers<ContextType = any, ParentType extends ResolversParentTypes['Pressure'] = ResolversParentTypes['Pressure']> = {
  device?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  inchesOfHg?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  source?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  accessStatuses?: Resolver<Array<ResolversTypes['AccessStatus']>, ParentType, ContextType, RequireFields<QueryAccessStatusesArgs, never>>;
  archives?: Resolver<Array<ResolversTypes['Archive']>, ParentType, ContextType, RequireFields<QueryArchivesArgs, never>>;
  atlasLightnings?: Resolver<Array<ResolversTypes['AtlasLightning']>, ParentType, ContextType, RequireFields<QueryAtlasLightningsArgs, never>>;
  atlasStatuses?: Resolver<Array<ResolversTypes['AtlasStatus']>, ParentType, ContextType, RequireFields<QueryAtlasStatusesArgs, never>>;
  dailyRains?: Resolver<Array<ResolversTypes['DailyRain']>, ParentType, ContextType, RequireFields<QueryDailyRainsArgs, never>>;
  humidities?: Resolver<Array<ResolversTypes['Humidity']>, ParentType, ContextType, RequireFields<QueryHumiditiesArgs, never>>;
  irisStatuses?: Resolver<Array<ResolversTypes['IrisStatus']>, ParentType, ContextType, RequireFields<QueryIrisStatusesArgs, never>>;
  lightningData?: Resolver<Array<ResolversTypes['LightningDatum']>, ParentType, ContextType, RequireFields<QueryLightningDataArgs, never>>;
  lights?: Resolver<Array<ResolversTypes['Light']>, ParentType, ContextType, RequireFields<QueryLightsArgs, never>>;
  pressures?: Resolver<Array<ResolversTypes['Pressure']>, ParentType, ContextType, RequireFields<QueryPressuresArgs, never>>;
  rain?: Resolver<Array<ResolversTypes['Rain']>, ParentType, ContextType, RequireFields<QueryRainArgs, never>>;
  temperaturesForLast24Hours?: Resolver<Array<ResolversTypes['Temperature']>, ParentType, ContextType>;
  uvIndexes?: Resolver<Array<ResolversTypes['UVIndex']>, ParentType, ContextType, RequireFields<QueryUvIndexesArgs, never>>;
  windDirections?: Resolver<Array<ResolversTypes['WindDirection']>, ParentType, ContextType, RequireFields<QueryWindDirectionsArgs, never>>;
  windSpeeds?: Resolver<Array<ResolversTypes['WindSpeed']>, ParentType, ContextType, RequireFields<QueryWindSpeedsArgs, never>>;
};

export type RainResolvers<ContextType = any, ParentType extends ResolversParentTypes['Rain'] = ResolversParentTypes['Rain']> = {
  device?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  inches?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  source?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  newAccessStatusAdded?: SubscriptionResolver<ResolversTypes['AccessStatus'], "newAccessStatusAdded", ParentType, ContextType>;
  newArchiveAdded?: SubscriptionResolver<ResolversTypes['Archive'], "newArchiveAdded", ParentType, ContextType>;
  newAtlasLightningAdded?: SubscriptionResolver<ResolversTypes['AtlasLightning'], "newAtlasLightningAdded", ParentType, ContextType>;
  newAtlasStatusAdded?: SubscriptionResolver<ResolversTypes['AtlasStatus'], "newAtlasStatusAdded", ParentType, ContextType>;
  newDailyRainAdded?: SubscriptionResolver<ResolversTypes['DailyRain'], "newDailyRainAdded", ParentType, ContextType>;
  newHumidityAdded?: SubscriptionResolver<ResolversTypes['Humidity'], "newHumidityAdded", ParentType, ContextType>;
  newIrisStatusAdded?: SubscriptionResolver<ResolversTypes['IrisStatus'], "newIrisStatusAdded", ParentType, ContextType>;
  newLightAdded?: SubscriptionResolver<ResolversTypes['Light'], "newLightAdded", ParentType, ContextType>;
  newLightningDatumAdded?: SubscriptionResolver<ResolversTypes['LightningDatum'], "newLightningDatumAdded", ParentType, ContextType>;
  newPressureAdded?: SubscriptionResolver<ResolversTypes['Pressure'], "newPressureAdded", ParentType, ContextType>;
  newRainAdded?: SubscriptionResolver<ResolversTypes['Rain'], "newRainAdded", ParentType, ContextType>;
  newTemperatureAdded?: SubscriptionResolver<ResolversTypes['Temperature'], "newTemperatureAdded", ParentType, ContextType>;
  newUVIndexAdded?: SubscriptionResolver<ResolversTypes['UVIndex'], "newUVIndexAdded", ParentType, ContextType>;
  newWindDirectionAdded?: SubscriptionResolver<ResolversTypes['WindDirection'], "newWindDirectionAdded", ParentType, ContextType>;
  newWindSpeedAdded?: SubscriptionResolver<ResolversTypes['WindSpeed'], "newWindSpeedAdded", ParentType, ContextType>;
};

export type TemperatureResolvers<ContextType = any, ParentType extends ResolversParentTypes['Temperature'] = ResolversParentTypes['Temperature']> = {
  device?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dewPoint?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  feelsLike?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  heatIndex?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  source?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  temp?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  windChill?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UvIndexResolvers<ContextType = any, ParentType extends ResolversParentTypes['UVIndex'] = ResolversParentTypes['UVIndex']> = {
  timestamp?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WindDirectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['WindDirection'] = ResolversParentTypes['WindDirection']> = {
  degrees?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  device?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gust?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  source?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WindSpeedResolvers<ContextType = any, ParentType extends ResolversParentTypes['WindSpeed'] = ResolversParentTypes['WindSpeed']> = {
  average?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  device?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gust?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  source?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  speed?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AccessStatus?: AccessStatusResolvers<ContextType>;
  Archive?: ArchiveResolvers<ContextType>;
  AtlasLightning?: AtlasLightningResolvers<ContextType>;
  AtlasStatus?: AtlasStatusResolvers<ContextType>;
  DailyRain?: DailyRainResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Humidity?: HumidityResolvers<ContextType>;
  IrisStatus?: IrisStatusResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  Light?: LightResolvers<ContextType>;
  LightningDatum?: LightningDatumResolvers<ContextType>;
  Pressure?: PressureResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Rain?: RainResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Temperature?: TemperatureResolvers<ContextType>;
  UVIndex?: UvIndexResolvers<ContextType>;
  WindDirection?: WindDirectionResolvers<ContextType>;
  WindSpeed?: WindSpeedResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = any> = {
  NgModule?: NgModuleDirectiveResolver<any, any, ContextType>;
  namedClient?: NamedClientDirectiveResolver<any, any, ContextType>;
};


/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<ContextType = any> = DirectiveResolvers<ContextType>;
export const TemperaturesForLast24HoursDocument = gql`
    query temperaturesForLast24Hours {
  temperaturesForLast24Hours {
    device
    dewPoint
    feelsLike
    heatIndex
    source
    temp
    timestamp
    windChill
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class TemperaturesForLast24HoursGQL extends Apollo.Query<TemperaturesForLast24HoursQuery, TemperaturesForLast24HoursQueryVariables> {
    document = TemperaturesForLast24HoursDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const NewTemperatureAddedDocument = gql`
    subscription newTemperatureAdded {
  newTemperatureAdded {
    device
    dewPoint
    feelsLike
    heatIndex
    source
    temp
    timestamp
    windChill
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class NewTemperatureAddedGQL extends Apollo.Subscription<NewTemperatureAddedSubscription, NewTemperatureAddedSubscriptionVariables> {
    document = NewTemperatureAddedDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }