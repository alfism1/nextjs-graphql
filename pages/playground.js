import React, { useState } from "react";
import { useTransition, animated } from "react-spring";
import { SearchTop } from "../components";

function Playground(props) {
  const [showD, set] = useState(false);
  const transitions = useTransition(showD, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    // reverse: showD,
    // delay: 200,
    // config: { duration: 250 },
    // onRest: () => set(!showD),
  });

  const clickhandle = () => {
    set(!showD);
  };

  return (
    <div>
      <button onClick={clickhandle}>Click here</button>
      {transitions(
        (styles, item) =>
          item && (
            <animated.div style={styles}>
              <div>
                <SearchTop openSearch={showD} handleSearchToggle={clickhandle} />
              </div>
            </animated.div>
          )
      )}
    </div>
  );
}

export default Playground;
