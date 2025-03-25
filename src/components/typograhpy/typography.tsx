import clsx from "clsx";
import type {
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
} from "react";

type PolymorphicAsProp<E extends ElementType> = {
  as?: E;
};

type PolymorphicProps<E extends ElementType> = PropsWithChildren<
  ComponentPropsWithoutRef<E> & PolymorphicAsProp<E>
>;

const defaultElement = "p";

type TextProps<E extends ElementType = typeof defaultElement> =
  PolymorphicProps<E>;

export function Typography<E extends ElementType = typeof defaultElement>({
  as,
  children,
  className,
  color = "primary",
  ...restProps
}: TextProps<E>) {
  const Component = as ?? defaultElement;

  return (
    <Component
      className={clsx("text-dark-bg tracking-tight", className)}
      {...restProps}
    >
      {children}
    </Component>
  );
}
