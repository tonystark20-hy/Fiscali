import React from "react";

const Finder = () => {
  const files = [
    // { name: "Custom Keyboard Shortcuts.pages", date: "4 Nov 2022 at 15:12" },
    {
      name: "SiriusXM 10-K - FY2021",
      date: "3 Nov 2022 at 14:57",
    },
    {
      name: "SiriusXM Credit Agreement - Dated 12.05.2012",
      date: "3 Nov 2022 at 14:57",
    },
    {
      name: "Editing path and command - resized.png",
      date: "3 Nov 2022 at 14:54",
    },
    {
      name: "Keyboard Shortcut highlighted - resized.png",
      date: "3 Nov 2022 at 14:54",
    },
    // {
    //   name: "",
    //   date: "",
    // },
    // Add more files as needed
  ];

  return (
    <div className="my-10 bg-white-700  h-fit flex justify-center items-center mx-auto">
      <div className="bg-white rounded-lg shadow-lg  flex flex-col">
        <div className="bg-gray-100 border-b border-gray-300 flex items-center p-2 rounded-t-lg">
          <div className="flex space-x-2">
            <button className="w-3 h-3 bg-red-500 rounded-full"></button>
            <button className="w-3 h-3 bg-yellow-500 rounded-full"></button>
            <button className="w-3 h-3 bg-green-500 rounded-full"></button>
          </div>
          <div className="flex-grow text-center font-semibold">
            Custom Keyboard Shortcuts
          </div>
        </div>
        <div className="flex flex-grow ">
          <div className="bg-gray-200 w-1/4 p-2 border-r border-gray-300 rounded-bl-lg text-sm">
            <ul>
              <li className="flex items-center mb-2">
                <span className="mr-2">📁</span> Applications
              </li>
              <li className="flex items-center mb-2">
                <span className="mr-2">📁</span> Pictures
              </li>
              <li className="flex items-center mb-2">
                <span className="mr-2">📁</span> Downloads
              </li>
              <li className="flex items-center mb-2">
                <span className="mr-2">📁</span> Desktop
              </li>
              <li className="flex items-center mb-2">
                <span className="mr-2">📁</span> Apl
              </li>
            </ul>
          </div>
          <div className="flex-grow p-2">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b  text-xs">
                  <th className="text-left p-2">Name</th>
                  <th className="text-left p-2">Date Modified</th>
                </tr>
              </thead>
              <tbody>
                {files.map((file, index) => (
                  <tr
                    key={index}
                    className="border-b text-md whitespace-nowrap"
                  >
                    <td className="p-2">{file.name}</td>
                    <td className="p-2">{file.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finder;
