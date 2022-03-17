//import react & external tools
import React, { useState } from 'react';
//import components
import SidebarTab from './SidebarTab';
//import bootstrap & styles
import { Offcanvas, Button} from 'react-bootstrap';
import { IoOptionsSharp } from "react-icons/io5";

const Sidebar = ({ addPlace, places, animeCollection }) => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button  variant="primary" onClick={show === false? handleShow : handleClose}>
        <IoOptionsSharp/>
      </Button>

      <Offcanvas  show={show} onHide={handleClose} backdrop={false}>
        <Offcanvas.Header closeButton>
        </Offcanvas.Header> 
        <Offcanvas.Body>
          <SidebarTab 
          addPlace={addPlace}
          places={places}
          animeCollection={animeCollection}  
          />
        </Offcanvas.Body>
      </Offcanvas>
      </>
    );
  }

export default Sidebar;
  
//   function Example() {
//     return (
//       <>
//         {options.map((props, idx) => (
//           <OffCanvasExample key={idx} {...props} />
//         ))}
//       </>
//     );
//   }
  
//   render(<Example />);