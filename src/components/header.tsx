import * as React from "react";
import { Link } from "gatsby";
import { makeStyles } from '@material-ui/core/styles';

const brandingStyles = makeStyles({
    header: {
        minHeight: '140px'
    },
    link: {
        textDecoration: 'none'
    },
    branding: {
        margin: 0,
        fontFamily: 'voluta-script-pro, serif',
        fontSize: '72pt',
        fontWeight: 'normal',
        textAlign: 'center',
        lineHeight: 'normal'
    }
});

const Header = () => {
    const classes = brandingStyles();

    return (
        <header className={classes.header}>
            <h1 className={classes.branding}>
                <Link to="/" className={classes.link}>
                    Renaissance Games
                </Link>
            </h1>
        </header>
    );
};

export default Header;
