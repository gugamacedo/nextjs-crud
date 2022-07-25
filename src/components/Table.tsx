import { EditIcon, DeleteIcon } from '../components/Icons'

import Client from '../core/Client'

interface TableProps {
  clients: Client[]
  editedClient?: (client: Client) => void
  deletedClient?: (client: Client) => void
}

const Table = (props: TableProps) => {
  return (
    <table className="w-full rounded-t-xl overflow-hidden">
      <thead
        className={`
        bg-gradient-to-r from-purple-500 to-purple-900
        text-gray-50
      `}
      >
        <tr>
          <th className="text-left p-4">Id: </th>
          <th className="text-left p-4">Name: </th>
          <th className="text-left p-4">Age: </th>
          {props.editedClient && props.deletedClient && (
            <th className="text-center p-4">Action: </th>
          )}
        </tr>
      </thead>
      <tbody>
        {props.clients?.map((client, index) => (
          <tr
            key={client.id}
            className={`
            ${index % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}
          `}
          >
            <td className="text-left p-4">{client.id}</td>
            <td className="text-left p-4">{client.name}</td>
            <td className="text-left p-4">{client.age}</td>
            {props.editedClient && props.deletedClient && (
              <td className="flex justify-center gap-5">
                <button
                  onClick={() => props.editedClient?.(client)}
                  className={`
                flex justify-center items-center
                text-green-500 rounded-full p-2 m-1
                ${index % 2 === 0 ? 'hover:bg-purple-100' : 'hover:bg-purple-200'}
              `}
                >
                  <EditIcon />
                </button>
                <button
                  onClick={() => props.deletedClient?.(client)}
                  className={`
                flex justify-center items-center
                text-red-500 rounded-full p-2
                ${index % 2 === 0 ? 'hover:bg-purple-100' : 'hover:bg-purple-200'}
              `}
                >
                  <DeleteIcon />
                </button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
