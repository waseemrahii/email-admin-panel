// import React, { useEffect, useState } from 'react';
// import { AiFillDelete } from 'react-icons/ai';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { getTemplates } from '../../components/redux/auth/templateSlice'; // Assuming you have the slice defined

// const SendEmail = ({ userPackage }) => {
//   const dispatch = useDispatch();
//   const templates = useSelector((state) => state.templates.templates); // Fetch templates from Redux state
//   const [emails, setEmails] = useState([]);
//   const [newEmail, setNewEmail] = useState('');
//   const [sentEmails, setSentEmails] = useState([]);
//   const [errorMessage, setErrorMessage] = useState('');
//   const [selectedTemplate, setSelectedTemplate] = useState(null);
//   const [customTemplate, setCustomTemplate] = useState({ name: '', subject: '', body: '' });
//   const [attachment, setAttachment] = useState(null);

//   // Fetch templates on component mount
//   useEffect(() => {
//     dispatch(getTemplates());
//   }, [dispatch]);

//   // Handle template selection and update form
//   const handleSelectTemplate = (template) => {
//     setSelectedTemplate(template);
//     setCustomTemplate({ name: template.name, subject: template.subject, body: template.body });
//     toast.info('Template selected!');
//   };

//   const handleUploadFile = (e) => {
//     const file = e.target.files[0];
//     setAttachment(file);
//     toast.success('File attached successfully!');
//   };

//   const handleSendEmails = () => {
//     if (emails.length > userPackage.emailLimit) {
//       setErrorMessage(`You cannot send more than ${userPackage.emailLimit} emails based on your package.`);
//       toast.error(`Limit exceeded! You can only send ${userPackage.emailLimit} emails.`);
//       return;
//     }

//     if (!selectedTemplate && !customTemplate.subject) {
//       setErrorMessage('Please select or create an email template.');
//       toast.error('Please select or create an email template.');
//       return;
//     }

//     setSentEmails([...sentEmails, ...emails]);
//     setEmails([]);
//     setCustomTemplate({ name: '', subject: '', body: '' });
//     setSelectedTemplate(null);
//     setAttachment(null);
//     setErrorMessage('');
//     toast.success('Emails sent successfully!');
//   };

//   const handleChangeCustomTemplate = (e) => {
//     const { name, value } = e.target;
//     setCustomTemplate({ ...customTemplate, [name]: value });
//   };

//   return (
//     <div className="container mx-auto p-8 bg-white shadow-lg rounded-lg max-w-6xl">
//       <h2 className="text-4xl font-semibold  mb-8 text-gray-800">Send Email</h2>

//       {errorMessage && (
//         <div className="bg-red-100 text-red-800 px-4 py-3 mb-6 rounded-lg">
//           {errorMessage}
//         </div>
//       )}

//       <div className="flex gap-8">
//     {/* Email Form Section (Left) */}
//     <div className="w-1/2">
//           {/* Custom Template */}
//           <h3 className="text-xl font-semibold text-gray-700 mb-4">Email</h3>
//           <input
//             type="text"
//             name="name"
//             placeholder="Template Name"
//             value={customTemplate.name}
//             onChange={handleChangeCustomTemplate}
//             className="input input-bordered w-full mb-4 p-3 rounded-lg border"
//           />
//           <input
//             type="text"
//             name="subject"
//             placeholder="Subject"
//             value={customTemplate.subject}
//             onChange={handleChangeCustomTemplate}
//             className="input input-bordered w-full mb-4 p-3 rounded-lg border"
//           />
//           <textarea
//             name="body"
//             placeholder="Body"
//             value={customTemplate.body}
//             onChange={handleChangeCustomTemplate}
//             className="textarea textarea-bordered w-full mb-4 p-3 rounded-lg border"
//           />

//           {/* File Attachment
//           <div className="mb-4">
//             <label className="block text-lg font-semibold mb-2 text-gray-600">Attach File</label>
//             <input type="file" onChange={handleUploadFile} className="block w-full text-gray-600" />
//           </div> */}

//           {/* Send Emails */}
//           <div className="flex justify-end">
//             <button
//               onClick={handleSendEmails}
//               className="btn bg-gray-500 text-white px-6 py-2 rounded-lg"
//             >
//               Send Emails
//             </button>
//           </div>
//         </div>
//         {/* Email Templates Section (Right) */}
//         <div className="w-1/2">
//           <h3 className="text-xl font-semibold text-gray-700 mb-4">Select Email Template</h3>
//           <div className="grid grid-cols-1 gap-4">
//             {templates.map((template) => (
//               <div key={template.id} className="bg-gray-50 p-4 border rounded-lg shadow-sm">
//                 <h5 className="font-bold text-gray-800 mb-2">{template.name}</h5>
//                 <p><strong>Subject:</strong> {template.subject}</p>
//                 <p className="mb-4"><strong>Body:</strong> {template.body}</p>
//                 <button
//                   onClick={() => handleSelectTemplate(template)}
//                   className="btn bg-blue-500 text-white w-full"
//                 >
//                   Select Template
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>

    
//       </div>

//       <ToastContainer />
//     </div>
//   );
// };

