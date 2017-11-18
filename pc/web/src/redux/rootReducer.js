import { combineReducers } from 'redux';

import home from '../components/home/HomeReducer';
import salingGoods from '../components/salingGoods/SalingGoodsReducer';
import warehouse from '../components/warehouse/WarehouseReducer';
import issue from '../components/issue/IssueReducer';
import datagrid from '../components/datagrid/DatagridReducer';
import form from '../components/form/FormReducer';
import login from '../components/login/LoginReducer';

export default combineReducers({
	home,
	datagrid,
	salingGoods,
	warehouse,
	form,
	login,
	issue
})