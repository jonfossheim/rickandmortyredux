import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

const Accordion = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>RMAPI + Redux = ❤ </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus vestibulum enim, sit
                        amet eleifend turpis suscipit sed. Donec dictum ante et felis ullamcorper, vitae consequat dolor
                        consequat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean id nunc eget
                        massa luctus tempor. Etiam quis neque vehicula augue placerat efficitur ut mattis lectus. Fusce
                        in est et enim varius ornare a ut sapien. Morbi eu elit quis est auctor ultrices ut eu ipsum.
                        Aliquam efficitur ipsum ex, a commodo eros pretium quis. Sed ex ligula, volutpat id gravida vel,
                        varius et arcu. Morbi pharetra libero ac neque scelerisque ullamcorper. Donec vel urna orci.
                        Cras auctor nibh eget urna fermentum sodales. Fusce laoreet, odio eget ornare rhoncus, erat nisi
                        volutpat sem, et mattis tortor purus quis justo. Etiam et ipsum nisi. Praesent vehicula lectus
                        non ornare mattis.
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}>What we do</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        Sed accumsan, velit ac molestie hendrerit, purus dolor laoreet turpis, sit amet hendrerit neque
                        quam vel neque. Aliquam erat volutpat. Donec vitae bibendum nisl. Integer a nisl enim.
                        Suspendisse eget lectus metus. Pellentesque vitae vulputate massa. Donec porta nibh quam, vel
                        vulputate enim rhoncus mollis. Maecenas gravida ultrices orci vel interdum.
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography className={classes.heading}>Why we do it</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        Sed eget eros ac velit vestibulum interdum vel non metus. Nam dui nisl, varius eget ligula vel,
                        malesuada iaculis erat. Curabitur ut dictum felis. Donec ut feugiat justo. Phasellus interdum,
                        felis sed ultrices pretium, urna lacus tempus justo, ac fermentum velit dui vel lectus. Etiam a
                        enim urna. Mauris non mattis lorem. Praesent aliquet diam nec metus blandit, eget tincidunt
                        risus laoreet. Ut gravida urna ut tempor sollicitudin. Nullam eros tellus, pulvinar nec accumsan
                        vel, ornare in nisi.
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel4a-content"
                    id="panel4a-header"
                >
                    <Typography className={classes.heading}>Our team</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        Etiam tellus diam, ullamcorper at dignissim eget, viverra id metus. Class aptent taciti sociosqu
                        ad litora torquent per conubia nostra, per inceptos himenaeos. Nam elementum sem sapien.
                        Phasellus ornare metus in lorem molestie, non placerat neque eleifend. Cras porta fringilla est
                        nec tincidunt. In eget condimentum massa. Duis convallis ac elit fringilla fermentum.
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}

export default Accordion
