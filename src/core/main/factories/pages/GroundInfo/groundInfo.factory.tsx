import React from "react";
import { GroundInfo } from "../../../../../ui/pages/GroundInfo";
import { makeRemoteNewProperty } from "../../usecases/newProperty";
import { makeRemoteCache } from "../../usecases/cache";

export const MakeGroundInfo: React.FC = () => {
  return (
    <GroundInfo auth={makeRemoteNewProperty()} cache={makeRemoteCache()} />
  )
}