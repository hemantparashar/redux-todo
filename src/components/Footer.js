import React from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions/index';
import Link from '../components/Link';

const Footer = ({onClick})=>(
    <div>
        <Link onClick={onClick} text="SHOW_ALL">All</Link>
        <Link onClick={onClick} text="SHOW_ACTIVE">Active</Link>
        <Link onClick={onClick} text="SHOW_COMPLETED">Completed</Link>
    </div>
);

const mapDispatchToProps = (dispatch)=>{
    return {
        onClick:(text)=>{
            dispatch(setVisibilityFilter(text))
        }
    }
}

export default connect(null,mapDispatchToProps)(Footer);
