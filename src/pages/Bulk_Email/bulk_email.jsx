// import React, { useState } from 'react';

// const BulkEmail = () => {
//   const [file, setFile] = useState(null);
//   const [fileName, setFileName] = useState('');
//   const [emails, setEmails] = useState([]);

//   const handleFileUpload = (e) => {
//     const uploadedFile = e.target.files[0];
//     if (uploadedFile) {
//       setFile(uploadedFile);
//       setFileName(uploadedFile.name);

//       // For demonstration purposes, simulate email extraction
//       // In a real application, you would parse the file and extract email addresses
//       const simulatedEmails = [
//         { id: 1, email: 'test1@example.com' },
//         { id: 2, email: 'test2@example.com' },
//       ];
//       setEmails(simulatedEmails);
//     }
//   };

//   return (
//     <section className="space-y-6 container p-10">
//       <h3 className="text-2xl font-semibold mb-4">Bulk Email Sender</h3>
//       <div className="mb-6">
//         <input 
//           type="file" 
//           accept=".csv, .txt" 
//           onChange={handleFileUpload}
//           className="file-input file-input-bordered file-input-primary w-full max-w-xs"
//         />
//       </div>
//       {fileName && (
//         <div className="card bg-base-100 shadow-lg p-4 mb-6">
//           <h4 className="text-lg font-semibold">Uploaded File</h4>
//           <p className="text-gray-700">{fileName}</p>
//         </div>
//       )}
//       <div className="card bg-base-100 shadow-lg p-4">
//         <h4 className="text-xl font-semibold mb-4">Email List</h4>
//         <ul className="list-disc ml-4 space-y-2">
//           {emails.map(email => (
//             <li key={email.id} className="bg-base-200 p-2 rounded-md shadow-md">{email.email}</li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// }

// export default BulkEmail;




// import React, { useState } from 'react';
// import { AiFillDelete } from 'react-icons/ai'; // Import React Icons for delete button
// import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast from react-toastify
// import 'react-toastify/dist/ReactToastify.css'; // Import react-toastify CSS


// const BulkEmailSender = ({ userPackage }) => {
//   const [emails, setEmails] = useState([]);
//   const [newEmail, setNewEmail] = useState('');
//   const [sentEmails, setSentEmails] = useState([]);
//   const [errorMessage, setErrorMessage] = useState('');
//   const [selectedTemplate, setSelectedTemplate] = useState(null);

//   const emailTemplates = [
//     { id: 1, name: 'Welcome Email', content: 'Dear User, Welcome to our service!' },
//     { id: 2, name: 'Promotion Email', content: 'Get 20% off on our premium services!' },
//     { id: 3, name: 'Reminder Email', content: 'Don’t forget to check our latest offers.' },
//   ];

//   const handleAddEmail = () => {
//     if (newEmail && !emails.includes(newEmail)) {
//       setEmails([...emails, newEmail]);
//       setNewEmail('');
//       toast.success('Email added successfully!');
//     } else {
//       toast.error('Invalid or duplicate email.');
//     }
//   };

//   const handleDeleteEmail = (emailToDelete) => {
//     setEmails(emails.filter(email => email !== emailToDelete));
//     toast.info('Email removed.');
//   };

//   const handleUploadFile = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onload = function (e) {
//       const fileContent = e.target.result;
//       const emailArray = fileContent.split('\n').map(email => email.trim());
//       setEmails([...emails, ...emailArray]);
//       toast.success('Emails uploaded successfully!');
//     };
//     reader.readAsText(file);
//   };

//   const handleSendEmails = () => {
//     if (emails.length > userPackage.emailLimit) {
//       setErrorMessage(`You cannot send more than ${userPackage.emailLimit} emails based on your package.`);
//       toast.error(`Limit exceeded! You can only send ${userPackage.emailLimit} emails.`);
//       return;
//     }

//     if (!selectedTemplate) {
//       setErrorMessage('Please select an email template.');
//       toast.error('Please select an email template.');
//       return;
//     }

//     setSentEmails([...sentEmails, ...emails]);
//     setEmails([]);
//     setErrorMessage('');
//     toast.success('Emails sent successfully!');
//   };

//   return (
//     <div className="container mx-auto p-12">
//       <h2 className="text-3xl font-bold mb-6">Bulk Email Sender</h2>

//       {errorMessage && (
//         <div className="alert alert-error mb-4">
//           {errorMessage}
//         </div>
//       )}

//       {/* Email Input */}
//       <div className="flex mb-4 items-center">
//         <input
//           type="email"
//           placeholder="Add Email"
//           value={newEmail}
//           onChange={(e) => setNewEmail(e.target.value)}
//           className="input input-bordered w-80 mr-2 border border-gray-300 rounded-lg p-2"
//         />
//         <button onClick={handleAddEmail} className="btn bg-gray-800 text-white px-6 py-2 rounded-lg">
//           Add Email
//         </button>
//       </div>

