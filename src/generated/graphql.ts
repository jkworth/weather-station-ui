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
export abstract class Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};



export abstract class AccessStatus {
  __typename?: 'AccessStatus';
  battery: Scalars['String'];
  timestamp: Scalars['DateTime'];
};

export abstract class AccessStatusWhereArgs {
  battery?: Maybe<OperatorBase>;
  timestamp?: Maybe<OperatorBase>;
};

export abstract class Archive {
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
};

export abstract class AtlasLightning {
  __typename?: 'AtlasLightning';
  currentStrikes: Scalars['Int'];
  dailyStrikes: Scalars['Int'];
  date: Scalars['DateTime'];
  timestamp: Scalars['DateTime'];
};

export abstract class AtlasLightningWhereArgs {
  currentStrikes?: Maybe<OperatorBase>;
  dailyStrikes?: Maybe<OperatorBase>;
  date?: Maybe<OperatorBase>;
  timestamp?: Maybe<OperatorBase>;
};

export abstract class AtlasStatus {
  __typename?: 'AtlasStatus';
  battery: Scalars['String'];
  rssi: Scalars['Boolean'];
  timestamp: Scalars['DateTime'];
};

export abstract class AtlasStatusWhereArgs {
  battery?: Maybe<OperatorBase>;
  rssi?: Maybe<OperatorBase>;
  timestamp?: Maybe<OperatorBase>;
};

export abstract class DailyRain {
  __typename?: 'DailyRain';
  dailyRainIn: Scalars['Float'];
  date: Scalars['DateTime'];
  device: Scalars['String'];
  source: Scalars['String'];
  timestamp?: Maybe<Scalars['DateTime']>;
};

export abstract class DailyRainWhereArgs {
  dailyRainIn?: Maybe<OperatorBase>;
  date?: Maybe<OperatorBase>;
  device?: Maybe<OperatorBase>;
  source?: Maybe<OperatorBase>;
  timestamp?: Maybe<OperatorBase>;
};


export abstract class Humidity {
  __typename?: 'Humidity';
  device: Scalars['String'];
  relative: Scalars['Int'];
  source: Scalars['String'];
  timestamp: Scalars['DateTime'];
};

export abstract class IrisStatus {
  __typename?: 'IrisStatus';
  battery: Scalars['String'];
  device: Scalars['String'];
  rssi: Scalars['Boolean'];
  timestamp: Scalars['DateTime'];
};

export abstract class IrisStatusWhereArgs {
  battery?: Maybe<OperatorBase>;
  device?: Maybe<OperatorBase>;
  rssi?: Maybe<OperatorBase>;
  timestamp?: Maybe<OperatorBase>;
};


export abstract class Light {
  __typename?: 'Light';
  intensity: Scalars['Int'];
  seconds: Scalars['Int'];
  timestamp?: Maybe<Scalars['DateTime']>;
};

export abstract class LightningDatum {
  __typename?: 'LightningDatum';
  interference: Scalars['Boolean'];
  lastStrikeDistance?: Maybe<Scalars['Int']>;
  lastStrikeTimeStamp?: Maybe<Scalars['DateTime']>;
  source: Scalars['String'];
  strikes: Scalars['Int'];
};

export abstract class LightningDatumWhereArgs {
  interference?: Maybe<OperatorBase>;
  lastStrikeDistance?: Maybe<OperatorBase>;
  lastStrikeTimeStamp?: Maybe<OperatorBase>;
  source?: Maybe<OperatorBase>;
  strikes?: Maybe<OperatorBase>;
};

export abstract class OperatorBase {
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
};

export abstract class Pressure {
  __typename?: 'Pressure';
  device: Scalars['String'];
  inchesOfHg: Scalars['Float'];
  source: Scalars['String'];
  timestamp: Scalars['DateTime'];
};

