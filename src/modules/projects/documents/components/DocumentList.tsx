import { useQuery } from '@apollo/client'
import { MdFolder } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { useFragment } from '@gql'
import DocumentsQuery from '@projects/documents/queries/DocumentsQuery'
import DocumentFragment from '@projects/documents/fragments/DocumentFragment'

const DocumentList = () => {
  const navigate = useNavigate()
  const { data, loading } = useQuery(DocumentsQuery)
  const documents = data?.documents?.edges.map(documentEdge => useFragment(DocumentFragment, documentEdge?.node)) ?? []

  return (
      <div>
        <ul className="list-none divide-y">
          {
            documents.map(document => (
                <li key={document?.id} className="py-2">
                  <button
                      className="link flex items-center gap-2"
                      onClick={() => navigate(`/documents/${document?.id}`)}
                  >
                    <MdFolder/>
                    {document?.title}
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