import { STEPS } from "./types";
import Rate from "../Components/Rate";
import BossInformation from "../Components/BossInformation.tsx";
import YourInformation from "../Components/YourInformation.tsx";
import Success from "../Components/Success"

export const getStepMapping = (step: STEPS) => {
  switch (step) {
    case STEPS.STEP_1:
      return <Rate />;
    case STEPS.STEP_2:
      return <BossInformation />;
    case STEPS.STEP_3:
      return <YourInformation />;
    case STEPS.STEP_4:
      return <Success/>;
    default:
      return <Rate />;
  }
};
