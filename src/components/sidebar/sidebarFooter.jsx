import React from "react";
import styled from "styled-components";

const sidebarFooter = ({ Icon, title, number }) => (
    <SidebarFooter>
        <Icon />
        <h3>{title}</h3>
        <span>{number}</span>
    </SidebarFooter>
);

const SidebarFooter = styled.div`
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    border-radius: 28px;
    padding: 0 0 0 9px;
    cursor: pointer;
    color: #818181;
    background-color: #fff;
    box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%),
        0 1px 3px 1px rgb(60 64 67 / 15%);
    font-family: "umail sans";
    letter-spacing: 0.25px;
    min-width: -20px !important;
    position: relative;
    display: flex;
    align-items: center;
    height: 30px;
    overflow: hidden;
    white-space: nowrap;
    text-transform: none;
    transition: box-shadow 0.08s linear,
        min-width 0.15s cubic-bezier(0.4, 0, 0.2, 1);
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
        bottom: 19px;
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
    }
    &.active {
        background-color: #fcecec;
    }
`;
export default sidebarFooter;
