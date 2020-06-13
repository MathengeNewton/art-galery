import React,{useState} from 'react';
import './icons.css';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import PinterestIcon from '@material-ui/icons/Pinterest';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > span': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Icons() {
const classes = useStyles();
let [display,setDisplay] =  useState(false);
let [btntoggle,setBtntoggle] = useState(true);
let toggle =()=>{
      setDisplay(display =!display);
      setBtntoggle(btntoggle = ! btntoggle);
  }
let btn = '';
let visibility = '';
if (display){
    visibility='none';
    btn = ''; 
}else{
    visibility = '';
    btn='none';
}
  const icons ={
      display: visibility
  } 
  const btnstyle = {
      display: btn
  }
  const togglebox={
      marginBottom:'10%'
  }
  return (
    <div className={classes.root}>
        <div className="icons" style={icons}>
            <div className="icon">
                <a href="https://www.facebook.com/" rel="noopener noreferrer" target="_blank">
                    <FacebookIcon color="secondary" />
                </a>
            </div> 
            <div className="icon">
                <a href="https://twitter.com/home" rel="noopener noreferrer" target="_blank">
                    <TwitterIcon color="secondary" />
                </a>
            </div>
            <div className="icon">
                <a href="https://www.instagram.com/"  rel="noopener noreferrer" target="_blank">
                    <InstagramIcon color="secondary" />
                </a>
            </div>
            <div className="icon">
                <a href="https://www.pinterest.com/" rel="noopener noreferrer" target="_blank">
                    <PinterestIcon color="secondary" />
                </a>
            </div>
        </div> 
        <div className="toggle" style={togglebox}>
            <div>
            <ArrowLeftIcon color="secondary" onClick={toggle} style={icons}/>
            </div>
            <div>
                <div>
                    <ArrowRightIcon color="secondary" onClick={toggle} style={btnstyle}/>
                </div>
                <div>
                    <ArrowRightIcon color="secondary" onClick={toggle} style={btnstyle}/>
                </div>
                <div>
                    <ArrowRightIcon color="secondary" onClick={toggle} style={btnstyle}/>
                </div>
                <div>
                    <ArrowRightIcon color="secondary" onClick={toggle} style={btnstyle}/>
                </div>
                <div>
                    <ArrowRightIcon color="secondary" onClick={toggle} style={btnstyle}/>
                </div>
                <div>
                    <ArrowRightIcon color="secondary" onClick={toggle} style={btnstyle}/>
                </div>
                <div>
                    <ArrowRightIcon color="secondary" onClick={toggle} style={btnstyle}/>
                </div>
            </div>
        </div>        
    </div>
  );
}