//       {/* Upload Email List */}
//       <div className="flex items-center mb-4">
//         <input type="file" accept=".txt" onChange={handleUploadFile} className="mr-2" />
//         <button className="btn bg-gray-800 text-white px-6 py-2 rounded-lg">Upload Email List</button>
//       </div>

//       {/* Email List */}
//       <div className="card bg-base-100 shadow-xl p-4 mb-6">
//         <h4 className="text-xl font-semibold mb-4">Email List ({emails.length})</h4>
//         <ul className="list-none space-y-2">
//           {emails.length > 0 ? (
//             emails.map((email, idx) => (
//               <li key={idx} className="flex justify-between items-center border-b-2 pb-2 border-gray-200">
//                 <span>{email}</span>
//                 <button onClick={() => handleDeleteEmail(email)} className="btn btn-error btn-xs px-3 py-1 rounded-full">
//                   <AiFillDelete className="text-xl" />
//                 </button>
//               </li>
//             ))
//           ) : (
//             <li>No emails added</li>
//           )}
//         </ul>
//       </div>

//       {/* Email Template Selection */}
//       <div className="card bg-base-100 shadow-xl p-4 mb-6">
//         <h4 className="text-xl font-semibold mb-4">Select Email Template</h4>
//         <div className="grid grid-cols-3 gap-6">
//           {emailTemplates.map((template) => (
//             <div
//               key={template.id}
//               className={`card p-4 cursor-pointer border ${selectedTemplate?.id === template.id ? 'border-primary' : 'border-gray-300'} rounded-lg`}
//               onClick={() => setSelectedTemplate(template)}
//             >
//               <h4 className="text-lg font-bold">{template.name}</h4>
//               <p>{template.content.slice(0, 50)}...</p>
//             </div>
//           ))}
//         </div>

//         {selectedTemplate && (
//           <div className="mt-4">
//             <h5 className="text-lg font-bold">Selected Template:</h5>
//             <p>{selectedTemplate.content}</p>
//           </div>
//         )}
//       </div>

//       {/* Send Emails Button */}
//       <button onClick={handleSendEmails} className="btn bg-gray-800 text-white w-full px-6 py-2 rounded-lg">
//         Send Emails
//       </button>

//       {/* Sent Emails */}
//       {sentEmails.length > 0 && (
//         <div className="card bg-base-100 shadow-xl p-4 mt-6">
//           <h4 className="text-xl font-semibold mb-4">Sent Emails</h4>
//           <ul className="list-none space-y-2">
//             {sentEmails.map((email, idx) => <li key={idx}>{email}</li>)}
//           </ul>
//         </div>
//       )}

//       {/* Toast Container */}
//       <ToastContainer />
//     </div>
//   );
// };

// export default BulkEmailSender;



import React, { useState } from 'react';
import { AiFillDelete } from 'react-icons/ai'; // Import React Icons for delete button
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast from react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import react-toastify CSS

