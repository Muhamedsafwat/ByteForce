import React from 'react';
import { twMerge } from 'tailwind-merge';

interface TypographyProps {
  className?: string;
  children: React.ReactNode;
}

const Title = ({ className, children }: TypographyProps) => {
  return (
    <h1
      className={twMerge(
        `scroll-m-20 text-3xl font-bold tracking-tight text-gray-100 lg:text-5xl`,
        className,
      )}
    >
      {children}
    </h1>
  );
};

const H1 = ({ className, children }: TypographyProps) => {
  return (
    <h1
      className={twMerge(
        `scroll-m-20 text-2xl font-bold tracking-tight text-gray-100 lg:text-[26px]`,
        className,
      )}
    >
      {children}
    </h1>
  );
};

const H2 = ({ className, children }: TypographyProps) => {
  return (
    <h2
      className={twMerge(
        `scroll-m-20 text-[22px] font-bold tracking-tight text-gray-100`,
        className,
      )}
    >
      {children}
    </h2>
  );
};
const H3 = ({ className, children }: TypographyProps) => {
  return (
    <h3
      className={twMerge(
        `scroll-m-20 text-lg font-bold tracking-tight text-gray-100`,
        className,
      )}
    >
      {children}
    </h3>
  );
};
const H4 = ({ className, children }: TypographyProps) => {
  return (
    <h4
      className={twMerge(
        `scroll-m-20 text-base font-bold tracking-tight text-gray-100`,
        className,
      )}
    >
      {children}
    </h4>
  );
};

const H5 = ({ className, children }: TypographyProps) => {
  return (
    <h4
      className={twMerge(
        `scroll-m-20 text-sm font-bold tracking-tight text-gray-100`,
        className,
      )}
    >
      {children}
    </h4>
  );
};

const P = ({ className, children }: TypographyProps) => {
  return (
    <p className={twMerge(`text-base leading-7 text-gray-400`, className)}>
      {children}
    </p>
  );
};

export { Title, H1, H2, H3, H4, H5, P };
