import { isMacOs } from 'react-device-detect';

type Size = 'sm' | 'lg';

export default function adjustMacOsFonts(size: Size): string {
  const transformAmount = size === 'lg' ? '-translate-y-[14%]' : '-translate-y-[10%]';

  if (isMacOs) {
    return transformAmount;
  }

  return '';
}