export abstract class Query {
  __typename?: 'Query';
  accessStatuses: Array<AccessStatus>;
  archiveForLast24Hours: Array<Archive>;
  atlasLightnings: Array<AtlasLightning>;
  atlasStatuses: Array<AtlasStatus>;
  dailyRains: Array<DailyRain>;
  humidityForLast24Hours: Array<Humidity>;
  irisStatuses: Array<IrisStatus>;
  lightForLast24Hours: Array<Light>;
  lightningData: Array<LightningDatum>;
  pressureForLast24Hours: Array<Pressure>;
  rainForLast24Hours: Array<Rain>;
  temperatureForLast24Hours: Array<Temperature>;
  uvIndexForLast24Hours: Array<UvIndex>;
  windDirectionForLast24Hours: Array<WindDirection>;
  windSpeedForLast24Hours: Array<WindSpeed>;
};


export abstract class QueryAccessStatusesArgs {
  where?: Maybe<Array<AccessStatusWhereArgs>>;
};


export abstract class QueryAtlasLightningsArgs {
  where?: Maybe<Array<AtlasLightningWhereArgs>>;
};


export abstract class QueryAtlasStatusesArgs {
  where?: Maybe<Array<AtlasStatusWhereArgs>>;
};


export abstract class QueryDailyRainsArgs {
  where?: Maybe<Array<DailyRainWhereArgs>>;
};


export abstract class QueryIrisStatusesArgs {
  where?: Maybe<Array<IrisStatusWhereArgs>>;
};


export abstract class QueryLightningDataArgs {
  where?: Maybe<Array<LightningDatumWhereArgs>>;
};

export abstract class Rain {
  __typename?: 'Rain';
  device: Scalars['String'];
  inches: Scalars['Float'];
  source: Scalars['String'];
  timestamp: Scalars['DateTime'];
};

export abstract class Subscription {
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
  newUvIndexAdded: UvIndex;
  newWindDirectionAdded: WindDirection;
  newWindSpeedAdded: WindSpeed;
};

export abstract class Temperature {
  __typename?: 'Temperature';
  device: Scalars['String'];
  dewPoint?: Maybe<Scalars['Float']>;
  feelsLike?: Maybe<Scalars['Float']>;
  heatIndex?: Maybe<Scalars['Float']>;
  source: Scalars['String'];
  temp: Scalars['Float'];
  timestamp: Scalars['DateTime'];
  windChill?: Maybe<Scalars['Float']>;
};

export abstract class UvIndex {
  __typename?: 'UvIndex';
  timestamp: Scalars['DateTime'];
  value: Scalars['Int'];
};

export abstract class WindDirection {
  __typename?: 'WindDirection';
  degrees: Scalars['Int'];
  device: Scalars['String'];
  gust?: Maybe<Scalars['Int']>;
  source: Scalars['String'];
  timestamp: Scalars['DateTime'];
};

export abstract class WindSpeed {
  __typename?: 'WindSpeed';
  average?: Maybe<Scalars['Float']>;
  device: Scalars['String'];
  gust?: Maybe<Scalars['Float']>;
  source: Scalars['String'];
  speed: Scalars['Float'];
  timestamp: Scalars['DateTime'];
};

export type ArchiveForLast24HoursQueryVariables = Exact<{ [key: string]: never; }>;


export type ArchiveForLast24HoursQuery = (
  { __typename?: 'Query' }
  & { archiveForLast24Hours: Array<(
    { __typename?: 'Archive' }
    & Pick<Archive, 'dewPointF' | 'pressureinHg' | 'rainIn' | 'tempF' | 'timestamp'>
  )> }
);

export type NewArchiveAddedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type NewArchiveAddedSubscription = (
  { __typename?: 'Subscription' }
  & { newArchiveAdded: (
    { __typename?: 'Archive' }
    & Pick<Archive, 'dewPointF' | 'pressureinHg' | 'rainIn' | 'tempF' | 'timestamp'>
  ) }
);

export type HumidityForLast24HoursQueryVariables = Exact<{ [key: string]: never; }>;


export type HumidityForLast24HoursQuery = (
  { __typename?: 'Query' }
  & { humidityForLast24Hours: Array<(
    { __typename?: 'Humidity' }
    & Pick<Humidity, 'relative' | 'timestamp'>
  )> }
);

