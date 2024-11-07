import { useQuery } from '@apollo/client'
import { MdFolder } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import DocumentsQuery from '@projects/documents/queries/DocumentsQuery'

const DocumentList = () => {
  const navigate = useNavigate()
  const { data, loading } = useQuery(DocumentsQuery)

  return (
      <div>
        <ul className="list-none divide-y">
          {
            data?.documents?.edges.map(document => (
                <li key={document?.node.id} className="py-2">
                  <button
                      className="link flex items-center gap-2"
                      onClick={() => navigate(`/documents/${document?.node?.id}`)}
                  >
                    <MdFolder/>
                    {document?.node.title}
                  </button>
                </li>
            ))
          }
        </ul>
        {loading && <p>Cargando...</p>}
      </div>
  )
}

export default DocumentList