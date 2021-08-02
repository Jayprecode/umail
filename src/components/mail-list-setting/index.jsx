/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React, { memo } from "react";
import styled from "styled-components";
/* -------------------------------------------------------------------------- */
/*                            Material UI Dependencies                        */
/* -------------------------------------------------------------------------- */
import { Checkbox, IconButton } from "@material-ui/core";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import SettingsIcon from "@material-ui/icons/Settings";

const Setting = memo(() => (
    <EmailListSetting>
        <div className="setting-left">
            <IconButton>
                <Checkbox />
            </IconButton>
            <IconButton>
                <RedoIcon />
            </IconButton>
            <IconButton>
                <MoreVertIcon />
            </IconButton>
        </div>
        <div className="setting-right">
            <IconButton>
                <ChevronLeftIcon />
            </IconButton>
            <IconButton>
                <ChevronRightIcon />
            </IconButton>
            <IconButton>
                <KeyboardHideIcon />
            </IconButton>
            <IconButton>
                <SettingsIcon />
            </IconButton>
        </div>
    </EmailListSetting>
));

const EmailListSetting = styled.div`
    padding: 0;
`;
export default Setting;
