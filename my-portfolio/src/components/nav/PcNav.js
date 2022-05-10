import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { useContext } from 'react';
import { AppContext } from '../../AppContext.js';


export default function PcMenu(props) {
    const context = useContext(AppContext);

    return (
        <React.Fragment>

            <Tabs
                value={context.store}
                onChange={props.handleChange}
                textColor="secondary"
                indicatorColor="secondary"
            >
                {props.myObject.map((option, index) => (
                    <Tab 
                        key={index}
                        label={option}
                        value={option}
                    >
                    </Tab>
                ))}
            </Tabs>

        </React.Fragment>
    );
}