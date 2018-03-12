import { combineReducers } from "redux";

import tabsReducer from "features/tabs/tabsReducer";
import unitInfoReducer from "features/unitInfo/unitInfoReducer";

const rootReducer = combineReducers({
  unitInfo: unitInfoReducer,
  tabs: tabsReducer
});

export default rootReducer;
