/* eslint-disable no-use-before-define */
/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from "react";
import styled from "styled-components";

/* -------------------------------------------------------------------------- */
/*                            MaterialIcon Dependencies                           */
/* -------------------------------------------------------------------------- */
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DuoIcon from "@material-ui/icons/Duo";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import PhoneIcon from "@material-ui/icons/Phone";

/* -------------------------------------------------------------------------- */
/*                            Internal Dependencies                           */
/* -------------------------------------------------------------------------- */
import useHover from "../../hooks/useHover";
import SidebarOption from "./sidebarOptions";
import SidebarFooter from "./sidebarFooter";

const Sidebar = () => {
    const [hoverRef, isHovered] = useHover();
    return (
        <SidebarContainer ref={hoverRef} isHovered={isHovered}>
            <div role="button" className="sidebar_compose">
                <div className="compose">Compose</div>
            </div>
            <SidebarOption Icon={InboxIcon} title="Inbox" number={54} />
            <SidebarOption Icon={StarIcon} title="Starred" number={36} />
            <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={36} />
            <SidebarOption Icon={NearMeIcon} title="Sent" number={36} />
            <SidebarOption
                Icon={LabelImportantIcon}
                title="Important"
                number={36}
            />
            <SidebarOption Icon={NoteIcon} title="Draft" number={36} />
            <SidebarOption Icon={ExpandMoreIcon} title="More" number={36} />
            <div className="rs">
                <hr className="hrs" />
                <div className="brs" />
            </div>
            <SidebarFooter Icon={DuoIcon} title="New Meeting" />
            <SidebarFooter Icon={KeyboardIcon} title="Join a Meeting" />
            <SidebarFooter Icon={PhoneIcon} title="Call a client" />
            <div className="rs">
                <hr className="hrs" />
                <div className="brs" />
            </div>
        </SidebarContainer>
    );
};

const SidebarContainer = styled.div`
    width: 187px;
    height: 599px;
    max-width: 72px;
    min-width: 72px;
    position: fixed;
    margin-top: 0;
    left: 0;
    min-height: 1px;
    float: left;
    display: inline-block;
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
    &:hover span {
        position: absolute;
        left: 210px;
        bottom: 11px;
        text-align: center;
        background-color: transparent;
        color: #c04b37;
        font-weight: 500;
    }
    .sidebar_compose {
        display: flex;
        font-size: medium;
        height: 48px;
        margin: 16px 0 20px 0;
        padding: 0 0 0 8px;
        align-items: center;
        & > .compose {
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
            padding-right: ${({ isHovered }) =>
                isHovered ? "100px" : "0px"} !important;
            font-size: ${({ isHovered }) => (isHovered ? "0.975rem" : "0px")};
            height: ${({ isHovered }) => (isHovered ? "50px" : "56px")};
            &:hover {
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
    }
    & .compose {
        border-radius: 28px;
        font-size: 0;
        height: 56px;
        padding: 0;
        width: 56px;
        transition: box-shadow 0.08s linear,
            min-width 0.15s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .rs {
        left: -25px;
        top: 233px;
        box-shadow: inset 0 1px 0 rgb(100 121 143 / 12%);
        margin: 0;
        color: #202124;
        resize: vertical;
        margin-bottom: 5px;
        overflow: clip;
        &:focus-visible {
            outline: -webkit-focus-ring-color auto 1px;
        }
    }
    .hrs {
        position: absolute;
        cursor: row-resize;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 5px;
    }
    .brs {
        height: 8px;
        opacity: 1;
    }
    .rs .hrs .brs {
        background: #dadce0;
        height: 4px;
        margin: 4px auto 0;
        width: 32px;
    }
`;
export default Sidebar;
