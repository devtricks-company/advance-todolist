import { createSelector } from "reselect";
import { RootState } from "../../../store";

export const getUserParticipantsSelector = createSelector(
  (state: RootState) => state.participants,
  (participants) => participants
);
