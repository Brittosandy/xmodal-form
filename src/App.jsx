// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [open, setOpen] = useState(false);

//   const handleOutsideClick = (e) => {
//     if (e.target.className === "modal") {
//       setOpen(false);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const username = document.getElementById("username").value.trim();
//     const email = document.getElementById("email").value.trim();
//     const phone = document.getElementById("phone").value.trim();
//     const dob = document.getElementById("dob").value;

//     if (!username || !email || !phone || !dob) {
//       return; // browser default validation popup
//     }

//     if (!email.includes("@")) {
//       alert("Invalid email. Please check your email address.");
//       return;
//     }

//     if (phone.length !== 10 || isNaN(phone)) {
//       alert("Invalid phone number. Please enter a 10-digit phone number.");
//       return;
//     }

//     const today = new Date();
//     const pickedDate = new Date(dob);

//     if (pickedDate > today) {
//       alert("Invalid date of birth. Date of birth cannot be in the future.");
//       return;
//     }

//     setOpen(false);
//   };

//   return (
//     <>
//       {!open && (
//         <div className="main-container">
//           <h1>User Details Modal</h1>
//           <button className="open-form-btn" onClick={() => setOpen(true)}>
//             Open Form
//           </button>
//         </div>
//       )}

//       {open && (
//         <div className="modal" onClick={handleOutsideClick}>
//           <div className="modal-content">
//             <h2>Fill Details</h2>

//             <form onSubmit={handleSubmit}>
//               <label>Username:</label>
//               <input id="username" type="text" required />

//               <label>Email Address:</label>
//               <input id="email" type="email" required />

//               <label>Phone Number:</label>
//               <input id="phone" type="text" required />

//               <label>Date of Birth:</label>
//               <input id="dob" type="date" required />

//               <button className="submit-button" type="submit">
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default App;


// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [open, setOpen] = useState(false);

//   const handleOutsideClick = (e) => {
//     if (e.target.className === "modal") {
//       setOpen(false);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const username = document.getElementById("username").value.trim();
//     const email = document.getElementById("email").value.trim();
//     const phone = document.getElementById("phone").value.trim();
//     const dob = document.getElementById("dob").value;

//     if (!username || !email || !phone || !dob) return;

//     if (!email.includes("@")) {
//       alert("Invalid email. Please check your email address.");
//       return;
//     }

//     if (phone.length !== 10 || isNaN(phone)) {
//       alert("Invalid phone number. Please enter a 10-digit phone number.");
//       return;
//     }

//     const today = new Date();
//     const pickedDate = new Date(dob);

//     if (pickedDate > today) {
//       alert("Invalid date of birth. Date of birth cannot be in the future.");
//       return;
//     }

//     setOpen(false);
//   };

//   return (
//     <div className="app">
//       {!open && (
//         <div className="main-container">
//           <h1>User Details Modal</h1>
//           <button onClick={() => setOpen(true)}>Open Form</button>
//         </div>
//       )}

//       {open && (
//         <div className="modal" onClick={handleOutsideClick}>
//           <div
//             className="modal-content"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <h2>Fill Details</h2>

//            <form onSubmit={handleSubmit}>
//              <label>Username:</label>
//                <input id="username" type="text" required />

//                <label>Email Address:</label>
//                <input id="email" type="email" required />

//                <label>Phone Number:</label>
//                <input id="phone" type="text" required />

//                <label>Date of Birth:</label>
//                <input id="dob" type="date" required />

//               <button className="submit-button" type="submit">
//                  Submit
//                </button>
//            </form>
//          </div>
//        </div>
//       )}
//     </div>
//   );
// }

// export default App;



// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [open, setOpen] = useState(false);

//   const handleOutsideClick = (e) => {
//     if (e.target.className === "modal") {
//       setOpen(false);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const username = document.getElementById("username").value.trim();
//     const email = document.getElementById("email").value.trim();
//     const phone = document.getElementById("phone").value.trim();
//     const dob = document.getElementById("dob").value;

//     if (!username || !email || !phone || !dob) return;

//     if (!email.includes("@")) {
//       alert("Invalid email. Please check your email address.");
//       return;
//     }

//     if (phone.length !== 10 || isNaN(phone)) {
//       alert("Invalid phone number. Please enter a 10-digit phone number.");
//       return;
//     }

