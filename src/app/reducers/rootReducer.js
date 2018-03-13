import { combineReducers } from "redux";

import entitiesReducer from "./entitiesReducer";
import pilotsReducer from "features/pilots/pilotsReducer";
import mechsReducer from "features/mechs/mechsReducer";
import tabsReducer from "features/tabs/tabsReducer";
import unitInfoReducer from "features/unitInfo/unitInfoReducer";

const rootReducer = combineReducers({
  entities: entitiesReducer,
  pilots: pilotsReducer,
  mechs: mechsReducer,
  unitInfo: unitInfoReducer,
  tabs: tabsReducer
});

export default rootReducer;