const BulkEmailSender = ({ userPackage }) => {
  const [emails, setEmails] = useState([]);
  const [newEmail, setNewEmail] = useState('');
  const [sentEmails, setSentEmails] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [customTemplate, setCustomTemplate] = useState({ name: '', subject: '', body: '' });
  const [attachment, setAttachment] = useState(null);

  // Example of existing templates
  const existingTemplates = [
    { id: 1, name: 'Welcome Email', subject: 'Welcome to our Service', body: 'Thank you for joining us!' },
    { id: 2, name: 'Newsletter', subject: 'Monthly Updates', body: 'Here are the updates for this month...' },
    // Add more templates as needed
  ];

  const handleAddEmail = () => {
    if (newEmail && !emails.includes(newEmail)) {
      setEmails([...emails, newEmail]);
      setNewEmail('');
      toast.success('Email added successfully!');
    } else {
      toast.error('Invalid or duplicate email.');
    }
  };

  const handleDeleteEmail = (emailToDelete) => {
    setEmails(emails.filter(email => email !== emailToDelete));
    toast.info('Email removed.');
  };

  const handleUploadFile = (e) => {
    const file = e.target.files[0];
    setAttachment(file);
    toast.success('File attached successfully!');
  };

  const handleSendEmails = () => {
    if (emails.length > userPackage.emailLimit) {
      setErrorMessage(`You cannot send more than ${userPackage.emailLimit} emails based on your package.`);
      toast.error(`Limit exceeded! You can only send ${userPackage.emailLimit} emails.`);
      return;
    }

    if (!selectedTemplate && !customTemplate.subject) {
      setErrorMessage('Please select or create an email template.');
      toast.error('Please select or create an email template.');
      return;
    }

    setSentEmails([...sentEmails, ...emails]);
    setEmails([]);
    setCustomTemplate({ name: '', subject: '', body: '' }); // Reset custom template
    setSelectedTemplate(null); // Reset selected template
    setAttachment(null); // Reset attachment
    setErrorMessage('');
    toast.success('Emails sent successfully!');
  };

  const handleChangeCustomTemplate = (e) => {
    const { name, value } = e.target;
    setCustomTemplate({ ...customTemplate, [name]: value });
  };

  return (
    <div className="container mx-auto p-12">
      <h2 className="text-3xl font-bold mb-6">Bulk Email Sender</h2>

      {errorMessage && (
        <div className="alert alert-error mb-4">
          {errorMessage}
        </div>
      )}

      {/* Email Input */}
      <div className="flex mb-4 items-center">
        <input
          type="email"
          placeholder="Add Email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
          className="input input-bordered w-80 mr-2 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-0"
        />
        <button onClick={handleAddEmail} className="btn bg-gray-800 text-white px-6 py-2 rounded-lg">
          Add Email
        </button>
      </div>

      {/* Upload Email List */}
      <div className="flex items-center mb-4">
        <input type="file" accept=".txt" onChange={(e) => {
          const file = e.target.files[0];
          const reader = new FileReader();
          reader.onload = function (e) {
            const fileContent = e.target.result;
            const emailArray = fileContent.split('\n').map(email => email.trim());
            setEmails([...emails, ...emailArray]);
            toast.success('Emails uploaded successfully!');
          };
          reader.readAsText(file);
        }} className="mr-2" />
        <button className="btn bg-gray-800 text-white px-6 py-2 rounded-lg">Upload Email List</button>
      </div>

      {/* Email List */}
      <div className="card bg-base-100 shadow-xl p-4 mb-6">
        <h4 className="text-xl font-semibold mb-4">Email List ({emails.length})</h4>
        <ul className="list-none space-y-2">
          {emails.length > 0 ? (
            emails.map((email, idx) => (
              <li key={idx} className="flex justify-between items-center border-b-2 pb-2 border-gray-200">
                <span>{email}</span>
                <button onClick={() => handleDeleteEmail(email)} className="btn btn-error btn-xs px-3 py-1 rounded-full">
                  <AiFillDelete className="text-xl" />
                </button>
              </li>
            ))
          ) : (
            <li>No emails added</li>
          )}
        </ul>
      </div>

      {/* Existing Templates */}
      <div className="card bg-base-100 shadow-xl p-4 mb-6">
        <h4 className="text-xl font-semibold mb-4">Existing Email Templates</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {existingTemplates.map((template) => (
            <div key={template.id} className="card bg-gray-100 p-4 shadow-md rounded-lg">
              <h5 className="text-lg font-semibold mb-2">{template.name}</h5>
              <p><strong>Subject:</strong> {template.subject}</p>
              <p><strong>Body:</strong> {template.body}</p>
              <button 
                onClick={() => setSelectedTemplate(template)} 
                className="btn bg-gray-800 text-white mt-4"
              >
                Select Template
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Template */}
      <div className="card bg-base-100 shadow-xl p-4 mb-6">
        <h4 className="text-xl font-semibold mb-4">Create Custom Template</h4>
        <input
          type="text"
          name="name"
          placeholder="Template Name"
          value={customTemplate.name}
          onChange={handleChangeCustomTemplate}
          className="input input-bordered w-full mb-2 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-0"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={customTemplate.subject}
          onChange={handleChangeCustomTemplate}
          className="input input-bordered w-full mb-2 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-0"
        />
        <textarea
          name="body"
          placeholder="Body"
          value={customTemplate.body}
          onChange={handleChangeCustomTemplate}
          className="textarea textarea-bordered w-full mb-2 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-0"
        />

        {customTemplate.subject && (
          <div className="border p-4 bg-gray-100 mt-4 rounded-lg">
            <h5 className="text-xl font-semibold">Custom Template Preview</h5>
            <p><strong>Name:</strong> {customTemplate.name}</p>
            <p><strong>Subject:</strong> {customTemplate.subject}</p>
            <p><strong>Body:</strong> {customTemplate.body}</p>
          </div>
        )}
      </div>

      {/* File Attachment */}
      <div className="card bg-base-100 shadow-xl p-4 mb-6">
        <h4 className="text-xl font-semibold mb-4">Attach File</h4>
        <input type="file" onChange={handleUploadFile} className="file-input file-input-bordered w-full mb-4" />
        {attachment && (
          <div className="border p-4 bg-gray-100 mt-4 rounded-lg">
            <h5 className="text-lg font-semibold">Attached File</h5>
            <p>{attachment.name}</p>
          </div>
        )}
      </div>

      {/* Send Emails */}
      <div className="flex justify-between items-center">
        <button onClick={handleSendEmails} className="btn bg-blue-500 text-white px-6 py-2 rounded-lg">
          Send Emails
        </button>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default BulkEmailSender;

