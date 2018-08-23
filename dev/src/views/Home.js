import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Grid,
  Typography,
  CircularProgress,
  Paper
} from '@material-ui/core';
import {loadExperience, updateExperience} from '../store/actions/experience';
import { connect } from 'react-redux';
import GlobalFoot from 'Components/GlobalFoot';

const styles = (theme) => ({
  card_layout: {
    boxShadow: 'none',
    backgroundColor: theme.palette.primary.main,
    borderRadius: 0
  },
  cardcontent_laylout: {
    textAlign: 'center'
  },
  cardactions_laylout: {
    justifyContent: 'center'
  },
  page_container_layout: {
    margin: '0 auto'
  },
  stepper_layout: {
    backgroundColor: 'transparent',
    borderLeft: '3px dashed' + theme.palette.primary.main,
    borderRight: '3px dashed' + theme.palette.primary.main,
  },
  step_style: {
    cursor: 'pointer'
  },
  steps_heading: {
    borderLeft: `${theme.spacing.unit}px solid ${theme.palette.primary.main}`,
    paddingLeft: theme.spacing.unit / 2,
    marginLeft: `-${theme.spacing.unit/4}px`
  },
  steps_heading_paper: {
    paddingLeft: theme.spacing.unit / 2,
    paddingTop: theme.spacing.unit * 3 / 2,
    paddingBottom: theme.spacing.unit * 3 / 2
  }
});

class Main extends Component {
  componentDidMount() {
    this.props.loadExperience()
  }

  componentWillReceiveProps(nextProps) {
    
  }

  // 改变当前项的 active 状态
  switchExperienceActive(current) {
    current.is_active = !current.is_active;
    this.props.updateExperience(current)
  }

  render() {
    const { classes, experience } = this.props;
    const experienceLoading = experience.loading;
    const experienceData = experience.data;

    return (
      <div>
        <Card className={classes.card_layout}>
          <CardContent className={classes.cardcontent_laylout}>
            <Typography variant="headline" component="h1">ダスティネス・フォード・ララティーナ</Typography>
            <Typography color="textSecondary">
            Lalatina Dustiness Ford
            </Typography>
            <Typography component="p">
            达斯提尼斯·福特·拉拉蒂娜是晓なつめ所创作的轻小说《为美好的世界献上祝福》及其衍生作品的登场角色。
            </Typography>
          </CardContent>
          <CardActions className={classes.cardactions_laylout}>
            <a href="https://github.com/ubbcou/ubbcou.github.io" target="__blank">
              <Button size="small">Repository</Button>
            </a>
          </CardActions>
        </Card>

        <Grid container spacing={0}>
          <Grid item lg={8} md={10} sm={12} xs={12} className={classes.page_container_layout}>
            {/* <div className={classes.steps_heading}>
              <Paper elevation={0} className={classes.steps_heading_paper}>
              </Paper>
            </div> */}
            {experienceLoading ? <CircularProgress size={36} color="secondary" /> : null}
            <Stepper orientation="vertical" className={classes.stepper_layout}>
              {experienceData.map(item => (
                <Step
                  key={item.id}
                  active={item.is_active}
                  className={classes.step_style}
                  onClick={() => this.switchExperienceActive(item)}>
                  <StepLabel>{item.title}</StepLabel>
                  <StepContent>
                    <Typography>{item.description}</Typography>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
          </Grid>
        </Grid>
      
        <GlobalFoot />
      </div>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return state
}
export default withStyles(styles)(connect(mapStateToProps, {
  loadExperience,
  updateExperience,
})(Main))
