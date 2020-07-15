import { TurboModuleRegistry } from 'react-native';
import JSReanimated from './JSReanimated';

const InnerNativeModule =
  global.__reanimatedModuleProxy ||
  TurboModuleRegistry.getEnforcing('NativeReanimated');

export const reanimatedNativeAvailable = !InnerNativeModule;

const NativeReanimated = {
  installCoreFunctions(valueSetter) {
    return InnerNativeModule.installCoreFunctions(valueSetter);
  },

  makeShareable(value) {
    return InnerNativeModule.makeShareable(value);
  },

  makeMutable(value) {
    return InnerNativeModule.makeMutable(value);
  },

  makeRemote(object) {
    return InnerNativeModule.makeRemote(object);
  },

  startMapper(mapper, inputs = [], outputs = []) {
    return InnerNativeModule.startMapper(mapper, inputs, outputs);
  },

  stopMapper(mapperId) {
    return InnerNativeModule.stopMapper(mapperId);
  },

  registerEventHandler(eventHash, eventHandler) {
    return InnerNativeModule.registerEventHandler(eventHash, eventHandler);
  },

  unregisterEventHandler(registrationId) {
    return InnerNativeModule.unregisterEventHandler(registrationId);
  },
};

export default reanimatedNativeAvailable ? NativeReanimated : JSReanimated;
