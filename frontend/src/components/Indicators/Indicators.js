import React from "react";

import {
  IndicatorsText,
  IndicatorsH2,
  IndicatorsDescription,
  Indicator,
  IndicatorsH3,
} from "./IndicatorsElements";
import { Wrapper } from "../UI/Wrapper/Wrapper";

const Indicators = () => {
  return (
    <Wrapper>
      <IndicatorsText>
        <IndicatorsH2>Economic Indicators</IndicatorsH2>
        <IndicatorsDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          adipisci rerum facilis nobis natus doloribus tempore omnis repellat!
          Labore odio quas tempore.
        </IndicatorsDescription>
      </IndicatorsText>
      <IndicatorsText>
        <IndicatorsH2>Leading Indicators</IndicatorsH2>
        <IndicatorsDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          adipisci rerum facilis nobis natus doloribus tempore omnis repellat!
          Labore odio quas tempore.
        </IndicatorsDescription>
        <Indicator>
          <IndicatorsH3>ISM Manufacturing</IndicatorsH3>
          <IndicatorsDescription>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
            doloribus rem deserunt, voluptatibus vero magnam mollitia dolor eum
            aspernatur, eius mole
          </IndicatorsDescription>
        </Indicator>
        <Indicator>
          <IndicatorsH3>ISM Manufacturing</IndicatorsH3>
          <IndicatorsDescription>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
            doloribus rem deserunt, voluptatibus vero magnam mollitia dolor eum
            aspernatur, eius mole
          </IndicatorsDescription>
        </Indicator>
        <Indicator>
          <IndicatorsH3>ISM Manufacturing</IndicatorsH3>
          <IndicatorsDescription>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
            doloribus rem deserunt, voluptatibus vero magnam mollitia dolor eum
            aspernatur, eius mole
          </IndicatorsDescription>
        </Indicator>
      </IndicatorsText>
      <IndicatorsText>
        <IndicatorsH2>Confirming Indicators</IndicatorsH2>
        <IndicatorsDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          adipisci rerum facilis nobis natus doloribus tempore omnis repellat!
          Labore odio quas tempore.
        </IndicatorsDescription>
        <Indicator>
          <IndicatorsH3>ISM Manufacturing</IndicatorsH3>
          <IndicatorsDescription>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
            doloribus rem deserunt, voluptatibus vero magnam mollitia dolor eum
            aspernatur, eius mole
          </IndicatorsDescription>
        </Indicator>
        <Indicator>
          <IndicatorsH3>ISM Manufacturing</IndicatorsH3>
          <IndicatorsDescription>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
            doloribus rem deserunt, voluptatibus vero magnam mollitia dolor eum
            aspernatur, eius mole
          </IndicatorsDescription>
        </Indicator>
      </IndicatorsText>
    </Wrapper>
  );
};

export default Indicators;
