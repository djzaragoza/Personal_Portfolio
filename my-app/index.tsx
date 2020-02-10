import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import "@babel/polyfill";
import {
    AUTH_MESSAGE,
    Authentication,
    AuthenticationProvider,
    DataLayer,
    Environment,
    Identity,
    IsomorphicApp,
    Route,
    SecuredRoute,
    userLogout,
    WebApp,
    withAuthCallback,
    withIsomorphicState,
    withRequest
} from "infrastructure-components";

