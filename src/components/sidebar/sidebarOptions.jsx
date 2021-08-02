/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from "react";
import styled from "styled-components";

const sidebarOption = ({ Icon, title, number }) => (
    <SidebarOption>
        <Icon />
        <h3>{title}</h3>
        <span>{number}</span>
    </SidebarOption>
);

const SidebarOption = styled.div`
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 0 0 0 9px;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    cursor: pointer;
    color: #818181;
    background-color: #fff;
    box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%),
        0 1px 3px 1px rgb(60 64 67 / 15%);
    font-family: "umail sans";
    letter-spacing: 0.25px;
    min-width: 20px;
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;
    text-transform: none;
    & > .MuiSvgIcon-root {
        padding: 5px;
        font-size: 20px;
    }
    & > h3 {
        flex: 1;
        margin-left: 20px;
        font-size: 14px;
        font-weight: 400;
    }
    & > span {
        font-weight: 300;
        font-size: 9px;
        position: absolute;
        left: 37px;
        bottom: 16px;
        color: #000;
        padding: 2px 2px;
        border-radius: 50%;
        background-color: #c04b37;
        color: white;
    }
    &:hover {
        height: 34px;
    }
    &:hover,
    &:hover > p,
    &:hover > h3 {
        background-color: #fcecec;
        color: #c04b37;
        /* font-weight: 800 !important; */
    }
    &.active {
        background-color: #fcecec;
    }
`;

export default sidebarOption;