export type NewHumidityAddedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type NewHumidityAddedSubscription = (
  { __typename?: 'Subscription' }
  & { newHumidityAdded: (
    { __typename?: 'Humidity' }
    & Pick<Humidity, 'relative' | 'timestamp'>
  ) }
);

export type LightForLast24HoursQueryVariables = Exact<{ [key: string]: never; }>;


export type LightForLast24HoursQuery = (
  { __typename?: 'Query' }
  & { lightForLast24Hours: Array<(
    { __typename?: 'Light' }
    & Pick<Light, 'intensity' | 'seconds' | 'timestamp'>
  )> }
);

export type NewLightAddedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type NewLightAddedSubscription = (
  { __typename?: 'Subscription' }
  & { newLightAdded: (
    { __typename?: 'Light' }
    & Pick<Light, 'intensity' | 'seconds' | 'timestamp'>
  ) }
);

export type PressureForLast24HoursQueryVariables = Exact<{ [key: string]: never; }>;


export type PressureForLast24HoursQuery = (
  { __typename?: 'Query' }
  & { pressureForLast24Hours: Array<(
    { __typename?: 'Pressure' }
    & Pick<Pressure, 'inchesOfHg' | 'timestamp'>
  )> }
);

export type NewPressureAddedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type NewPressureAddedSubscription = (
  { __typename?: 'Subscription' }
  & { newPressureAdded: (
    { __typename?: 'Pressure' }
    & Pick<Pressure, 'inchesOfHg' | 'timestamp'>
  ) }
);

export type RainForLast24HoursQueryVariables = Exact<{ [key: string]: never; }>;


export type RainForLast24HoursQuery = (
  { __typename?: 'Query' }
  & { rainForLast24Hours: Array<(
    { __typename?: 'Rain' }
    & Pick<Rain, 'inches' | 'timestamp'>
  )> }
);

export type NewRainAddedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type NewRainAddedSubscription = (
  { __typename?: 'Subscription' }
  & { newRainAdded: (
    { __typename?: 'Rain' }
    & Pick<Rain, 'inches' | 'timestamp'>
  ) }
);

export type TemperatureForLast24HoursQueryVariables = Exact<{ [key: string]: never; }>;


export type TemperatureForLast24HoursQuery = (
  { __typename?: 'Query' }
  & { temperatureForLast24Hours: Array<(
    { __typename?: 'Temperature' }
    & Pick<Temperature, 'dewPoint' | 'feelsLike' | 'heatIndex' | 'temp' | 'timestamp' | 'windChill'>
  )> }
);

export type NewTemperatureAddedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type NewTemperatureAddedSubscription = (
  { __typename?: 'Subscription' }
  & { newTemperatureAdded: (
    { __typename?: 'Temperature' }
    & Pick<Temperature, 'dewPoint' | 'feelsLike' | 'heatIndex' | 'temp' | 'timestamp' | 'windChill'>
  ) }
);

export type UvIndexForLast24HoursQueryVariables = Exact<{ [key: string]: never; }>;


export type UvIndexForLast24HoursQuery = (
  { __typename?: 'Query' }
  & { uvIndexForLast24Hours: Array<(
    { __typename?: 'UvIndex' }
    & Pick<UvIndex, 'value' | 'timestamp'>
  )> }
);

export type NewUvIndexAddedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type NewUvIndexAddedSubscription = (
  { __typename?: 'Subscription' }
  & { newUvIndexAdded: (
    { __typename?: 'UvIndex' }
    & Pick<UvIndex, 'value' | 'timestamp'>
  ) }
);

export type WindDirectionForLast24HoursQueryVariables = Exact<{ [key: string]: never; }>;


export type WindDirectionForLast24HoursQuery = (
  { __typename?: 'Query' }
  & { windDirectionForLast24Hours: Array<(
    { __typename?: 'WindDirection' }
    & Pick<WindDirection, 'degrees' | 'gust' | 'timestamp'>
  )> }
);

