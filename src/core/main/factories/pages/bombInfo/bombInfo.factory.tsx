import React from "react";
import { BombInfo } from "../../../../../ui/pages/BombInfo";
import { makeRemoteNewProperty } from "../../usecases/newProperty";
import { makeRemoteCache } from "../../usecases/cache";

export const MakeBombInfo: React.FC = () => {
  return (
    <BombInfo auth={makeRemoteNewProperty()} cache={makeRemoteCache()} />
  )
}