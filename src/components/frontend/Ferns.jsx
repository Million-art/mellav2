import React, { useState } from 'react';
import { Block, Button, List, ListItem } from 'konsta/react';
import { FaCopy } from 'react-icons/fa'; // Import copy icon

const Ferns = () => {
  // State to manage the copy button status
  const [isCopied, setIsCopied] = useState(false);

  // The invitation link (for demonstration purposes)
  const invitationLink = 'https://example.com/invite';

  // Function to copy the invitation link to the clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(invitationLink).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    });
  };

  // Sample list of invited users
  const invitedUsers = [
    { name: 'Alice Johnson', email: 'alice@example.com' },
    { name: 'Bob Smith', email: 'bob@example.com' },
    { name: 'Charlie Brown', email: 'charlie@example.com' },
    { name: 'Charlie Brown', email: 'charlie@example.com' },
    { name: 'Charlie Brown', email: 'charlie@example.com' },
    { name: 'Charlie Brown', email: 'charlie@example.com' },
    { name: 'Charlie Brown', email: 'charlie@example.com' },
    { name: 'Charlie Brown', email: 'charlie@example.com' },
    { name: 'Charlie Brown', email: 'charlie@example.com' },
    { name: 'Charlie Brown', email: 'charlie@example.com' },
    { name: 'Charlie Brown', email: 'charlie@example.com' },
    { name: 'Charlie Brown', email: 'charlie@example.com' },
    { name: 'Charlie Brown', email: 'charlie@example.com' },
    { name: 'Charlie Brown', email: 'charlie@example.com' },
    { name: 'Charlie Brown', email: 'charlie@example.com' },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Ferns</h1>
      <p className="mb-4">You have invited {invitedUsers.length} users.</p>

      {/* Block for the invitation link */}
      <Block className="p-4 bg-gray-800 rounded-lg mb-6">
        <div className="flex items-center">
          <span className="mr-2">Your invitation link:</span>
          <input
            type="text"
            readOnly
            value={invitationLink}
            className="flex-grow p-2 bg-gray-700 text-white rounded"
          />
          <button
            onClick={copyToClipboard}
            className="ml-2 flex items-center px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            <FaCopy size={16} />
            {isCopied ? ' Copied!' : ' Copy'}
          </button>
        </div>
      </Block>

      {/* Block for the list of invited users */}
      <Block >
        <h2 className="text-xl font-semibold mb-4">Invited Users</h2>
        <List className='h-[200px] overflow-y-scroll'>
          {invitedUsers.map((user, index) => (
            <ListItem
              key={index}
              title={user.name}
              after={user.email}
              className={`list-item`}  

            />
          ))}
        </List>
      </Block>
    </div>
  );
};

export default Ferns;
