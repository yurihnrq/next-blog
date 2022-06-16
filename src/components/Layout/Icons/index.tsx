import React from 'react';

interface IconProps {
  width?: number;
  height?: number;
  strokeColor?: string;
}

export const MoonIcon: React.FC<IconProps> = ({
  height,
  width,
  strokeColor
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke={strokeColor ? strokeColor : '#FFFFFF'}
      width={width ? width : '100%'}
      height={height ? height : '100%'}>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
      />
    </svg>
  );
};

export const SunIcon: React.FC<IconProps> = ({
  height,
  width,
  strokeColor
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke={strokeColor ? strokeColor : '#FFFFFF'}
      width={width ? width : '100%'}
      height={height ? height : '100%'}>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
      />
    </svg>
  );
};

export const MenuIcon: React.FC<IconProps> = ({
  height,
  width,
  strokeColor
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke={strokeColor ? strokeColor : '#FFFFFF'}
      width={width ? width : '100%'}
      height={height ? height : '100%'}>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M4 6h16M4 12h16m-7 6h7'
      />
    </svg>
  );
};

export const CloseIcon: React.FC<IconProps> = ({
  height,
  width,
  strokeColor
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke={strokeColor ? strokeColor : '#FFFFFF'}
      width={width ? width : '100%'}
      height={height ? height : '100%'}>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M6 18L18 6M6 6l12 12'
      />
    </svg>
  );
};

export const LogoIcon: React.FC<IconProps> = ({
  height,
  width,
  strokeColor
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke={strokeColor ? strokeColor : '#FFFFFF'}
      width={width ? width : '100%'}
      height={height ? height : '100%'}>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
      />
    </svg>
  );
};
