'use strict';

import axios from 'axios';


export const submitData = (data) => {
	
	if(data.bcc === ""){
		let key = "bcc";
		delete data[key];
	}
	
	if(data.cc === ""){
		let key = "cc";
		delete data[key];
	}
	
	
	return new Promise((resolve, reject) => {
		axios.post('http://localhost:8080/api/sendmail', data)
            .then(response => {
            	resolve(response.data);
                return;
            })
            .catch(error => {
            	reject(error);
                return;
            });
    });
 
};

