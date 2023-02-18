import React from 'react'

function Choice(props) {
    const { style, clickfuc, label, disable = false  } = props
    return (
        <button
            disabled={disable}
            className={`rounded-lg ${style}`}
            onClick={clickfuc}
        >
            {label}
        </button>
    )
}

export default Choice