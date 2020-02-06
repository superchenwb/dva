import { Hooks } from 'dva-core';
export interface DvaLoadingState {
  global: boolean;
  models: { [type: string]: boolean | undefined };
  effects: { [type: string]: boolean | undefined };
}

export default function createLoading(): Hooks;