// export default SendEmail;



import React, { useEffect, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { getTemplates } from '../../components/redux/auth/templateSlice'; // Assuming you have the slice defined
import axios from 'axios'; // Assuming you're using axios for HTTP requests
import ApiUrl from '../../ApiUrl';

const SendEmail = ({ userPackage }) => {
  const dispatch = useDispatch();
  const templates = useSelector((state) => state.templates.templates); // Fetch templates from Redux state
  const [emails, setEmails] = useState([]);
  const [newEmail, setNewEmail] = useState('');
  const [sentEmails, setSentEmails] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [customTemplate, setCustomTemplate] = useState({ name: '', subject: '', body: '' });
  const [attachment, setAttachment] = useState(null);

  // Fetch templates on component mount
  useEffect(() => {
    dispatch(getTemplates());
  }, [dispatch]);

  // Handle template selection and update form
  const handleSelectTemplate = (template) => {
    setSelectedTemplate(template);
    setCustomTemplate({ name: template.name, subject: template.subject, body: template.body });
    toast.info('Template selected!');
  };

  const handleUploadFile = (e) => {
    const file = e.target.files[0];
    setAttachment(file);
    toast.success('File attached successfully!');
  };

  const handleSendEmails = async () => {
    // if (emails.length > userPackage.emailLimit) {
    //   setErrorMessage(`You cannot send more than ${userPackage.emailLimit} emails based on your package.`);
    //   toast.error(`Limit exceeded! You can only send ${userPackage.emailLimit} emails.`);
    //   return;
    // }

    if (!selectedTemplate && !customTemplate.subject) {
      setErrorMessage('Please select or create an email template.');
      toast.error('Please select or create an email template.');
      return;
    }

    // Retrieve data from localStorage
    const emailListId = localStorage.getItem('emailListId');
    const subscriptionId = localStorage.getItem('66f8967ab82ca26bcfe71c20');
    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user?.user?.id;
    const token = localStorage.getItem('token');

    if (!emailListId  || !userId || !token) {
      setErrorMessage('Missing required data from localStorage.');
      toast.error('Missing required data.');
      return;
    }

    // Prepare email data to be sent
    const emailData = {
      subject: customTemplate.subject || selectedTemplate.subject,
      body: customTemplate.body,
      emailListId:"66f95469e363a577cb29dea0",
      subscriptionId:"66fec6513b75f26dbf315722",
      userId:"66f94f4a2adf161104fef3c7",
    };  

      console.log("emailData====", emailData)
    try {
      // Send the POST request to the API
      const response = await axios.post(
        `${ApiUrl}/api/emails/send`,
        emailData,
     
        
      );

      if (response.status === 200) {
        setSentEmails([...sentEmails, ...emails]);
        setEmails([]);
        setCustomTemplate({ name: '', subject: '', body: '' });
        setSelectedTemplate(null);
        setAttachment(null);
        setErrorMessage('');
        toast.success('Emails sent successfully!');
      } else {
        setErrorMessage('Failed to send emails.');
        toast.error('Failed to send emails.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setErrorMessage('Error sending email.');
      toast.error('Error sending email.');
    }
  };

  const handleChangeCustomTemplate = (e) => {
    const { name, value } = e.target;
    setCustomTemplate({ ...customTemplate, [name]: value });
  };

  return (
    <div className="container mx-auto p-8 bg-white shadow-lg rounded-lg max-w-6xl">
      <h2 className="text-4xl font-semibold  mb-8 text-gray-800">Send Email</h2>

      {errorMessage && (
        <div className="bg-red-100 text-red-800 px-4 py-3 mb-6 rounded-lg">
          {errorMessage}
        </div>
      )}

      <div className="flex gap-8">
        {/* Email Form Section (Left) */}
        <div className="w-1/2">
          {/* Custom Template */}
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Email</h3>
        
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={customTemplate.subject}
            onChange={handleChangeCustomTemplate}
            className="input input-bordered w-full mb-4 p-3 rounded-lg border"
          />
          <textarea
            name="body"
            placeholder="Body"
            value={customTemplate.body}
            onChange={handleChangeCustomTemplate}
            className="textarea textarea-bordered w-full mb-4 p-3 rounded-lg border"
          />

          {/* Send Emails */}
          <div className="flex justify-end">
            <button
              onClick={handleSendEmails}
              className="btn bg-gray-500 text-white px-6 py-2 rounded-lg"
            >
              Send Emails
            </button>
          </div>
        </div>
        {/* Email Templates Section (Right) */}
        <div className="w-1/2">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Select Email Template</h3>
          <div className="grid grid-cols-1 gap-4">
            {templates.map((template) => (
              <div key={template.id} className="bg-gray-50 p-4 border rounded-lg shadow-sm">
                <h5 className="font-bold text-gray-800 mb-2">{template.name}</h5>
                <p><strong>Subject:</strong> {template.subject}</p>
                <p className="mb-4"><strong>Body:</strong> {template.body}</p>
                <button
                  onClick={() => handleSelectTemplate(template)}
                  className="btn bg-blue-500 text-white w-full"
                >
                  Select Template
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default SendEmail;
