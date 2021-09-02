import React, { useContext, useState } from 'react';

// ---------- RoomContext ----------
export type RoomState = {
  isLightOn: boolean;
  count: number;
};
type RoomStateSetter = (roomState: RoomState) => void;

/** RoomContext contains RoomState and RoomStateSetter */
const RoomContext = React.createContext<
  { roomState: RoomState; setRoomState: RoomStateSetter } | undefined
>(undefined);

// ---------- RoomContextProvider ----------
const RoomContextProvider: React.FC = ({ children }) => {
  const [roomState, setRoomState] = useState<RoomState>({
    isLightOn: false,
    count: 0,
  });

  const value = { roomState, setRoomState };
  return <RoomContext.Provider value={value}>{children}</RoomContext.Provider>;
};

// ---------- useRoomContext ----------
function useRoomContext() {
  const roomContext = useContext(RoomContext);
  /* istanbul ignore next */
  if (roomContext === undefined) {
    throw new Error('useRoomContext must be used within a RoomContextProvider');
  }
  return roomContext;
}

export { RoomContextProvider, useRoomContext };
