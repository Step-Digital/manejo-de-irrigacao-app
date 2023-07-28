import React from "react";
import { NewPropertyScreen } from "../../../../../ui/pages/NewProperty";
import { makeRemoteNewProperty } from "../../usecases/newProperty";
import { makeRemoteCache } from "../../usecases/cache";

export const MakeNewProperty: React.FC = () => {
  return (
    <NewPropertyScreen auth={makeRemoteNewProperty()} cache={makeRemoteCache()} />
  )
}