import React from "react";
import { Composition } from "remotion";
import { HelloWorld } from "./Compositions/HelloWorld";
import { Section01Timeline } from "./Compositions/Section01Timeline";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="HelloWorld"
        component={HelloWorld}
        durationInFrames={90}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          title: "Сатурн-Агро",
          subtitle: "Инвестиционная презентация",
        }}
      />
      <Composition
        id="Section01Timeline"
        component={Section01Timeline}
        durationInFrames={120}
        fps={30}
        width={800}
        height={120}
      />
    </>
  );
};
