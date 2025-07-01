import React, { useState } from 'react';
import mathClamp from 'math-clamp';
import './styled.css';
import useInterval from '../../hooks/useInterval';
import useWindowResize from '../../hooks/useWindowResize';

interface Breakpoint {
  breakpoint: number;
  settings: object;
}

interface Props {
  children: React.ReactNode[];
  settings: {
    size: number;
    height: number;
    autoplay?: boolean;
    onChange: (start: number, end: number) => void;
    interval?: number;
    looped?: boolean;
  };
  breakpoints: Breakpoint[] ;
  handler: React.MutableRefObject<any>;
}

export default function Slider({children, settings, breakpoints, handler}: Props) {
  breakpoints.sort((x, y) => y.breakpoint - x.breakpoint);

  const [activeSlide, setActiveSlide] = useState(0);
  const [backward, setBackward] = useState(false);
  const [interacted, setInteracted] = useState(false);

  const findBreakpoint = (breakpoints: Breakpoint[]) => {
    return breakpoints
      .filter((item) => item.breakpoint >= window.innerWidth)?.pop()?.settings ?? {};
  };

  const refreshPreferences = () => {
    return {...settings, ...findBreakpoint(breakpoints)};
  };

  const [preferences, setPreferences] = useState(refreshPreferences);

  const width = Math.round(100 / preferences.size);
  const limit = children.length - preferences.size;

  const isLast = () => {
    return activeSlide >= limit;
  }

  const getNext = () => {
    return !isLast() ? mathClamp(activeSlide + preferences.size, {min: activeSlide, max: limit}) : 0;
  };

  const isFirst = () => {
    return activeSlide <= 0;
  }

  const getPrev = () => {
    return !isFirst() ? mathClamp(activeSlide - preferences.size, {min: 0, max: limit}) : limit;
  };

  const getPage = (index: number) => {
    return mathClamp(index * preferences.size, {min: 0, max: limit}) ;
  }

  const getLooped = () => {
    return !backward ? getNext() : getPrev();
  }

  const change = (target: number, force?: boolean) => {
    if (!force && target === activeSlide) {
      return;
    }

    setActiveSlide(target);

    try {
      preferences.onChange(target, (target + preferences.size) - 1);
    } catch (e) {
      console.log(`Callback failed: ${e}`)
    }
  }

  handler.current = {
    next: () => {
      if (!preferences.looped && typeof preferences.looped !== 'undefined' && isLast()) {
        return;
      }
      setInteracted(true);
      change(getNext());
    },
    prev: () => {
      if (!preferences.looped && typeof preferences.looped !== 'undefined' && isFirst()) {
        return;
      }
      setInteracted(true);
      change(getPrev());
    },
    goto: (index: number) => {
      setInteracted(true);
      change(getPage(index))
    }
  };

  useWindowResize({
    callback: () => {
      setPreferences(refreshPreferences());
      setInteracted(false);
      change(0, true);
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    }
  });

  useInterval({
    callback: () => {
      if (!preferences.autoplay) return;
      if (interacted) return;

      if (!backward && isLast()) {
        return setBackward(true);
      }

      if (backward && isFirst()) {
        return setBackward(false);
      }

      change(getLooped());
    },
    delay: preferences?.interval ?? 1000,
    stopOperator: false,
    dependencies: [preferences, interacted, backward, activeSlide],
  });

  return (
    <div className="styled-slider" {...{
      style: {
        height: preferences.height,
      }
    }}>

      {children.map((item, index) => {
        const slideProps = {
          style: {
            width: `${width}%`,
            left: `${width * index}%`,
            transform: `translate3d(-${100 * activeSlide}%, 0, 0)`,
          }
        };

        return (
          <div className="slide" key={index} {...slideProps}>{item}</div>
        );
      })}
    </div>
  );
}

Slider.defaultProps = {
  breakpoints: [],
  handler: {current: {}},
  settings: {
    autoplay: false,
    onChange: () => {},
    interval: 1000,
    looped: true,
  }
};