//     const today = new Date();
//     const pickedDate = new Date(dob);

//     if (pickedDate > today) {
//       alert("Invalid date of birth. Date of birth cannot be in the future.");
//       return;
//     }

//     setOpen(false);
//   };

//   return (
//     <>
//       {!open && (
//         <div className="main-container">
//           <h1>User Details Modal</h1>
//           <button className="open-form-btn" onClick={() => setOpen(true)}>
//             Open Form
//           </button>
//         </div>
//       )}

//       {open && (
//         <div className="modal" onClick={handleOutsideClick}>
//           <div
//             className="modal-content"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <h2>Fill Details</h2>

//             <form onSubmit={handleSubmit}>
//               <label>Username:</label>
//               <input id="username" type="text" required />

//               <label>Email Address:</label>
//               <input id="email" type="email" required />

//               <label>Phone Number:</label>
//               <input id="phone" type="text" required />

//               <label>Date of Birth:</label>
//               <input id="dob" type="date" required />

//               <button className="submit-button" type="submit">
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default App;


// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [open, setOpen] = useState(false);

//   const handleOutsideClick = (e) => {
//     if (e.target.className === "modal") {
//       setOpen(false);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const username = document.getElementById("username").value.trim();
//     const email = document.getElementById("email").value.trim();
//     const phone = document.getElementById("phone").value.trim();
//     const dob = document.getElementById("dob").value;

//     if (!username || !email || !phone || !dob) return;

//     if (!email.includes("@")) {
//       alert("Invalid email. Please check your email address.");
//       return;
//     }

//     if (phone.length !== 10 || isNaN(phone)) {
//       alert("Invalid phone number. Please enter a 10-digit phone number.");
//       return;
//     }

//     const today = new Date();
//     const pickedDate = new Date(dob);

//     if (pickedDate > today) {
//       alert("Invalid date of birth. Date of birth cannot be in the future.");
//       return;
//     }

//     setOpen(false);
//   };

//   return (
//     <div className="modal" onClick={open ? handleOutsideClick : null}>
      
//       {!open && (
//         <div className="main-container">
//           <h1>User Details Modal</h1>
//           <button className="open-form-btn" onClick={() => setOpen(true)}>
//             Open Form
//           </button>
//         </div>
//       )}

//       {open && (
//         <div
//           className="modal-content"
//           onClick={(e) => e.stopPropagation()}
//         >
//           <h2>Fill Details</h2>

//           <form onSubmit={handleSubmit}>
//             <label>Username:</label>
//             <input id="username" type="text" required />

//             <label>Email Address:</label>
//             <input id="email" type="email" required />

//             <label>Phone Number:</label>
//             <input id="phone" type="text" required />

//             <label>Date of Birth:</label>
//             <input id="dob" type="date" required />

//             <button className="submit-button" type="submit">
//               Submit
//             </button>
//           </form>
//         </div>
//       )}

//     </div>
//   );
// }

// export default App;


import { useState } from "react";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);

  const handleOutsideClick = (e) => {
    if (e.target.className === "modal") {
      setOpen(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const dob = document.getElementById("dob").value;

    if (!username || !email || !phone || !dob) return;

    if (!email.includes("@")) {
      alert("Invalid email. Please check your email address.");
      return;
    }

    if (phone.length !== 10 || isNaN(phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }

    const today = new Date();
    const pickedDate = new Date(dob);

    if (pickedDate > today) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
      return;
    }

    setOpen(false);
  };

  return (
    <div className="modal" onClick={open ? handleOutsideClick : null}>
      
      {!open && (
        <div className="main-container">
          <h1>User Details Modal</h1>
          <button className="open-form-btn" onClick={() => setOpen(true)}>
            Open Form
          </button>
        </div>
      )}

      {open && (
        <div
          className="modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <h2>Fill Details</h2>

          <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <input id="username" type="text" required />

            <label>Email Address:</label>
            <input id="email" type="email" required />

            <label>Phone Number:</label>
            <input id="phone" type="text" required />

            <label>Date of Birth:</label>
            <input id="dob" type="date" required />

            <button className="submit-button" type="submit">
              Submit
            </button>
          </form>
        </div>
      )}

    </div>
  );
}

export default App;