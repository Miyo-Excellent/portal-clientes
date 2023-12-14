import React, {
  Children,
  cloneElement,
  FC,
  HTMLAttributes,
  ReactNode,
} from "react";
import classNames from "classnames";
import Popovers from "@components/popovers";
// @ts-ignore
import { TColor } from "@types/color.type";
import { randomColor } from "@helpers/helpers";

interface IAvatarGroupProps {
  theme?: "dark" | "white";
  className?: string;
  children: ReactNode[];
  size?: number;
}

export const AvatarGroup: FC<IAvatarGroupProps> = ({
  className,
  children,
  size = 32,
  theme = "white",
}) => {
  return (
    <div className={classNames("avatar-group", className)}>
      <div className="avatar-container">
        {Children.map(children, (child, index) =>
          index < 3
            ? // @ts-ignore
              cloneElement(child, {
                borderColor: theme ? "dark" : "white",
                border: 2,
                // @ts-ignore
                color: child.props.color || randomColor(),
                size,
              })
            : null,
        )}
      </div>
      {children?.length > 3 && (
        <Popovers
          desc={Children.map(children, (child, index) =>
            index >= 3 ? (
              <>
                {/* @ts-ignore */}
                {child.props.userName}
                <br />
              </>
            ) : null,
          )}
          trigger="hover"
        >
          <div className="avatar-more" style={{ width: size, height: size }}>
            {/* eslint-disable-next-line no-unsafe-optional-chaining */}+
            {children?.length - 3}
          </div>
        </Popovers>
      )}
    </div>
  );
};

interface IAvatarProps extends HTMLAttributes<HTMLImageElement> {
  theme?: "dark" | "white";
  border?: null | 0 | 1 | 2 | 3 | 4 | 5;
  borderColor?:
    | null
    | TColor
    | "link"
    | "brand"
    | "brand-two"
    | "storybook"
    | "white";
  className?: string;
  color?: TColor | "link" | "brand" | "brand-two" | "storybook";
  isOnline?: boolean;
  isReply?: boolean;
  rounded?:
    | "default"
    | 0
    | 1
    | 2
    | 3
    | "bottom"
    | "top"
    | "circle"
    | "end"
    | "start"
    | "pill";
  shadow?: "none" | "sm" | "default" | "lg" | null;
  size?: number;
  src: string;
  userName?: string | null;
}

const Avatar: FC<IAvatarProps> = ({
  theme = "white",
  src,
  className,
  size = 128,
  rounded = "circle",
  color = "primary",
  shadow = null,
  border = null,
  borderColor = null,
  userName = null,
  isOnline = false,
  isReply = false,
}) => {
  const INNER = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={classNames(
        "avatar",
        {
          [`rounded${rounded !== "default" ? `-${rounded}` : ""}`]: rounded,
          "rounded-0": rounded === 0,
          [`shadow${shadow !== "default" ? `-${shadow}` : ""}`]: !!shadow,
          border: !!border,
          [`border-${border}`]: !!border,
          [`border-${borderColor}`]: borderColor,
        },
        `bg-l${theme ? "o" : ""}25-${color}`,
        className,
      )}
      src={src}
      alt="Avatar"
      width={size}
      height={size}
    />
  );

  if (userName) {
    return (
      <Popovers desc={userName} trigger="hover">
        {INNER}
      </Popovers>
    );
  }
  return INNER;
};

export default Avatar;
