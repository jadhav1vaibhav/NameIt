import React from 'react';
import './header.css';
const Header =(props)=>{ //instead of props we can directly take value of headTitle and 
    // there is no need to use props. every time then
    return(
        <div className="head-container">
            {/* in the image tag we have to dynamically change the value of 
            class from expanded to contracted based user is typing the text in searchbox or not 
            so as we know state is used to store the data which can be used in future or 
            for any logical operations  
             */}
            <img 
                src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"
                className=
                { 
                    props.headerExpanded 
                    ? "head-image head-image-expanded"
                    : "head-image head-image-contracted"
                }
                // above expression can be little bit chnage using 
                // template literal which allows us to use expression inside string 
                // className={ 'head-image ${
                //         headerExpanded
                //         ? 'head-image-expanded'
                //         : 'head-image-contracted'
                //     }'
                // }
                // above code is not working may be some syntax in not detected because of version of JS 
                

                alt="header image"
                />
            <h1 className={ 
                    props.headerExpanded 
                    ? "head-text head-text-expanded"
                    : "head-text head-text-contracted"
                }>{props.headTitle}</h1>
        </div>

    );
};
export default Header;