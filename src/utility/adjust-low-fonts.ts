import { isMacOs, isMobile } from 'react-device-detect';

type Size = 'sm' | 'lg';

export default function adjustLowFonts(size: Size): string {
  const transformAmount = size === 'lg' ? '-translate-y-[14%]' : '-translate-y-[10%]';

  if (isMacOs || isMobile) {
    return transformAmount;
  }

  return '';
}
