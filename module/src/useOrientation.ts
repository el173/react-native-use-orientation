import { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

export type Orientation = 'PORTRAIT' | 'LANDSCAPE';

/**
 * Checks if the screen is in portrait orientation.
 */
const isPortrait = (): boolean => {
  const dim = Dimensions.get('screen');
  return dim.height >= dim.width;
};

/**
 * React Native hook to detect and subscribe to orientation changes.
 * @returns 'PORTRAIT' or 'LANDSCAPE'
 */
export const useOrientation = (): Orientation => {
  const [orientation, setOrientation] = useState<Orientation>(
    isPortrait() ? 'PORTRAIT' : 'LANDSCAPE'
  );

  useEffect(() => {
    const callback = () => {
      setOrientation(isPortrait() ? 'PORTRAIT' : 'LANDSCAPE');
    };

    const subscription = Dimensions.addEventListener('change', callback);

    return () => {
      subscription?.remove?.();
    };
  }, []);

  return orientation;
};
