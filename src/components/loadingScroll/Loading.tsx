import React from 'react';
import './style.css'

const Loading = () => {
	return (
			<div className="spinner-box">
				<div className="circle-border">
					<div className="circle-core"></div>
				</div>
			</div>
	);
};

export default Loading;