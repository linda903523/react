import React from 'react';
import { connect } from 'react-redux';
import * as WarehouseAction from './WarehouseAction';
import DatagridComponent from '../datagrid/DatagridComponent';
import { Table, Input, Popconfirm } from 'antd';

class WarehouseComponent extends React.Component {
 	constructor(props){
 		super(props);
 		this.state = {

 		}
 	}
 	render(){
 		return (
			<div>
				<DatagridComponent 
					api={ this.props.location } 
					salingGoodsInit={ this.props.salingGoodsInit }
				/>
			</div>
		)
 	}
}

const mapStateToProps = function(state){
	return {}
}

export default connect(mapStateToProps, WarehouseAction)(WarehouseComponent);