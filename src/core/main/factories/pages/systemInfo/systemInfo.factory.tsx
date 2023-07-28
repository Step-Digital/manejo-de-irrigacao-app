import React from "react";
import { SystemInfo } from "../../../../../ui/pages/SystemInfo";
import { makeRemoteNewProperty } from "../../usecases/newProperty";
import { makeRemoteCache } from "../../usecases/cache";

export const MakeSystemInfo: React.FC = () => {
  return (
    <SystemInfo auth={makeRemoteNewProperty()} cache={makeRemoteCache()} />
  )
}