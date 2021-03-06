import './MethodFooter.scss';
import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getMethodSelector} from "../../../../store/selectors";
import {saveCurrentMethod} from "../../../../store/methodSlice";

function MethodFooter({loadDefaultMethod, showMethods}) {

	const dispatch = useDispatch()
	const method = useSelector(state => state.method.method)

	const saveMethodHandler = (data)=>{
		dispatch(saveCurrentMethod(data))
	}


	return (
		<div className="method__footer ">
			<div className="buttons-left ">
				<div className="buttons-left__btn" onClick={() => loadDefaultMethod()}><span>+</span>New</div>
				<div className="buttons-left__btn " onClick={() => showMethods()}><span>&#9675; &#9675; &#9675;</span>Open
				</div>
			</div>
			<div className="buttons-right ">
				<div className="buttons-right__btn " onClick={()=>{saveMethodHandler(method)}}>Save</div>
				<div className="buttons-right__btn ">Save as</div>
				<div className="buttons-right__btn buttons-right__btn--outline">Cancel</div>
			</div>
		</div>
	);
}

export default MethodFooter;