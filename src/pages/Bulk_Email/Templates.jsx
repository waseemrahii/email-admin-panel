

import React, { useState } from 'react';
import { AiOutlineMail, AiOutlineEdit, AiOutlineDelete, AiOutlineFileAdd } from 'react-icons/ai';

const Templates = ({ onSelectTemplate }) => {
  const [templates, setTemplates] = useState([
    { id: 1, name: 'Welcome Email', subject: 'Welcome to our service!', body: 'Thank you for joining us!' },
    { id: 2, name: 'Newsletter', subject: 'Our Latest Updates', body: 'Here are the latest updates...' },
  ]);
  const [editingTemplate, setEditingTemplate] = useState(null);
  const [newTemplate, setNewTemplate] = useState({ name: '', subject: '', body: '' });

  const handleEdit = (template) => {
    setEditingTemplate(template);
    setNewTemplate(template);
  };

  const handleSave = () => {
    setTemplates(templates.map(template =>
      template.id === editingTemplate.id ? newTemplate : template
    ));
    setEditingTemplate(null);
    setNewTemplate({ name: '', subject: '', body: '' });
  };

  const handleDelete = (id) => {
    setTemplates(templates.filter(template => template.id !== id));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTemplate({ ...newTemplate, [name]: value });
  };

  return (
    <section className="space-y-6 container p-10">
      <h3 className="text-2xl font-semibold mb-4">Email Templates</h3>
      <div className="card bg-base-100 shadow-lg p-4 mb-6">
        <h4 className="text-xl font-semibold mb-2">
          {editingTemplate ? 'Edit Template' : 'Add New Template'}
        </h4>
        <div className="flex items-center mb-2">
          {/* <AiOutlineFileAdd className="mr-2 text-lg" /> */}
          <input
            type="text"
            name="name"
            placeholder="Template Name"
            value={newTemplate.name}
            onChange={handleChange}
            className="input input-bordered w-full p-2 border border-gray-300 focus:border-green-400 focus:outline-none"
          />
        </div>
        <div className="flex items-center mb-2">
          {/* <AiOutlineMail className="mr-2 text-lg" /> */}
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={newTemplate.subject}
            onChange={handleChange}
            className="input input-bordered w-full p-2 border border-gray-300 focus:border-green-400 focus:outline-none"
          />
        </div>
        <textarea
          name="body"
          placeholder="Body"
          value={newTemplate.body}
          onChange={handleChange}
          className="textarea textarea-bordered w-full p-2 border border-gray-300 focus:border-green-400 focus:outline-none mb-2"
        />
        <button
          onClick={editingTemplate ? handleSave : () => setTemplates([...templates, { ...newTemplate, id: Date.now() }])}
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
            {templates.map(template => (
              <tr key={template.id}>
                <td>{template.name}</td>
                <td>{template.subject}</td>
                <td className='flex '>
                  <button
                    onClick={() => onSelectTemplate(template)}
                    className="btn btn-info btn-sm flex items-center"
                  >
                    <AiOutlineMail className="mr-1" />
                  </button>
                  <button
                    onClick={() => handleEdit(template)}
                    className="btn btn-info btn-sm ml-2 flex items-center"
                  >
                    <AiOutlineEdit className="mr-1" />
                  </button>
                  <button
                    onClick={() => handleDelete(template.id)}
                    className="btn btn-error btn-sm ml-2 flex items-center"
                  >
                    <AiOutlineDelete className="mr-1" /> 
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Templates;



// import React, { useState } from 'react';
// import { AiOutlineMail, AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';

// const Templates = ({ onSelectTemplate }) => {
//   const [templates, setTemplates] = useState([
//     { id: 1, name: 'Welcome Email', subject: 'Welcome to our service!', body: 'Thank you for joining us!' },
//     { id: 2, name: 'Newsletter', subject: 'Our Latest Updates', body: 'Here are the latest updates...' },
//   ]);

//   const handleDelete = (id) => {
//     setTemplates(templates.filter(template => template.id !== id));
//   };

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//       {templates.map(template => (
//         <div key={template.id} className="card bg-white shadow-lg p-6 rounded-lg">
//           <h3 className="text-lg font-semibold mb-2">{template.name}</h3>
//           <p className="text-gray-600 mb-4">{template.subject}</p>
//           <div className="flex justify-between items-center">
//             <button
//               onClick={() => onSelectTemplate(template)}
//               className="btn btn-sm bg-blue-500 text-white flex items-center"
//             >
//               <AiOutlineMail className="mr-1" /> Use Template
//             </button>
//             <button
//               onClick={() => handleDelete(template.id)}
//               className="btn btn-sm bg-red-500 text-white flex items-center"
//             >
//               <AiOutlineDelete className="mr-1" /> Delete
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Templates;
