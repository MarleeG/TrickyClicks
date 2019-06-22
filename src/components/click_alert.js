import React from 'react';
import { Alert } from 'react-bootstrap';

import '../App.css';

const ClickAlert = props => {
    return (
        <div className="mt-4 mb-2 text-center amatic">
            {props.gameAlert.message &&
                <Alert variant={props.gameAlert.variant}>
                    <strong>
                        <h3>
                            {props.gameAlert.message}
                        </h3>
                    </strong>
                </Alert>
            }
        </div>
    )
}

export default ClickAlert;