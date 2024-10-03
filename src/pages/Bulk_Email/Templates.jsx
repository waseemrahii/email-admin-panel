import React, { useEffect, useState } from 'react';
import { AiOutlineMail, AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { addTemplate, updateTemplate, deleteTemplate, getTemplates } from '../../components/redux/auth/templateSlice';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast notifications
import { FaEdit } from 'react-icons/fa';

const Templates = ({ onSelectTemplate }) => {
  const dispatch = useDispatch();
  const templates = useSelector((state) => state.templates.templates); // Access the templates array from the slice
  const [editingTemplate, setEditingTemplate] = useState(null);
  const [newTemplate, setNewTemplate] = useState({ name: '', subject: '', body: '' });

  useEffect(() => {
    dispatch(getTemplates()); // Fetch templates when component mounts
  }, [dispatch]);

  useEffect(() => {
    if (editingTemplate) {
      setNewTemplate(editingTemplate);
    }
  }, [editingTemplate]);

  const handleSave = () => {
    if (editingTemplate) {
      dispatch(updateTemplate({ templateId: editingTemplate.id, templateData: newTemplate }))
        .then(() => {
          toast.success('Template updated successfully!'); // Toast notification for update
        })
        .catch(() => {
          toast.error('Failed to update template.'); // Error toast
        });
    } else {
      dispatch(addTemplate(newTemplate))
        .then(() => {
          toast.success('Template added successfully!'); // Toast notification for addition
        })
        .catch(() => {
          toast.error('Failed to add template.'); // Error toast
        });
    }
    setEditingTemplate(null);
    setNewTemplate({ name: '', subject: '', body: '' });
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this template?')) {
      dispatch(deleteTemplate(id))
        .then(() => {
          toast.success('Template deleted successfully!'); // Toast notification for deletion
        })
        .catch(() => {
          toast.error('Failed to delete template.'); // Error toast
        });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTemplate({ ...newTemplate, [name]: value });
  };

  console.log(templates); // Log the templates state

  return (
    <section className="space-y-6 container p-10">
      <h3 className="text-2xl font-semibold mb-4">Email Templates</h3>
      <div className="card bg-base-100 shadow-lg p-4 mb-6">
        <h4 className="text-xl font-semibold mb-2">
          {editingTemplate ? 'Edit Template' : 'Add New Template'}
        </h4>
        <input
          type="text"
          name="name"
          placeholder="Template Name"
          value={newTemplate.name}
          onChange={handleChange}
          className="input input-bordered w-full p-2 border border-gray-300 focus:border-green-400 focus:outline-none mb-2"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={newTemplate.subject}
          onChange={handleChange}
          className="input input-bordered w-full p-2 border border-gray-300 focus:border-gray-400 focus:outline-none mb-2"
        />
        <textarea
          name="body"
          placeholder="Body"
          value={newTemplate.body}
          onChange={handleChange}
          className="textarea textarea-bordered w-full p-2 border border-gray-300 focus:border-gray-400 focus:outline-none mb-2"
        />
        <button
          onClick={handleSave}
          className="btn bg-gray-800 text-white"
        >
          {editingTemplate ? 'Save Changes' : 'Add Template'}
        </button>
      </div>
      <div className="card bg-base-100 shadow-lg p-4">
        <h4 className="text-xl font-semibold mb-4">Existing Templates</h4>
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Subject</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(templates) && templates.length > 0 ? (
              templates.map(template => (
                <tr key={template._id}>
                  <td>{template.name}</td>
                  <td>{template.subject}</td>
                  <td className='flex '>
                    {/* <button
                      onClick={() => onSelectTemplate(template)}
                      className="btn btn-info btn-sm flex items-center"
                    >
                      <AiOutlineMail className="mr-1" />
                    </button> */}
                    <button
                      onClick={() => setEditingTemplate(template)}
                      className="btn btn-info btn-sm ml-2 flex items-center border-gray-700 hover:bg-gray-700 hover:text-white"
                    >
                      <FaEdit className="mr-1" />
                    </button>
                    <button
                      onClick={() => handleDelete(template._id)}
                      className="btn btn-info btn-sm ml-2 flex items-center  border-red-700 text-red-500 hover:bg-red-700 hover:text-white"
                    >
                      <AiOutlineDelete className="mr-1" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center">No templates available.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <ToastContainer /> {/* Toast container for notifications */}
    </section>
  );
};

export default Templates;
