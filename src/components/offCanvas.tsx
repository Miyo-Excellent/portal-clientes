"use client";
import React, {
  FC,
  forwardRef,
  HTMLAttributes,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
} from "react";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import useEventListener from "@hooks/useEventListener";
import useDeviceScreen from "@hooks/useDeviceScreen";
import TagWrapper from "@components/tagWrapper";
// @ts-ignore
import { type TOffCanvasPlacement } from "@types/offCanvas.type";

interface IOffCanvasTitleProps extends HTMLAttributes<HTMLElement> {
  id: string;
  children: ReactNode;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div" | "span";
}

export const OffCanvasTitle = forwardRef<
  HTMLHeadingElement,
  IOffCanvasTitleProps
>(({ tag = "h5", id, children, className, ...props }, ref) => {
  return (
    <TagWrapper
      tag={tag}
      ref={ref}
      id={id}
      className={classNames("offcanvas-title", className)}
      {...props}
    >
      {children}
    </TagWrapper>
  );
});
OffCanvasTitle.displayName = "OffCanvasTitle";

interface IOffCanvasHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement<IOffCanvasTitleProps> | ReactNode;
  className?: string;

  setOpen?(...args: unknown[]): unknown | undefined;
}

export const OffCanvasHeader = forwardRef<
  HTMLDivElement,
  IOffCanvasHeaderProps
>(({ children, className, setOpen, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={classNames("offcanvas-header", className)}
      {...props}
    >
      {children}
      {setOpen && (
        <button
          type="button"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          onClick={() => setOpen(false)}
        />
      )}
    </div>
  );
});
OffCanvasHeader.displayName = "OffCanvasHeader";

interface IOffCanvasBodyProps extends HTMLAttributes<HTMLElement> {
  tag?: "div" | "span" | "section" | "form";
  children: ReactNode;
  className?: string;

  onSubmit?(...args: unknown[]): unknown;
}

export const OffCanvasBody = forwardRef<HTMLDivElement, IOffCanvasBodyProps>(
  ({ tag = "div", children, className, ...props }, ref) => {
    return (
      <TagWrapper
        tag={tag}
        ref={ref}
        className={classNames("offcanvas-body", className)}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      >
        {children}
      </TagWrapper>
    );
  },
);
OffCanvasBody.displayName = "OffCanvasBody";

interface IOffCanvasProps extends HTMLAttributes<HTMLElement> {
  id?: string;
  children:
    | ReactElement<IOffCanvasHeaderProps>
    | ReactElement<IOffCanvasHeaderProps>[]
    | ReactElement<IOffCanvasBodyProps>
    | ReactElement<IOffCanvasBodyProps>[]
    | ReactNode
    | ReactNode[];
  placement?: TOffCanvasPlacement;
  titleId?: string | null;
  isOpen: boolean;

  setOpen(...args: unknown[]): unknown;

  isBodyScroll?: boolean;
  isBackdrop?: boolean;
  isModalStyle?: boolean;
  isRightPanel?: boolean;
  tag?: "div" | "section" | "form";

  onSubmit?(...args: unknown[]): unknown;

  noValidate?: true;
}

const OffCanvas: FC<IOffCanvasProps> = ({
  id,
  children,
  isOpen,
  setOpen,
  tag: Tag,
  placement = "end",
  titleId = null,
  isBodyScroll = false,
  isBackdrop = true,
  isModalStyle = false,
  isRightPanel = false,
  tag = "div",
  ...props
}) => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  const [windowWidth, windowHeight] = windowSize.current;

  const initialProps = {
    isBackdrop: isRightPanel ? false : isBackdrop,
    isBodyScroll: isRightPanel ? true : isBodyScroll,
    placement: isRightPanel ? "end" : placement,
  };

  // @ts-ignore
  const deviceScreen = useDeviceScreen();

  const ref = useRef(null);

  // Disable Body Scroll
  useEffect(() => {
    if (!initialProps.isBodyScroll && isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "0px";
    }
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.removeProperty("padding-right");
    };
  });

  // Backdrop close function
  const closeCanvas = (event: { target: any }) => {
    if (
      ref.current &&
      // @ts-ignore
      !ref?.current?.contains(event.target) &&
      !isRightPanel &&
      isBackdrop
    ) {
      setOpen(false);
    }
  };
  useEventListener("mousedown", closeCanvas);
  useEventListener("touchstart", closeCanvas);

  const PLACEMENT_ANIMATION = (initialProps.placement === "start" && {
    x: "-100%",
  }) ||
    (initialProps.placement === "top" && { y: "-100%" }) ||
    (initialProps.placement === "bottom" && { y: "100%" }) || { x: "100%" };

  // @ts-ignore
  const MotionTagWrapper = motion[Tag];

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          <MotionTagWrapper
            ref={ref}
            key="offCanvas"
            initial={{ opacity: 0, ...PLACEMENT_ANIMATION }}
            animate={{ opacity: 1, x: "0%", y: "0%" }}
            exit={{ opacity: 0, ...PLACEMENT_ANIMATION }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
            id={id}
            className={classNames(
              "offcanvas",
              `offcanvas-${initialProps.placement}`,
              {
                show: isOpen,
                "offcanvas-modal-style": isModalStyle,
                "offcanvas-right-panel":
                  // @ts-ignore
                  isRightPanel && deviceScreen?.width > 1200,
              },
            )}
            tabIndex={-1}
            aria-labelledby={titleId}
            data-bs-scroll={initialProps.isBodyScroll}
            data-bs-backdrop={initialProps.isBackdrop}
            style={{ visibility: isOpen && "visible" }}
            {...props}
          >
            {children}
          </MotionTagWrapper>
          {initialProps.isBackdrop && (
            <div className={classNames("offcanvas-backdrop", "fade", "show")} />
          )}
        </>
      )}
    </AnimatePresence>
  );
};

export default OffCanvas;
