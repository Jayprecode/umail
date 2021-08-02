/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */

import React, { Suspense, lazy } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";
import PropTypes from "prop-types";

/* -------------------------- Internal Dependencies ------------------------- */
import Header from "../components/header";
import ErrorBoundary from "../components/error-boundary";
// import PrimaryLogo from "../components/primary-logo";
// import Footer from "../Components/footer";
import Sidebar from "../components/sidebar";

/* ------------------------- Component Dependencies ------------------------- */
const InboxList = lazy(() => import("../pages/inbox"));
const Starred = lazy(() => import("../components/mail-lists/starred"));

/* ---------------------------- Routes PropTypes ---------------------------- */

const propTypes = {
    location: PropTypes.any,
};

const routes = ({ location }) => (
    <Wrapper>
        <ErrorBoundary>
            <Header />
            <Sidebar />
            <main id="main">
                <TransitionGroup>
                    <CSSTransition
                        key={location.key}
                        timeout={{ enter: 300, exit: 300 }}
                        classNames="fade"
                    >
                        <Suspense fallback="">
                            <Switch location={location}>
                                <Route
                                    exact
                                    path="/inbox"
                                    component={InboxList}
                                />
                                <Route path="/starred" component={Starred} />
                            </Switch>
                        </Suspense>
                    </CSSTransition>
                </TransitionGroup>
                {/* {!location.pathname.includes("") && (
                    <Footer
                        discover={
                            location.pathname === "/mail/#inbox" ||
                            location.pathname === "/mail/#sent"
                        }
                    />
                )} */}
            </main>
        </ErrorBoundary>
    </Wrapper>
);

const Wrapper = styled.div`
    .fade-enter {
        opacity: 0.6;
    }
    .fade-enter.fade-enter-active {
        opacity: 1;
        transition: opacity 0.4s ease-in;
    }
    .fade-exit {
        opacity: 1;
    }
    .fade-exit.fade-exit-active {
        opacity: 0.6;
        transition: opacity 0.4s ease-in;
    }
`;

routes.propTypes = propTypes;

export default withRouter(routes);