export type NewWindDirectionAddedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type NewWindDirectionAddedSubscription = (
  { __typename?: 'Subscription' }
  & { newWindDirectionAdded: (
    { __typename?: 'WindDirection' }
    & Pick<WindDirection, 'degrees' | 'gust' | 'timestamp'>
  ) }
);

export type WindSpeedForLast24HoursQueryVariables = Exact<{ [key: string]: never; }>;


export type WindSpeedForLast24HoursQuery = (
  { __typename?: 'Query' }
  & { windSpeedForLast24Hours: Array<(
    { __typename?: 'WindSpeed' }
    & Pick<WindSpeed, 'speed' | 'gust' | 'average' | 'timestamp'>
  )> }
);

export type NewWindSpeedAddedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type NewWindSpeedAddedSubscription = (
  { __typename?: 'Subscription' }
  & { newWindSpeedAdded: (
    { __typename?: 'WindSpeed' }
    & Pick<WindSpeed, 'speed' | 'gust' | 'average' | 'timestamp'>
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
  AtlasLightning: ResolverTypeWrapper<AtlasLightning>;
  AtlasLightningWhereArgs: AtlasLightningWhereArgs;
  AtlasStatus: ResolverTypeWrapper<AtlasStatus>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  AtlasStatusWhereArgs: AtlasStatusWhereArgs;
  DailyRain: ResolverTypeWrapper<DailyRain>;
  DailyRainWhereArgs: DailyRainWhereArgs;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Humidity: ResolverTypeWrapper<Humidity>;
  IrisStatus: ResolverTypeWrapper<IrisStatus>;
  IrisStatusWhereArgs: IrisStatusWhereArgs;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  Light: ResolverTypeWrapper<Light>;
  LightningDatum: ResolverTypeWrapper<LightningDatum>;
  LightningDatumWhereArgs: LightningDatumWhereArgs;
  OperatorBase: OperatorBase;
  Pressure: ResolverTypeWrapper<Pressure>;
  Query: ResolverTypeWrapper<{}>;
  Rain: ResolverTypeWrapper<Rain>;
  Subscription: ResolverTypeWrapper<{}>;
  Temperature: ResolverTypeWrapper<Temperature>;
  UvIndex: ResolverTypeWrapper<UvIndex>;
  WindDirection: ResolverTypeWrapper<WindDirection>;
  WindSpeed: ResolverTypeWrapper<WindSpeed>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AccessStatus: AccessStatus;
  String: Scalars['String'];
  AccessStatusWhereArgs: AccessStatusWhereArgs;
  Archive: Archive;
  Float: Scalars['Float'];
  Int: Scalars['Int'];
  AtlasLightning: AtlasLightning;
  AtlasLightningWhereArgs: AtlasLightningWhereArgs;
  AtlasStatus: AtlasStatus;
  Boolean: Scalars['Boolean'];
  AtlasStatusWhereArgs: AtlasStatusWhereArgs;
  DailyRain: DailyRain;
  DailyRainWhereArgs: DailyRainWhereArgs;
  DateTime: Scalars['DateTime'];
  Humidity: Humidity;
  IrisStatus: IrisStatus;
  IrisStatusWhereArgs: IrisStatusWhereArgs;
  JSON: Scalars['JSON'];
  Light: Light;
  LightningDatum: LightningDatum;
  LightningDatumWhereArgs: LightningDatumWhereArgs;
  OperatorBase: OperatorBase;
  Pressure: Pressure;
  Query: {};
  Rain: Rain;
  Subscription: {};
  Temperature: Temperature;
  UvIndex: UvIndex;
  WindDirection: WindDirection;
  WindSpeed: WindSpeed;
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
  archiveForLast24Hours?: Resolver<Array<ResolversTypes['Archive']>, ParentType, ContextType>;
  atlasLightnings?: Resolver<Array<ResolversTypes['AtlasLightning']>, ParentType, ContextType, RequireFields<QueryAtlasLightningsArgs, never>>;
  atlasStatuses?: Resolver<Array<ResolversTypes['AtlasStatus']>, ParentType, ContextType, RequireFields<QueryAtlasStatusesArgs, never>>;
  dailyRains?: Resolver<Array<ResolversTypes['DailyRain']>, ParentType, ContextType, RequireFields<QueryDailyRainsArgs, never>>;
  humidityForLast24Hours?: Resolver<Array<ResolversTypes['Humidity']>, ParentType, ContextType>;
  irisStatuses?: Resolver<Array<ResolversTypes['IrisStatus']>, ParentType, ContextType, RequireFields<QueryIrisStatusesArgs, never>>;
  lightForLast24Hours?: Resolver<Array<ResolversTypes['Light']>, ParentType, ContextType>;
  lightningData?: Resolver<Array<ResolversTypes['LightningDatum']>, ParentType, ContextType, RequireFields<QueryLightningDataArgs, never>>;
  pressureForLast24Hours?: Resolver<Array<ResolversTypes['Pressure']>, ParentType, ContextType>;
  rainForLast24Hours?: Resolver<Array<ResolversTypes['Rain']>, ParentType, ContextType>;
  temperatureForLast24Hours?: Resolver<Array<ResolversTypes['Temperature']>, ParentType, ContextType>;
  uvIndexForLast24Hours?: Resolver<Array<ResolversTypes['UvIndex']>, ParentType, ContextType>;
  windDirectionForLast24Hours?: Resolver<Array<ResolversTypes['WindDirection']>, ParentType, ContextType>;
  windSpeedForLast24Hours?: Resolver<Array<ResolversTypes['WindSpeed']>, ParentType, ContextType>;
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
  newUvIndexAdded?: SubscriptionResolver<ResolversTypes['UvIndex'], "newUvIndexAdded", ParentType, ContextType>;
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

export type UvIndexResolvers<ContextType = any, ParentType extends ResolversParentTypes['UvIndex'] = ResolversParentTypes['UvIndex']> = {
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
  UvIndex?: UvIndexResolvers<ContextType>;
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
export const ArchiveForLast24HoursDocument = gql`
    query archiveForLast24Hours {
  archiveForLast24Hours {
    dewPointF
    pressureinHg
    rainIn
    tempF
    timestamp
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ArchiveForLast24HoursGQL extends Apollo.Query<ArchiveForLast24HoursQuery, ArchiveForLast24HoursQueryVariables> {
    document = ArchiveForLast24HoursDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const NewArchiveAddedDocument = gql`
    subscription newArchiveAdded {
  newArchiveAdded {
    dewPointF
    pressureinHg
    rainIn
    tempF
    timestamp
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class NewArchiveAddedGQL extends Apollo.Subscription<NewArchiveAddedSubscription, NewArchiveAddedSubscriptionVariables> {
    document = NewArchiveAddedDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const HumidityForLast24HoursDocument = gql`
    query humidityForLast24Hours {
  humidityForLast24Hours {
    relative
    timestamp
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class HumidityForLast24HoursGQL extends Apollo.Query<HumidityForLast24HoursQuery, HumidityForLast24HoursQueryVariables> {
    document = HumidityForLast24HoursDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const NewHumidityAddedDocument = gql`
    subscription newHumidityAdded {
  newHumidityAdded {
    relative
    timestamp
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class NewHumidityAddedGQL extends Apollo.Subscription<NewHumidityAddedSubscription, NewHumidityAddedSubscriptionVariables> {
    document = NewHumidityAddedDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LightForLast24HoursDocument = gql`
    query lightForLast24Hours {
  lightForLast24Hours {
    intensity
    seconds
    timestamp
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LightForLast24HoursGQL extends Apollo.Query<LightForLast24HoursQuery, LightForLast24HoursQueryVariables> {
    document = LightForLast24HoursDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const NewLightAddedDocument = gql`
    subscription newLightAdded {
  newLightAdded {
    intensity
    seconds
    timestamp
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class NewLightAddedGQL extends Apollo.Subscription<NewLightAddedSubscription, NewLightAddedSubscriptionVariables> {
    document = NewLightAddedDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PressureForLast24HoursDocument = gql`
    query pressureForLast24Hours {
  pressureForLast24Hours {
    inchesOfHg
    timestamp
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PressureForLast24HoursGQL extends Apollo.Query<PressureForLast24HoursQuery, PressureForLast24HoursQueryVariables> {
    document = PressureForLast24HoursDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const NewPressureAddedDocument = gql`
    subscription newPressureAdded {
  newPressureAdded {
    inchesOfHg
    timestamp
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class NewPressureAddedGQL extends Apollo.Subscription<NewPressureAddedSubscription, NewPressureAddedSubscriptionVariables> {
    document = NewPressureAddedDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RainForLast24HoursDocument = gql`
    query rainForLast24Hours {
  rainForLast24Hours {
    inches
    timestamp
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RainForLast24HoursGQL extends Apollo.Query<RainForLast24HoursQuery, RainForLast24HoursQueryVariables> {
    document = RainForLast24HoursDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const NewRainAddedDocument = gql`
    subscription newRainAdded {
  newRainAdded {
    inches
    timestamp
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class NewRainAddedGQL extends Apollo.Subscription<NewRainAddedSubscription, NewRainAddedSubscriptionVariables> {
    document = NewRainAddedDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const TemperatureForLast24HoursDocument = gql`
    query temperatureForLast24Hours {
  temperatureForLast24Hours {
    dewPoint
    feelsLike
    heatIndex
    temp
    timestamp
    windChill
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class TemperatureForLast24HoursGQL extends Apollo.Query<TemperatureForLast24HoursQuery, TemperatureForLast24HoursQueryVariables> {
    document = TemperatureForLast24HoursDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const NewTemperatureAddedDocument = gql`
    subscription newTemperatureAdded {
  newTemperatureAdded {
    dewPoint
    feelsLike
    heatIndex
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
export const UvIndexForLast24HoursDocument = gql`
    query uvIndexForLast24Hours {
  uvIndexForLast24Hours {
    value
    timestamp
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UvIndexForLast24HoursGQL extends Apollo.Query<UvIndexForLast24HoursQuery, UvIndexForLast24HoursQueryVariables> {
    document = UvIndexForLast24HoursDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const NewUvIndexAddedDocument = gql`
    subscription newUvIndexAdded {
  newUvIndexAdded {
    value
    timestamp
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class NewUvIndexAddedGQL extends Apollo.Subscription<NewUvIndexAddedSubscription, NewUvIndexAddedSubscriptionVariables> {
    document = NewUvIndexAddedDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const WindDirectionForLast24HoursDocument = gql`
    query windDirectionForLast24Hours {
  windDirectionForLast24Hours {
    degrees
    gust
    timestamp
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class WindDirectionForLast24HoursGQL extends Apollo.Query<WindDirectionForLast24HoursQuery, WindDirectionForLast24HoursQueryVariables> {
    document = WindDirectionForLast24HoursDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const NewWindDirectionAddedDocument = gql`
    subscription newWindDirectionAdded {
  newWindDirectionAdded {
    degrees
    gust
    timestamp
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class NewWindDirectionAddedGQL extends Apollo.Subscription<NewWindDirectionAddedSubscription, NewWindDirectionAddedSubscriptionVariables> {
    document = NewWindDirectionAddedDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const WindSpeedForLast24HoursDocument = gql`
    query windSpeedForLast24Hours {
  windSpeedForLast24Hours {
    speed
    gust
    average
    timestamp
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class WindSpeedForLast24HoursGQL extends Apollo.Query<WindSpeedForLast24HoursQuery, WindSpeedForLast24HoursQueryVariables> {
    document = WindSpeedForLast24HoursDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const NewWindSpeedAddedDocument = gql`
    subscription newWindSpeedAdded {
  newWindSpeedAdded {
    speed
    gust
    average
    timestamp
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class NewWindSpeedAddedGQL extends Apollo.Subscription<NewWindSpeedAddedSubscription, NewWindSpeedAddedSubscriptionVariables> {
    document = NewWindSpeedAddedDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }