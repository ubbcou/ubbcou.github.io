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
  Typography
} from '@material-ui/core';
import {loadUser} from '../store';
import { connect } from 'react-redux';

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
    backgroundColor: 'transparent'
  }
});

class Main extends Component {
  componentDidMount() {
    this.props.loadUser(1)
  }

  render() {
    const { classes } = this.props;

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
            <a href="https://github.com/ubbcou" target="__blank">
              <Button size="small">About me</Button>
            </a>
          </CardActions>
        </Card>

        <Grid container spacing={0}>
          <Grid item lg={8} md={10} sm={12} xs={12} className={classes.page_container_layout}>
            <Stepper orientation="vertical" className={classes.stepper_layout}>
              <Step>
                <StepLabel>享受青蛙Play加入男主角的队伍。</StepLabel>
                <StepContent>
                  <Typography>
                    为了享受青蛙Play加入男主角的队伍。在保护惠惠的时候中了魔王干部无头骑士的诅咒。在诅咒被阿库娅轻松解除后，又与无头骑士展开激战，成功砍到了对手一剑。因为家族揽下了重修被破坏的城镇的费用及给居民的补偿而向领主阿尔达普借债，并以自己的身体作为担保，但向小队等人保密了。
                  </Typography>
                </StepContent>
              </Step>
              <Step active>
                <StepLabel>标题</StepLabel>
                <StepContent>
                  <Typography>内容</Typography>
                </StepContent>
              </Step>
              <Step active>
                <StepLabel>标题</StepLabel>
                <StepContent>
                  <Typography>内容</Typography>
                </StepContent>
              </Step>
            </Stepper>
          </Grid>
        </Grid>
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
  loadUser,
})(Main))
