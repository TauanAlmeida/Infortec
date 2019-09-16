import React, {useEffect} from 'react';
import './HeaderBar.css'

export default function HeaderBar() {

    useEffect(() => {
        window.onscroll = function() {scrollFunction()};
        function scrollFunction() {
           const elem = document.getElementById('handlebar')
            if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
                elem.classList.add("slideInRight")
                elem.classList.remove("displayNone")
            } else {
              
            }
        }
    });

  return (
    <div id="handlebar" className="displayNone header-bar"  >
    </div>
  );
}
