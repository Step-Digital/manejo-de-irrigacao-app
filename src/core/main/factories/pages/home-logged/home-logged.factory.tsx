import React from "react";
import { HomeLogged } from "../../../../../ui/pages/home-logged";
import { makeRemoteNewProperty } from "../../usecases/newProperty";
import { makeRemoteCache } from "../../usecases/cache";
import { makeRemoteAuth } from "../../usecases/auth";

export const MakeHomeLogged: React.FC = () => {
  return (
    <HomeLogged auth={makeRemoteAuth()} propertyService={makeRemoteNewProperty()} cache={makeRemoteCache()} />
  )
}