import React from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'

const Container = ({ children, className, ...attrs }) => {
    const classes = classNames('ui-container', className)

    return (
        <div className={classes} {...attrs}>
            {children}
        </div>
    )
}

Container.propTypes = {
    className: propTypes.string,
    children: propTypes.node.isRequired,
}
Container.defaultProps = {
    className: '',
}

export { Container }
