import { ArchiveState } from './archive/archive-store.state';
import { HumidityState } from './humidity/humidity.state';
import { LightState } from './light/Light.state';
import { PressureState } from './pressure/Pressure.state';
import { RainState } from './rain/Rain.state';
import { TemperatureState } from './temperatures/temperatures.state';
import { UvIndexState } from './uv-index/uv-index.state';
import { WindDirectionState } from './wind-direction/wind-direction.state';
import { WindSpeedState } from './wind-speed/wind-speed.state';

export const stores = [
  ArchiveState,
  HumidityState,
  LightState,
  PressureState,
  RainState,
  TemperatureState,
  UvIndexState,
  WindDirectionState,
  WindSpeedState
];
