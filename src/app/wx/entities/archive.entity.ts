import { ArchiveBaseEntity } from './archiveBase.entity';

export class ArchiveEntity extends ArchiveBaseEntity {
  soilTemperature1: number | null;
  soilTemperature1Units: string | null;

  soilTemperature2: number | null;
  soilTemperature2Units: string | null;

  soilTemperature3: number | null;
  soilTemperature3Units: string | null;

  soilTemperature4: number | null;
  soilTemperature4Units: string | null;

  leafTemperature1: number | null;
  leafTemperature1Units: string | null;

  leafTemperature2: number | null;
  leafTemperature2Units: string | null;

  soilMoisture1: number | null;
  soilMoisture1Units: string | null;

  soilMoisture2: number | null;
  soilMoisture2Units: string | null;

  soilMoisture3: number | null;
  soilMoisture3Units: string | null;

  soilMoisture4: number | null;
  soilMoisture4Units: string | null;

  leafWetness1: number | null;
  leafWetness1Units: string | null;

  leafWetness2: number | null;
  leafWetness2Units: string | null;

  outsideHumidity: number | null;
  outsideHumidityUnit: string | null;

  evapotranspiration: number | null;
  evapotranspirationUnit: string | null;

  extraHumid1: number | null;
  extraHumid1Unit: string | null;

  extraHumid2: number | null;
  extraHumid2Unit: string | null;

  insideTemperature: number | null;
  insideTemperatureUnits: string | null;

  insideHumidity: number | null;
  insideHumidityUnits: string | null;

  rain: number | null;
  rainUnits: string | null;

  rainAccumulation: number | null;

  rainRate: number | null;
  rainRateUnits: string | null;

  hail: number | null;
  hailUnits: string | null;

  hailRate: number | null;
  hailRateUnits: string | null;

  barometer: number | null;
  barometerUnit: string | null;

  pressure: number | null;
  pressureUnit: string | null;

  altimeter: number | null;
  altimeterUnit: string | null;

  signalQuality: number | null;
  signalQualityUnits: string | null;

  transmitterBattery: number | null;
  transmitterBatteryUnits: string | null;

  consoleBatteryVoltage: number | null;
  consoleBatteryVoltageUnits: string | null;

  heatingTemp: number | null;
  heatingTemperatureUnits: string | null;

  heatingVoltage: number | null;
  heatingVoltageUnits: string | null;

  supplyVoltage: number | null;
  supplyVoltageUnits: string | null;

  referenceVoltage: number | null;
  referenceVoltageUnits: string | null;

  windSensorBattery: number | null;
  windSensorBatteryUnits: string | null;

  rainSensorBattery: number | null;
  rainSensorBatteryUnits: string | null;

  outsideTemperatureBattery: number | null;
  outsideTemperatureBatteryUnits: string | null;

  insideTemperatureBattery: number | null;
  insideTemperatureBatteryUnits: string | null;

  radiation: number | null;
  radiationUnits: string | null;

  uv: number | null;
  uvUnits: string | null;

  outsideTemperature: number | null;
  outsideTemperatureUnits: string | null;

  dewPoint: number | null;
  dewPointUnits: string | null;

  windChill: number | null;
  windChillUnits: string | null;

  heatIndex: number | null;
  heatIndexUnits: string | null;

  extraTemperature1: number | null;
  extraTemperature1Units: string | null;

  extraTemperature2: number | null;
  extraTemperature2Units: string | null;

  extraTemperature3: number | null;
  extraTemperature3Units: string | null;

  windSpeed: number | null;
  windSpeedUnits: string | null;

  windDirection: number | null;
  windDirectionUnits: string | null;

  windGustSpeed: number | null;
  windGustSpeedUnits: string | null;

  windGustDirection: number | null;
  windGustDirectionUnits: string | null;
}
