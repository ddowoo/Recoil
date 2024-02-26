/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 * @format
 * @oncall recoil
 */

'use strict';

const isReactNative: boolean =
  typeof navigator !== 'undefined' && navigator.product === 'ReactNative'; // eslint-disable-line fb-www/typeof-undefined

/* eslint-disable fb-www/typeof-undefined */
// React Native인 경우 isSSR을 false
const isSSR: boolean =
  // $FlowFixMe(site=recoil) Window does not have a FlowType definition https://github.com/facebook/flow/issues/6709
//   typeof Window === 'undefined' || typeof window === 'undefined';
/* eslint-enable fb-www/typeof-undefined */
(!isReactNative &&
    // $FlowFixMe(site=recoil) Window does not have a FlowType definition https://github.com/facebook/flow/issues/6709
    typeof Window === 'undefined') ||
  typeof window === 'undefined';



const isWindow = (value: mixed): boolean =>
  !isSSR &&
  // $FlowFixMe(site=recoil) Window does not have a FlowType definition https://github.com/facebook/flow/issues/6709
  (value === window || value instanceof Window);

// const isReactNative: boolean =
//   typeof navigator !== 'undefined' && navigator.product === 'ReactNative'; // eslint-disable-line fb-www/typeof-undefined

module.exports = {
  isSSR,
  isReactNative,
  isWindow,
};
