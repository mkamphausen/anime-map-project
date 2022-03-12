import React, { useState } from 'react';

import SidebarTab from './SidebarTab';

import { Offcanvas, Button} from 'react-bootstrap';

import { IoOptionsSharp } from "react-icons/io5";

const options = {
    // name: 'Enable body scrolling',
    scroll: true,
    backdrop: false,
}

const Sidebar = ({ name, addPlace }) => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button  variant="primary" onClick={show == false? handleShow : handleClose}>
        <IoOptionsSharp/>
      </Button>

      <Offcanvas  show={show} onHide={handleClose} backdrop={false}>
        {/* <Offcanvas.Header>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header> */}
        <Offcanvas.Body>
          <SidebarTab addPlace={addPlace}/>
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