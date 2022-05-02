import React, { useMemo } from 'react';
import { MarkerType, EdgeMarker } from '../../types';

type SymbolProps = Omit<EdgeMarker, 'type'>;

const ArrowSymbol = ({ color = 'none', strokeWidth = 1 }: SymbolProps) => {
  return (
    <polyline
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      fill="none"
      points="-5,-4 0,0 -5,4"
    />
  );
};

const ArrowClosedSymbol = ({ color = 'none', strokeWidth = 1 }: SymbolProps) => {
  return (
    <polyline
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      fill={color}
      points="-5,-4 0,0 -5,4 -5,-4"
    />
  );
};

export const MarkerSymbols = {
  [MarkerType.Arrow]: ArrowSymbol,
  [MarkerType.ArrowClosed]: ArrowClosedSymbol,
};

export function useMarkerSymbol(type: MarkerType) {
  const symbol = useMemo(() => {
    const symbolExists = MarkerSymbols.hasOwnProperty(type);

    if (process.env.NODE_ENV === 'development') {
      if (!symbolExists) {
        console.warn(
          `[React Flow]: Marker type "${type}" doesn't exist. Help: https://reactflow.dev/error-decoder#900`
        );
        return () => null;
      }
    }

    return MarkerSymbols[type];
  }, [type]);
  return symbol;
}

export default MarkerSymbols;
