import React from "react";
import styled from "styled-components";
import { Avatar, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import TuneIcon from "@material-ui/icons/Tune";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import AppsIcon from "@material-ui/icons/Apps";

const Header = () => (
    <HeaderWrapper>
        <div className="header_left">
            <IconButton>
                <MenuIcon />
            </IconButton>
            <div className="brand_logo">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/512px-Gmail_icon_%282020%29.svg.png"
                    alt="Umail"
                    aria-hidden="true"
                />
                <h2>Umail</h2>
            </div>
        </div>
        <div className="header_middle">
            <form className="search_form">
                <SearchIcon />
                <input
                    placeholder="Search mail"
                    type="text"
                    arial-label="Search mail"
                    spellCheck="false"
                />
                <TuneIcon />
            </form>
            <div className="ms">
                <IconButton>
                    <HelpOutlineIcon />
                </IconButton>
                <IconButton>
                    <SettingsOutlinedIcon />
                </IconButton>
            </div>
        </div>
        <div className="header_right">
            <IconButton>
                <AppsIcon />
            </IconButton>
            <IconButton>
                <Avatar />
            </IconButton>
        </div>
    </HeaderWrapper>
);

const HeaderWrapper = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e0e0e0;
    padding: 8px;
    position: relative;
    max-width: 100%;
    min-width: min-content;
    background-color: transparent;
    z-index: 986;
    font: 13px/27px Roboto, Arial, sans-serif;
    .header_left {
        display: flex;
        align-items: center;
        padding-right: 30px;
        height: 48px;
        white-space: nowrap;
        -webkit-box-align: center;
        flex: 1 0 auto;
        .brand_logo {
            display: flex;
            align-items: center;
            justify-content: center;
            & h2 {
                margin-left: 15px;
                font-family: "umail sans";
                color: #8f9bb3;
                font-weight: 400;
            }
        }
        & > .brand_logo > img {
            object-fit: contain;
            height: 25px;
            margin-left: 5px;
        }
    }
    .header_middle {
        justify-content: flex-start;
        display: flex;
        flex: 1 1 100%;
        align-items: center;
        width: 100%;
        .search_form {
            background-color: #f1f3f4;
            padding-right: 30px;
            padding: 0;
            border-radius: 8px;
            overflow: hidden;
            margin-left: auto;
            margin-right: auto;
            max-width: 728px;
            min-width: 260px;
            height: 46px;
            display: flex;
            align-items: center;
            flex: 1 1 auto;
            & > .MuiSvgIcon-root {
                color: #8f9bb3;
                padding-left: 10px;
                padding-right: 10px;
            }
        }
        & > .search_form > input {
            border: none;
            width: 100%;
            outline: none;
            font-size: medium;
            background-color: transparent;
            font-family: "umail sans";
            padding: 0px;
            margin: 0px;
            height: auto;
            position: relative;
            z-index: 6;
            left: 0px;
            &::placeholder {
                font-family: "umail sans";
            }
        }
        .ms {
            display: flex;
        }
    }
    .header_right {
        display: flex;
        /* padding-right: 5px; */
        flex: 0 0 auto;
        height: 46px;
        & > .MuiAvatar-root {
            padding-top: 0;
            width: 20px !important;
        }
    }
`;

export default Header;
