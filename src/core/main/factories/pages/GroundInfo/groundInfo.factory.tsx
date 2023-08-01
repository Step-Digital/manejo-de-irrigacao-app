import React from "react";
import { GroundInfo } from "../../../../../ui/pages/GroundInfo";
import { makeRemoteNewProperty } from "../../usecases/newProperty";
import { makeRemoteCache } from "../../usecases/cache";
import { makeRemoteAuth } from "../../usecases/auth";

export const MakeGroundInfo: React.FC = () => {
  return (
    <GroundInfo auth={makeRemoteAuth()} propertyService={makeRemoteNewProperty()} cache={makeRemoteCache()} />
  )
}