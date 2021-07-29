/* eslint-disable prettier/prettier */
/* eslint-disable no-use-before-define */
/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from "react";
// import { Button } from "@material-ui/core";
// import AddIcon from "@material-ui/icons/Add";
import styled from "styled-components";

/* -------------------------------------------------------------------------- */
/*                            Internal Dependencies                           */
/* -------------------------------------------------------------------------- */
import useHover from "../../hooks/useHover";

const Sidebar = () => {
    const [hoverRef, isHovered] = useHover();
    return (
        <SidebarContainer ref={hoverRef} isHovered={isHovered}>
            <SidebarCompose role="button">
                <Compose className="comp">Compose</Compose>
            </SidebarCompose>
        </SidebarContainer>
    );
};

const SidebarContainer = styled.div`
    width: 187px;
    height: 599px;
    max-width: 72px !important;
    min-width: 72px !important;
    position: fixed;
    margin-top: 0;
    left: 0;
    min-height: 1px;
    float: left;
    padding-right: ${({ isHovered }) => (isHovered ? "100px" : "0px")};
    &:hover {
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
        transition-duration: 0.15s;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        max-width: 256px !important;
        min-width: 256px !important;
        background-color: #fff;
        box-shadow: 0px 16px 10px 0px rgba(0 0 0 / 14%),
            0px 11px 18px 0px rgba(0 0 0 / 12%),
            0px 13px 5px -1px rgba(0 0 0 / 20%);
        z-index: 6;
        transition-property: background-color, box-shadow, max-width, min-width;
    }
`;
const SidebarCompose = styled.div`
    display: flex;
    font-size: medium;
    height: 48px;
    margin: 16px 0;
    padding: 0 0 0 8px;
    align-items: center;
`;
const Compose = styled.div`
    ${SidebarContainer} & {
        border-radius: 28px;
        font-size: 0;
        height: 56px;
        padding: 0;
        width: 56px;
        transition: box-shadow 0.08s linear,
            min-width 0.15s cubic-bezier(0.4, 0, 0.2, 1);
    }
    ${SidebarCompose} > & {
        box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%),
            0 1px 3px 1px rgb(60 64 67 / 15%);
        font-family: "umail sans";
        letter-spacing: 0.25px;
        align-items: center;
        background-color: #fff;
        background-image: none;
        color: #3c4043;
        display: inline-flex;
        /* font-weight: 500; */
        min-width: 56px;
        overflow: hidden;
        text-transform: none;
        transition-duration: 0.15s;
        transition: box-shadow 0.08s linear,
            min-width 0.15s cubic-bezier(0.4, 0, 0.2, 1);
        cursor: pointer;
        border-radius: 28px;
        padding-right: ${({ isHovered }) =>
            isHovered ? "100px" : "0px"} !important;
        font-size: ${({ isHovered }) => (isHovered ? "0.875" : "0px")};
        &:hover {
            border-radius: 24px;
            /* font-size: 0.875rem; */
            height: 46px;
            background-color: none;
            box-shadow: none;
        }
        &:before {
            background-image: url(https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png);
            background-position: center;
            background-repeat: no-repeat;
            background-size: 32px;
            content: "";
            display: block;
            height: 48px;
            min-width: 56px;
        }
        &:hover,
        &:focus {
            box-shadow: 0 1px 3px 0 rgb(60 64 67 / 30%),
                0 4px 8px 3px rgb(60 64 67 / 15%);
            background-color: #fafafb;
        }
    }
`;
export default Sidebar;
