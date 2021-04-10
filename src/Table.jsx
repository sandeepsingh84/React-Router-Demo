import React, { } from "react";

const Table = () => {
  return (
    <div className="bg-gray-100 p-16 ">
      <div classname=" ">
        <table className="w-full shadow overflow-hidden border-b border-gray-200 sm:rounded-lg min-w-full divide-y divide-gray-200  ">
          <thead class="bg-gray-50 tracking-wider">
            <tr className="tracking-wider">
              <th
                scope="col"
                class="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Title
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Role
              </th>
            </tr>
          </thead>
          <tbody classNam="">
            <tr className="bg-white border-b border-gray-200 tracking-wider">
              <td className="px-6  whitespace-nowrap">
                <div classname=" flex  item-center">
                  <div classname="  flex-shrink-0 ">
                    <img
                      class="h-10 w-10 -m-3 rounded-full"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
                      alt="jj"
                    ></img>
                    <div className="ml-10   -m-10">
                      <div className="text-sm font-medium text-gray-900">
                        Jane Cooper
                      </div>
                      <div className="text-sm text-gray-500">
                        jane.cooper@example.com
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4  whitespace-nowrap ">
                <div className="text-sm mt-4 font-normal text-gray-900">
                  Regional Paradigm Technician
                </div>
                <div className="text-sm text-gray-500">Optimization</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-200 text-green-900">
                  Active
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                Admin
              </td>
            </tr>
            <tr className="bg-white border-b border-gray-200 tracking-wider">
              <td className="px-6  whitespace-nowrap">
                <div classname=" flex min-w-full divide-y divide-gray-200 item-center">
                  <div classname="  flex-shrink-0 ">
                    <img
                      class="h-10 w-10 -m-3 rounded-full"
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                      alt="jj"
                    ></img>
                    <div className="ml-10   -m-10 ">
                      <div className="text-sm font-medium text-gray-900">
                      Cody Fisher
                      </div>
                      <div className="text-sm text-gray-500">
                      cody.fisher@example.com
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4  whitespace-nowrap ">
                <div className="text-sm mt-4 font-normal text-gray-900">
                Product Directives Officer
                </div>
                <div className="text-sm text-gray-500">Intranet</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-200 text-green-900">
                  Active
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
              Owner
              </td>
            </tr> 
            <tr className="bg-white border-b border-gray-200 tracking-wider">
              <td className="px-6  whitespace-nowrap">
                <div classname=" flex  item-center">
                  <div classname="  flex-shrink-0 ">
                    <img
                      class="h-10 w-10 -m-3 rounded-full"
                      src="https://images.unsplash.com/photo-1494354145959-25cb82edf23d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fHdvbWVufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                      alt="jj"
                    ></img>
                    <div className="ml-10   -m-10">
                      <div className="text-sm font-medium text-gray-900">
                      Esther Howard
                      </div>
                      <div className="text-sm text-gray-500">
                      esther.howard@example.com
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4  whitespace-nowrap ">
                <div className="text-sm mt-4 font-normal text-gray-900">
                Forward Response Developer
                </div>
                <div className="text-sm text-gray-500">Directives</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-200 text-green-900">
                  Active
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
              Member
              </td>
            </tr>
            <tr className="bg-white border-b border-gray-200 tracking-wider">
              <td className="px-6  whitespace-nowrap">
                <div classname=" flex  item-center">
                  <div classname="  flex-shrink-0 ">
                    <img
                      class="h-10 w-10 -m-3 rounded-full"
                      src="https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fG1lbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                      alt="jj"
                    ></img>
                    <div className="ml-10   -m-10">
                      <div className="text-sm font-medium text-gray-900">
                      Cameron Williamson
                      </div>
                      <div className="text-sm text-gray-500">
                      cameron.williamson@example.com
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4  whitespace-nowrap ">
                <div className="text-sm mt-4 font-normal text-gray-900">
                Internal Applications Engineer
                </div>
                <div className="text-sm text-gray-500">Security</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-200 text-green-900">
                  Active
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
              Member
              </td>
            </tr>   
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Table;
