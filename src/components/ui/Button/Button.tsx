import { HTMLAttributeAnchorTarget, ReactNode } from "react";
import { Url } from "url";
import classNames from "classnames";
import MountTransition from "@/components/ui/MountTransition";
import BaseButton, { BaseButtonProps } from "@/components/ui/BaseButton";
import Spinner from "@/components/ui/Spinner";
import styles from "./Button.module.scss";

interface Props extends Omit<BaseButtonProps, "disabled"> {
  className?: string;
  type?: "primary" | "secondary" | "text";
  href?: Url | string;
  target?: HTMLAttributeAnchorTarget;
  fullWidth?: boolean;
  loading?: boolean;
  children?: ReactNode;
}

export default function Button({
  className,
  type = "primary",
  href,
  fullWidth,
  loading,
  children,
  ...baseButtonProps
}: Props) {
  // TODO: ref
  // TODO: link

  if (href) {
    return 1;
  } else {
    return (
      <BaseButton
        {...baseButtonProps}
        className={classNames(styles.button, styles[type], className, {
          [styles.full]: fullWidth,
        })}
        disabled={loading}
      >
        {children}
        <MountTransition gap horizontal>
          {loading && <Spinner />}
        </MountTransition>
      </BaseButton>
    );
  }
}
