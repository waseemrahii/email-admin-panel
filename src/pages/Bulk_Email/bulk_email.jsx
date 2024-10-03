
import React, { useState, useEffect } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ApiUrl from '../../ApiUrl';

const BulkEmailSender = ({ userPackage }) => {
  const [emails, setEmails] = useState([]);
  const [newEmail, setNewEmail] = useState('');
  const [sentEmails, setSentEmails] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [attachment, setAttachment] = useState(null);

  // Fetch user emails on component mount
  useEffect(() => {
    fetchEmails();
  }, []);

  // const fetchEmails = async () => {
  //   try {
  //     const response = await fetch(`${ApiUrl}/api/emails/user/66f94f4a2adf161104fef3c7`);
  //     if (response.ok) {
  //       const data = await response.json();
  //       setSentEmails(data.emails);
  //       // toast.success('Emails fetched successfully!');
  //     } else {
  //       toast.error('Failed to fetch emails.');
  //     }
  //   } catch (error) {
  //     toast.error('An error occurred while fetching emails.');
  //   }
  // };

  const fetchEmails = async () => {
    try {
      const response = await fetch(`${ApiUrl}/api/emails/user/66f94f4a2adf161104fef3c7`);
      if (response.ok) {
        const data = await response.json();
        setSentEmails(data.emails);

        // Store the _id in localStorage
        if (data._id) {
          localStorage.setItem('emailListId', data._id);
          // toast.success('Emails and ID fetched successfully!');
        } else {
          toast.error('Failed to fetch email list ID.');
        }
      } else {
        toast.error('Failed to fetch emails.');
      }
    } catch (error) {
      toast.error('An error occurred while fetching emails.');
    }
  };
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
    const reader = new FileReader();
    reader.onload = function (e) {
      const fileContent = e.target.result;
      const emailArray = fileContent.split('\n').map(email => email.trim());
      setEmails([...emails, ...emailArray]);
      toast.success('Emails uploaded successfully!');
    };
    reader.readAsText(file);
  };


  const handleSubmitEmails = async () => {
    if (emails.length === 0) {
      toast.error('No emails to submit.');
      return;
    }
  
    const payload = {
      userId: '66f94f4a2adf161104fef3c7',
      emails: emails,
    };
  
    console.log("data ----", payload);
  
    try {
      const response = await fetch(`${ApiUrl}/api/emails/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
  
      if (response.ok) {
        await fetchEmails(); // Fetch updated emails after submission
        setEmails([]); // Clear email list after submission
        toast.success('Emails submitted and fetched successfully!');
      } else {
        const errorData = await response.json();
        if (errorData.message) {
          // Assuming the backend sends the validation error in the "message" field
          toast.error(errorData.message);
        } else {
          toast.error('Failed to submit emails.');
        }
      }
    } catch (error) {
      toast.error('An error occurred while submitting emails.');
    }
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
      <div className="flex mb-4 items-center px-4 py-6">
        <input
          type="email"
          placeholder="Add Email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
          className="input input-bordered w-80 mr-2 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-0 hover:text-white"
        />
        <button onClick={handleAddEmail} className="btn bg-gray-500 text-white  hover:text-white px-6 py-2 rounded-lg">
          Add Email
        </button>
      </div>

      {/* Upload Email List */}
      <div className="flex items-center mb-4 px-6">
        <input type="file" accept=".txt" onChange={handleUploadFile} className="mr-2" />
        <button className="btn bg-gray-500 text-white px-6 py-2 rounded-lg hover:text-white">Upload Email List</button>
      </div>

      {/* Email List */}
      <div className="card bg-base-100 shadow-xl p-6 mb-6 ">
        <h4 className="text-xl font-semibold mb-4 ">Uploading Email List ({emails.length})</h4>
        <table className="table-auto w-full">
          <thead className='bg-gray-400 text-white rounded-lg'>
            <tr className="text-left">
              <th className="p-2 font-bold">Email</th>
              <th className="p-2 font-bold">Action</th>
            </tr>
          </thead>
          <tbody>
            {emails.length > 0 ? (
              emails.map((email, idx) => (
                <tr key={idx} className="border-b">
                  <td className="p-2">{email}</td>
                  <td className="p-2">
                    <button onClick={() => handleDeleteEmail(email)} className="btn btn-error btn-xs px-3 py-1 rounded-full">
                      <AiFillDelete className="text-xl" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" className="p-6">No emails added</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Submit Emails */}
      <button onClick={handleSubmitEmails} className="btn bg-gray-500 text-white hover:text-white px-6 mr-5 rounded-lg">
        Submit Emails
      </button>

      {/* Sent Emails Table */}
      <div className="mt-10 p-10 rounded-lg " style={{boxShadow:"1px 1px 10px rgba(0,0,0,.1)"}}>
        <h4 className="text-xl font-semibold mb-4">Emails List ({sentEmails.length})</h4>
        <table className="table-auto w-full">
          <thead className='bg-gray-300 rounded'>
            <tr className="text-left">
              <th className="p-2 font-bold">ID</th>
              <th className="p-2 font-bold">Email</th>
            </tr>
          </thead>
          <tbody>
            {sentEmails.length > 0 ? (
              sentEmails.map((email, idx) => (
                <tr key={idx} className="border-b">
                  <td className="p-2">{idx + 1}</td>
                  <td className="p-2">{email}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" className="p-2">No sent emails</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <ToastContainer />
    </div>
  );
};

export default BulkEmailSender;

